// components/game-section/GameSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RatingComponent } from "./RatingComponent";
import { CommentForm } from "./CommentForm";
import { CommentsSection } from "../comments/CommentsSection";
import { games } from "@/app/games/game-data";

// ========== 类型定义 ==========
type WidenLiterals<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends (infer U)[] ? WidenLiterals<U>[]
  : T extends object ? { [K in keyof T]: WidenLiterals<T[K]> }
  : T;

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

type ContentShape = WidenLiterals<typeof defaultContent>;

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
// ========== 类型定义结束 ==========

// ========== 分享模态框组件 ==========
interface ShareModalProps {
  gameUrl: string;
  gameTitle: string;
  onClose: () => void;
}

function ShareModal({ gameUrl, gameTitle, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(gameUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = gameUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToSocial = (platform: string) => {
    const encodedUrl = encodeURIComponent(gameUrl);
    const encodedTitle = encodeURIComponent(gameTitle);
    
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Share this game</h3>
          
          {/* 社交媒体图标 */}
          <div className="flex justify-center space-x-4 mb-6">
            {[
              { platform: 'facebook', icon: 'f', color: 'bg-blue-600', label: 'Facebook' },
              { platform: 'twitter', icon: 'X', color: 'bg-black', label: 'X (Twitter)' },
              { platform: 'whatsapp', icon: '💬', color: 'bg-green-500', label: 'WhatsApp' },
              { platform: 'linkedin', icon: 'in', color: 'bg-blue-500', label: 'LinkedIn' },
              { platform: 'reddit', icon: 'R', color: 'bg-orange-500', label: 'Reddit' }
            ].map((social) => (
              <button
                key={social.platform}
                onClick={() => shareToSocial(social.platform)}
                className={`w-12 h-12 rounded-full ${social.color} text-white flex items-center justify-center text-lg font-bold hover:opacity-90 transition-opacity`}
                title={`Share on ${social.label}`}
                aria-label={`Share on ${social.label}`}
              >
                {social.icon}
              </button>
            ))}
          </div>
          
          {/* 链接复制区域 */}
          <div className="flex mb-4">
            <input
              type="text"
              value={gameUrl}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg border border-gray-600 text-sm"
            />
            <Button
              onClick={copyToClipboard}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-l-none"
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========== 游戏蒙版组件 ==========
interface GameOverlayProps {
  title: string;
  description: string;
  image: string;
  onPlay: () => void;
  onShare: () => void;
  onComment: () => void;
  isVisible: boolean;
}

function GameOverlay({ 
  title, 
  description, 
  image,
  onPlay, 
  onShare, 
  onComment, 
  isVisible 
}: GameOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-500 p-8 flex flex-col justify-center items-center text-center z-10">
      {/* 游戏图片 - 移除边框和圆角 */}
      <div className="mb-6">
        <img 
          src={image} 
          alt={title}
          className="w-48 h-48 object-contain" // 移除了圆角和边框
        />
      </div>
      
      {/* 游戏标题和描述 */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-black/90 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* 主操作按钮 */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Button
          onClick={onPlay}
          className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
          size="lg"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
          PLAY GAME
        </Button>
      </div>

    </div>
  );
}

// ========== 主组件 ==========
// ========== 主组件 ==========
interface GameSectionProps {
  content?: DeepPartial<ContentShape>;
  gameId?: string;
}

export function GameSection({ content, gameId = "duck-duck-click" }: GameSectionProps) {
  const baseContent = defaultContent as unknown as ContentShape;
  const mergedContent = deepMerge(baseContent, content);

  // 确保正确获取当前游戏数据
  const getCurrentGame = () => {
    // 首先尝试通过gameId获取
    if (games[gameId]) {
      return games[gameId];
    }
    
    // 如果gameId不存在，尝试通过URL路径匹配（仅在客户端执行）
    if (typeof window !== 'undefined') {
      const pathMatch = Object.values(games).find(game => 
        game.url === window.location.pathname
      );
      
      // 如果找到匹配的路径，返回该游戏
      if (pathMatch) {
        return pathMatch;
      }
    }
    
    // 如果还是找不到，使用默认游戏
    return games["duck-duck-click"] || Object.values(games)[0];
  };

  const [currentGame, setCurrentGame] = useState(() => {
    // 在useState初始化时使用安全的getCurrentGame版本
    if (games[gameId]) {
      return games[gameId];
    }
    return games["duck-duck-click"] || Object.values(games)[0];
  });
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showGameOverlay, setShowGameOverlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // 当gameId变化时更新当前游戏（在客户端执行）
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentGame(getCurrentGame());
    }
  }, [gameId]);

  // 修复GameOverlay中的onPlay函数引用
  const handlePlayGame = () => {
    setShowGameOverlay(false);
  };

  // 修复ShareModal中的游戏URL获取
  const getGameUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return "#";
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  const handleCommentsClick = () => {
    setShowComments(!showComments);
    setShowCommentForm(false);
  };

  const handleAddCommentClick = () => {
    setShowCommentForm(true);
    setShowComments(true);
  };

  return (
    <section
      id="game-section"
      className={cn(
        theme.gameSection?.layout?.section,
        theme.layout?.section?.scrollMargin
      )}
    >
      {layout.gameSection?.isVisible?.title && (
        <h2
          className={cn(
            theme.gameSection?.typography?.title,
            theme.gameSection?.spacing?.title
          )}
        >
          {mergedContent.gameSection?.title}
        </h2>
      )}

      {/* 游戏容器 - 移除圆角和阴影 */}
      <div
        ref={containerRef}
        className={cn(
          "w-full max-w-4xl mx-auto overflow-hidden relative",
          theme.gameSection?.colors?.container,
          "mb-0" // 移除了圆角
        )}
        style={{ minHeight: '500px' }}
      >
        {/* 游戏蒙版 */}
        <GameOverlay
          title={currentGame.title}
          description={currentGame.description}
          image={currentGame.image}
          onPlay={handlePlayGame}
          onShare={handleShareClick}
          onComment={handleCommentsClick}
          isVisible={showGameOverlay}
        />

        {/* 游戏iframe - 移除圆角 */}
        <iframe
          src={mergedContent.gameSection?.game?.url}
          className={cn(
            "w-full h-full aspect-video border-0",
            showGameOverlay ? "opacity-0" : "opacity-100"
          )}
          title={mergedContent.gameSection?.game?.title}
          allowFullScreen
        />
      </div>

      {/* 功能按钮区域 */}
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-4 bg-gray-700/70 text-white p-4 shadow-md">
        <div className="flex items-center space-x-6">
          {/* 评分组件 */}
          <RatingComponent gameId={gameId} />
          
          {/* 评论和分享按钮 */}
          <div className="flex space-x-3">
            <Button
              onClick={handleCommentsClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition-colors"
            >
              {showComments ? "Hide Comments" : "Show Comments"}
            </Button>
            <Button
              onClick={handleShareClick}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 transition-colors"
            >
              Share
            </Button>
            <Button
              onClick={handleAddCommentClick}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 transition-colors"
            >
              Add Comment
            </Button>
          </div>
        </div>

        {/* 全屏按钮 */}
        <Button
          onClick={toggleFullscreen}
          size="icon"
          variant="ghost"
          className="hover:bg-white/20 text-white p-1.5 transition-colors"
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

      {/* 评论区域 */}
      {showComments && (
        <div className="w-full max-w-4xl mx-auto mb-16">
          {showCommentForm && (
            <CommentForm 
              gameId={gameId} 
              onSuccess={() => {
                setShowCommentForm(false);
                if (typeof window !== 'undefined') {
                  const event = new Event('commentsUpdated');
                  window.dispatchEvent(event);
                }
              }}
              onCancel={() => setShowCommentForm(false)}
            />
          )}
          <CommentsSection gameId={gameId} />
        </div>
      )}

      {/* 分享模态框 */}
      {showShareModal && (
        <ShareModal 
          gameUrl={getGameUrl()}
          gameTitle={mergedContent.gameSection?.title || currentGame.title}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </section>
  );
}