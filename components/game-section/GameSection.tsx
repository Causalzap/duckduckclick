// components/game-section/GameSection.tsx
'use client';

import { useState, useRef } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/** 把字面量类型（"About"）宽化为 string/number/boolean；对象与数组递归处理 */
type WidenLiterals<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends (infer U)[] ? WidenLiterals<U>[]
  : T extends object ? { [K in keyof T]: WidenLiterals<T[K]> }
  : T;

/** 深度可选 */
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

/** 将 defaultContent 的“窄类型”宽化为可扩展的形状 */
type ContentShape = WidenLiterals<typeof defaultContent>;

/** 运行时深合并：对象递归，数组整段替换，原子值覆盖 */
function deepMerge<T>(base: T, patch?: DeepPartial<T>): T {
  if (!patch) return base;
  const result: any = Array.isArray(base) ? [...(base as any)] : { ...(base as any) };

  for (const key in patch) {
    if (!Object.prototype.hasOwnProperty.call(patch, key)) continue;
    const pVal = (patch as any)[key];
    const bVal = (base as any)[key];

    if (pVal === undefined) {
      result[key] = bVal;
      continue;
    }

    if (Array.isArray(bVal)) {
      result[key] = Array.isArray(pVal) ? pVal : bVal;
    } else if (bVal && typeof bVal === 'object') {
      result[key] = deepMerge(bVal, pVal);
    } else {
      result[key] = pVal;
    }
  }

  return result as T;
}

interface GameSectionProps {
  /** 允许传入“部分结构”，缺失部分用 defaultContent 兜底 */
  content?: DeepPartial<ContentShape>;
}

export function GameSection({ content }: GameSectionProps) {
  // 把窄类型的 defaultContent 断言为宽化后的形状，再做深合并
  const baseContent = defaultContent as unknown as ContentShape;
  const mergedContent = deepMerge(baseContent, content);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section
      id="game-section"
      className={cn(
        theme.gameSection.layout.section,
        theme.layout.section.scrollMargin
      )}
    >
      {layout.gameSection.isVisible.title && (
        <h2
          className={cn(
            theme.gameSection.typography.title,
            theme.gameSection.spacing.title
          )}
        >
          {mergedContent.gameSection.title}
        </h2>
      )}

      <div
        ref={containerRef}
        className={cn(
          "w-full max-w-4xl mx-auto overflow-hidden shadow-xl relative",
          theme.gameSection.colors.container,
          "mb-0 rounded-none"
        )}
      >
        <iframe
          src={mergedContent.gameSection.game.url}
          className="w-full h-full aspect-video border-0"
          title={mergedContent.gameSection.game.title}
          /** React 正确写法：允许全屏 */
          allowFullScreen
        />
      </div>

      <div className="flex justify-end items-center w-full max-w-4xl mx-auto mb-16 bg-gray-700/70 dark:bg-gray-800/70 text-white rounded-none p-2 shadow-md">
        <Button
          onClick={toggleFullscreen}
          size="icon"
          variant="ghost"
          className="hover:bg-white/20 text-white rounded-full p-1.5 transition-colors"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 9L4 4m0 0l5 0M4 4l0 5" />
            <path d="M15 9l5-5m0 0h-5m5 0v5" />
            <path d="M9 15l-5 5m0 0h5m-5 0v-5" />
            <path d="M15 15l5 5m0 0v-5m0 5h-5" />
          </svg>
        </Button>
      </div>
    </section>
  );
}
