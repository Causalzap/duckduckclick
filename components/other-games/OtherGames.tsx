// components/other-games/OtherGames.tsx
'use client';

import { useState } from 'react';
import { content } from "@/config/content";
import { theme } from "@/config/theme";
import { GameCard } from "./GameCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface OtherGamesProps {
  games: Game[];
  onGameSelect: (url: string) => void;
}

export function OtherGames({ games, onGameSelect }: OtherGamesProps) {
  const [showAll, setShowAll] = useState(false);
  
  if (games.length === 0) return null;

  // 初始显示8个游戏（2行×4列）
  const initialDisplayCount = 8;
  const displayGames = showAll ? games : games.slice(0, initialDisplayCount);
  const hasMoreGames = games.length > initialDisplayCount;

  return (
    <section
      id="other-games"
      className={cn(
        theme.otherGames.layout.section,
        theme.layout.section.scrollMargin
      )}
    >
      <h2 className={cn(
        theme.otherGames.typography.title,
        theme.otherGames.spacing.title
      )}>
        {content.otherGames.title}
      </h2>
      
      {/* 修正后的布局：统一的正方形网格 */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayGames.map((game) => (
            <div key={game.id} className="aspect-square"> {/* 关键修改：正方形比例 */}
              <GameCard 
                {...game} 
                size="normal" 
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 显示更多按钮 - 修复Button标签闭合问题 */}
      {hasMoreGames && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => setShowAll(!showAll)}
            className={cn(
              "bg-yellow-500 hover:bg-yellow-600 text-white",
              "font-semibold text-lg",
              "px-8 py-3 rounded-lg",
              "shadow-md hover:shadow-lg transition-all duration-200",
              "border-0"
            )}
          >
            {showAll ? "Show Less" : "Show more »"}
          </Button> {/* 修复：正确的闭合标签 */}
        </div>
      )}
    </section>
  );
}