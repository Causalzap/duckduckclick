// components/content/BubbleWoodsContent.tsx
'use client';

import React from 'react';
import { bubbleWoodsContent } from '@/app/bubble-woods/content';

export const BubbleWoodsContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      {/* 页面标题 */}
      <header className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {bubbleWoodsContent.metadata.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {bubbleWoodsContent.metadata.description}
        </p>
      </header>

      {/* 引言部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{bubbleWoodsContent.introduction.title}</h3>
          </div>
          <p className="text-gray-700 mb-4">{bubbleWoodsContent.introduction.description}</p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">By mastering this guide, you will:</h4>
            <ul className="text-green-700 space-y-1">
              {bubbleWoodsContent.introduction.learningObjectives.map((objective, index) => (
                <li key={index}>• {objective}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 核心策略部分 */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800">Professional Shooting Strategies</h3>
          <p className="text-gray-600">Master these techniques to dominate the leaderboards</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {bubbleWoodsContent.strategies.map((strategy, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800">{strategy.title}</h4>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 mb-3">{strategy.description}</p>
                <h5 className="font-semibold text-gray-700 mb-2">Pro Tip:</h5>
                <ul className="text-gray-600 space-y-1">
                  {strategy.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>• {tip}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">
                  <span className="font-semibold">Effect: </span>{strategy.effect}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 增强道具部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Boost & Power-up Strategies</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 最佳增强道具 */}
            <div>
              <h4 className="text-xl font-semibold text-green-600 mb-4">Essential Boosts for High Scores</h4>
              
              <div className="space-y-4">
                {bubbleWoodsContent.boosts.highValue.map((boost, index) => (
                  <div key={index} className="pl-4 py-3 border-l-4 border-green-500 transition-all duration-200 hover:bg-gray-50">
                    <h5 className="font-semibold text-gray-800">{boost.title}</h5>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Cost: {boost.cost}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Value: {boost.value}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{boost.description}</p>
                    <p className="text-gray-500 text-sm">{boost.usage}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 特殊气泡武器库 */}
            <div>
              <h4 className="text-xl font-semibold text-orange-600 mb-4">Special Bubble Arsenal</h4>
              
              <div className="space-y-4">
                {bubbleWoodsContent.boosts.specialBubbles.map((bubble, index) => (
                  <div key={index} className="pl-4 py-3 border-l-4 border-orange-500 transition-all duration-200 hover:bg-gray-50">
                    <h5 className="font-semibold text-gray-800">{bubble.title}</h5>
                    <p className="text-gray-600 mb-2">{bubble.description}</p>
                    <div className="bg-orange-50 p-2 rounded">
                      <p className="text-orange-700 text-sm">
                        <span className="font-semibold">Best Use: </span>{bubble.bestUse}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 游戏进展部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Level Progression & Difficulty</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Advancing Through Levels</h4>
              <p className="text-gray-600 mb-4">{bubbleWoodsContent.progression.advancement}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Progression Requirements:</h5>
                <ul className="text-gray-600 space-y-1">
                  {bubbleWoodsContent.progression.requirements.map((req, index) => (
                    <li key={index}>• {req}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Escalating Challenges</h4>
              <div className="space-y-3">
                {bubbleWoodsContent.progression.challenges.map((challenge, index) => (
                  <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-100">
                    <h5 className="font-semibold text-red-700 mb-1">{challenge.title}</h5>
                    <p className="text-red-600 text-sm">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            {bubbleWoodsContent.faqs.map((faq, index) => (
              <div key={index} className="p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 cursor-pointer border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 结论部分 */}
      <section>
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Master Bubble Woods: Speed, Strategy, and Precision</h3>
          <p className="mb-4 text-lg">{bubbleWoodsContent.conclusion.summary}</p>
          <p className="font-semibold">
            {bubbleWoodsContent.conclusion.finalTip}
          </p>
        </div>
      </section>
    </div>
  );
};