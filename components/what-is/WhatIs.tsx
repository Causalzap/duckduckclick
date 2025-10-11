import { useState } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

const IconMap = {
  GamepadIcon: () => <></>,
  HelpCircleIcon: () => <></>,
  InfoIcon: () => <></>
};

interface WhatIsProps {
  content?: typeof defaultContent;
}

// 增强的解析函数：处理加粗标记、标题标记和数学公式
const parseTextWithHeadings = (text: string) => {
  const lines = text.split('\n');
  
  return lines.map((line, index) => {
    if (line.trim() === '') return null;
    
    // 检查是否是标题行（以**开头和结尾）
    if (line.startsWith('**') && line.endsWith('**')) {
      const titleText = line.slice(2, -2).trim();
      return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{titleText}</h3>;
    }
    
    // 处理包含数学公式的行
    const mathRegex = /\$([^$]+)\$/g;
    if (mathRegex.test(line)) {
      const parts = [];
      let lastIndex = 0;
      let match;
      
      mathRegex.lastIndex = 0;
      
      while ((match = mathRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        
        const formula = match[1]
          .replace(/\\textbf{([^}]+)}/g, '$1')
          .replace(/\\mathbf{([^}]+)}/g, '$1')
          .replace(/\\ /g, ' '); // 替换LaTeX空格为普通空格
        
        parts.push(
          <span key={`math-${parts.length}`} className="font-bold text-blue-700 mx-1">
            {formula}
          </span>
        );
        
        lastIndex = match.index + match[0].length;
      }
      
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }
      
      return <p key={index} className="mt-3 text-gray-800 leading-relaxed">{parts}</p>;
    }
    
    // 处理普通文本中的加粗标记
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={index} className="mt-3 text-gray-800 leading-relaxed">
        {parts.map((part: string, partIndex: number) => {
          if (partIndex % 2 === 1) {
            return <strong key={partIndex} className="font-semibold">{part}</strong>;
          }
          return part;
        })}
      </p>
    );
  }).filter(Boolean);
};

export function WhatIs({ content = defaultContent }: WhatIsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // 解析整个描述文本
  const parsedDescription = parseTextWithHeadings(content.whatIs.description);
  
  // 简化显示逻辑：直接按元素数量控制
  const previewCount = 3; // 显示前3个元素
  const visibleContent = isExpanded 
    ? parsedDescription 
    : parsedDescription.slice(0, previewCount);
  
  const hasMoreContent = parsedDescription.length > previewCount;

  return (
    <section
      id="what-is"
      className={cn(
        theme.whatIs.layout.section,
        theme.layout.section.scrollMargin
      )}
    >
      <div className={theme.whatIs.layout.container}>
        <div className={cn(theme.whatIs.colors.card, theme.whatIs.layout.card, theme.whatIs.spacing.card)}>
          <div className={layout.whatIs.grid.columns}>
            <div className={theme.whatIs.layout.logoWrapper}>
              <img
                src={content.whatIs.logo.src}
                alt={content.whatIs.logo.alt}
                className={cn(
                  layout.whatIs.logo.size.width,
                  layout.whatIs.logo.size.height,
                  theme.whatIs.layout.logo
                )}
              />
            </div>
            <div className={layout.whatIs.content.span}>
              <h2 className={cn(theme.whatIs.typography.title, theme.whatIs.spacing.title, "text-3xl font-bold mb-6 text-black")}>
                {content.whatIs.title}
              </h2>
              
              {/* 描述文本 */}
              <div className={cn(
                theme.whatIs.typography.description,
                theme.whatIs.colors.description,
                theme.whatIs.spacing.description,
                "text-black"
              )}>
                {/* 显示内容 */}
                {visibleContent}
                
                {/* 添加主要的CTA按钮 */}
                <div className="my-6">
                  <Link 
                    href="#game-container"
                    className={cn(
                      "inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg",
                      "hover:bg-green-700 transition-colors duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",
                      "text-lg shadow-md hover:shadow-lg"
                    )}
                  >
                    <span className="mr-2">🎮</span>
                    Play Now
                  </Link>
                </div>

                {/* 显示更多/更少按钮 */}
                {hasMoreContent && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={cn(
                      "flex items-center mt-4 text-blue-600 hover:text-blue-800",
                      "font-medium text-sm transition-colors duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
                    )}
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" />
                        Show less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" />
                        Show more »
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}