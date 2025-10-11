// components/other-games/GameCard.tsx
'use client';

import { cn } from "@/lib/utils";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  size: 'normal' | 'large';
  className?: string;
}

export function GameCard({ 
  id, 
  title, 
  description, 
  image, 
  url, 
  size, 
  className 
}: GameCardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden",
        "transition-transform hover:scale-105 cursor-pointer",
        "flex flex-col h-full w-full", // 确保填充容器
        className
      )}
      onClick={() => window.open(url, '_blank')}
    >
      {/* 图片区域 - 占据大部分空间 */}
      <div className="flex-1 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 标题区域 - 固定高度 */}
      <div className="bg-pink-500 text-white p-3 h-16 flex items-center justify-center">
        <h3 className="font-bold text-sm text-center truncate w-full">
          {title}
        </h3>
      </div>
    </div>
  );
}