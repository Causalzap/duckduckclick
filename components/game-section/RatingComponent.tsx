// components/game-section/RatingComponent.tsx
'use client';

import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface RatingComponentProps {
  gameId: string;
}

interface GameRatings {
  ratings: number[];      // 存储所有用户的评分
  average: number;        // 平均分
  votes: number;          // 总投票数
  userRating: number;     // 当前用户的评分
}

export function RatingComponent({ gameId }: RatingComponentProps) {
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [debugGameId, setDebugGameId] = useState('');

  // ✅ 关键修复：验证 gameId 并添加调试信息
  useEffect(() => {
    // 验证 gameId 是否有效
    if (!gameId || gameId === 'duck-duck-click') {
      console.warn(`⚠️ 检测到无效的 gameId: "${gameId}"，将使用备用ID`);
      
      // 生成基于URL的备用ID
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      const fallbackId = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'unknown-game';
      gameId = fallbackId;
    }
    
    setDebugGameId(gameId); // 用于调试显示
    
    console.log(`📊 加载游戏评分数据，gameId: ${gameId}`);
    
    const savedRatings = JSON.parse(localStorage.getItem('game-ratings') || '{}');
    const gameRatings: GameRatings = savedRatings[gameId] || { 
      ratings: [], 
      average: 0, 
      votes: 0, 
      userRating: 0 
    };
    
    // 确保数据一致性
    if (gameRatings.votes > 0 && (!Array.isArray(gameRatings.ratings) || gameRatings.ratings.length === 0)) {
      console.warn(`🔄 检测到损坏的评分数据，重置 gameId: ${gameId}`);
      gameRatings.ratings = [];
      gameRatings.average = 0;
      gameRatings.votes = 0;
      gameRatings.userRating = 0;
    }
    
    console.log(`📈 游戏 "${gameId}" 评分数据:`, gameRatings);
    
    setAverageRating(gameRatings.average);
    setTotalVotes(gameRatings.votes);
    setUserRating(gameRatings.userRating);
    setHasLoaded(true);
  }, [gameId]);

  const handleRate = (rating: number) => {
    // 再次验证 gameId
    const currentGameId = debugGameId || gameId;
    
    console.log(`⭐ 用户评分: gameId=${currentGameId}, rating=${rating}`);
    
    const savedRatings = JSON.parse(localStorage.getItem('game-ratings') || '{}');
    let gameRatings: GameRatings = savedRatings[currentGameId] || { 
      ratings: [], 
      average: 0, 
      votes: 0, 
      userRating: 0 
    };

    // ✅ 确保ratings数组存在且是数组
    if (!Array.isArray(gameRatings.ratings)) {
      gameRatings.ratings = [];
    }

    const previousUserRating = gameRatings.userRating;

    if (previousUserRating > 0) {
      // 用户修改评分
      const ratingIndex = gameRatings.ratings.indexOf(previousUserRating);
      if (ratingIndex > -1) {
        gameRatings.ratings[ratingIndex] = rating;
        console.log(`🔄 修改评分: ${previousUserRating} → ${rating}`);
      } else {
        gameRatings.ratings.push(rating);
        console.log(`➕ 添加新评分: ${rating}`);
      }
    } else {
      // 新用户评分
      gameRatings.ratings.push(rating);
      console.log(`🎯 新用户评分: ${rating}`);
    }

    // 重新计算平均分和投票数
    gameRatings.votes = gameRatings.ratings.length;
    gameRatings.average = gameRatings.ratings.length > 0 
      ? gameRatings.ratings.reduce((sum, r) => sum + r, 0) / gameRatings.ratings.length 
      : 0;
    
    gameRatings.userRating = rating;

    // 保存到localStorage
    savedRatings[currentGameId] = gameRatings;
    localStorage.setItem('game-ratings', JSON.stringify(savedRatings));
    
    console.log(`💾 保存评分数据:`, {
      gameId: currentGameId,
      ratings: gameRatings.ratings,
      average: gameRatings.average,
      votes: gameRatings.votes,
      userRating: gameRatings.userRating
    });

    // 更新状态
    setUserRating(rating);
    setAverageRating(gameRatings.average);
    setTotalVotes(gameRatings.votes);
  };

  // 调试函数：重置当前游戏的评分数据
  const resetRatings = () => {
    const currentGameId = debugGameId || gameId;
    
    if (confirm(`确定要重置游戏 "${currentGameId}" 的所有评分数据吗？`)) {
      const savedRatings = JSON.parse(localStorage.getItem('game-ratings') || '{}');
      delete savedRatings[currentGameId];
      localStorage.setItem('game-ratings', JSON.stringify(savedRatings));
      
      setUserRating(0);
      setAverageRating(0);
      setTotalVotes(0);
      
      console.log(`🗑️ 已重置游戏 "${currentGameId}" 的评分数据`);
    }
  };

  // 调试函数：查看所有游戏的评分数据
  const debugAllRatings = () => {
    const savedRatings = JSON.parse(localStorage.getItem('game-ratings') || '{}');
    console.log('📋 所有游戏评分数据:', savedRatings);
    
    alert(`所有游戏评分数据:\n${JSON.stringify(savedRatings, null, 2)}`);
  };

  // 调试函数：模拟多个用户评分
  const simulateMultipleRatings = () => {
    const currentGameId = debugGameId || gameId;
    const testRatings = [4, 3, 4]; // 模拟3个用户评分
    
    const savedRatings = JSON.parse(localStorage.getItem('game-ratings') || '{}');
    
    const gameRatings: GameRatings = {
      ratings: testRatings,
      average: testRatings.reduce((sum, r) => sum + r, 0) / testRatings.length,
      votes: testRatings.length,
      userRating: 4 // 当前用户评分
    };
    
    savedRatings[currentGameId] = gameRatings;
    localStorage.setItem('game-ratings', JSON.stringify(savedRatings));
    
    setUserRating(gameRatings.userRating);
    setAverageRating(gameRatings.average);
    setTotalVotes(gameRatings.votes);
    
    console.log(`🧪 模拟评分完成: ${currentGameId}`, gameRatings);
    alert(`游戏 "${currentGameId}" 模拟评分完成：${testRatings.join(', ')} → 平均分: ${gameRatings.average.toFixed(2)}`);
  };

  if (!hasLoaded) {
    return <div className="text-gray-400 text-sm">Loading ratings...</div>;
  }

  return (
    <div className="flex items-center space-x-4 bg-white/10 rounded-lg px-4 py-3">
      {/* 平均分显示区域 */}
      <div className="text-center min-w-[80px]">
        <div className="text-2xl font-bold text-yellow-400">
          {averageRating > 0 ? averageRating.toFixed(1) : '0.0'}
        </div>
        <div className="text-xs text-gray-300">
          {totalVotes} {totalVotes === 1 ? 'vote' : 'votes'}
        </div>
      </div>
      
      {/* 评分星星 */}
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            className={cn(
              "text-2xl transition-all hover:scale-110",
              star <= userRating ? "text-yellow-400" : "text-gray-400",
            )}
            aria-label={`Rate ${star} stars`}
          >
            {star <= userRating ? "★" : "☆"}
          </button>
        ))}
      </div>
      
      {/* 用户评分状态 */}
      <div className="text-sm text-gray-300 min-w-[140px]">
        {userRating > 0 ? (
          <span>
            You rated <span className="text-yellow-400 font-semibold">{userRating}</span> star{userRating !== 1 ? 's' : ''}
          </span>
        ) : (
          <span>Click stars to rate</span>
        )}
      </div>

      {/* ✅ 关键修复：显示当前gameId用于调试 */}
      {/*
      {process.env.NODE_ENV === 'development' && (
        <div className="flex items-center space-x-2">
          <div className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded">
            ID: {debugGameId}
          </div>
          
          {totalVotes > 0 && (
            <button
              onClick={resetRatings}
              className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded"
              title="Reset ratings"
            >
              Reset
            </button>
          )}
          <button
            onClick={simulateMultipleRatings}
            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded"
            title="Simulate multiple ratings"
          >
            Test
          </button>
          <button
            onClick={debugAllRatings}
            className="text-xs bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded"
            title="Debug all ratings"
          >
            Debug
          </button>
        </div>
      )}
      */}  
    </div>
  );
}