'use client';

import React from 'react';
import { trafficJam3DContent } from '@/app/traffic-jam-3d/content';
import Image from 'next/image'; // 导入Next.js的Image组件


export const TrafficJam3DContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      {/* 页面标题 */}
      <header className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          {trafficJam3DContent.metadata.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {trafficJam3DContent.metadata.description}
        </p>
      </header>

      {/* 引言部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{trafficJam3DContent.introduction.title}</h3>
          </div>
          <p className="text-gray-700 mb-4">{trafficJam3DContent.introduction.description}</p>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">By reading this guide, you will:</h4>
            <ul className="text-orange-700 space-y-1">
              {trafficJam3DContent.introduction.learningObjectives.map((objective, index) => (
                <li key={index}>• {objective}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 游戏机制部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{trafficJam3DContent.gameMechanics.title}</h3>
          </div>

          <ul className="space-y-3">
            {trafficJam3DContent.gameMechanics.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* 添加游戏机制图片 */}
          {trafficJam3DContent.gameMechanics.image && (
            <div className="mb-6 rounded-lg overflow-hidden max-w-2xl mx-auto">
              <Image 
                src={trafficJam3DContent.gameMechanics.image.url}
                alt={trafficJam3DContent.gameMechanics.image.alt}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          
        </div>
      </section>

      {/* 失败条件部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{trafficJam3DContent.failureConditions.title}</h3>
          </div>
          <ul className="space-y-3">
            {trafficJam3DContent.failureConditions.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 货币和金币部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{trafficJam3DContent.moneyAndCoins.title}</h3>
          </div>
          <ul className="space-y-3">
            {trafficJam3DContent.moneyAndCoins.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 车辆升级部分 */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800">{trafficJam3DContent.vehicleUpgrades.title}</h3>
          <p className="text-gray-600">Maximize Speed and Control for Optimal Performance</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-xl">
          <ul className="space-y-4">
            {trafficJam3DContent.vehicleUpgrades.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 关卡和任务部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{trafficJam3DContent.levelsAndMissions.title}</h3>
          </div>
          <ul className="space-y-3">
            {trafficJam3DContent.levelsAndMissions.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 早期游戏难点部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{trafficJam3DContent.earlyGameBlockers.title}</h3>
          </div>
          <ul className="space-y-3">
            {trafficJam3DContent.earlyGameBlockers.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 环境挑战部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{trafficJam3DContent.environmentChallenges.title}</h3>
          </div>
          <ul className="space-y-3">
            {trafficJam3DContent.environmentChallenges.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 地图解锁条件部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{trafficJam3DContent.mapUnlockConditions.title}</h3>
          </div>
          <ul className="space-y-3">
            {trafficJam3DContent.mapUnlockConditions.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 常见问题部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {trafficJam3DContent.faq.map((faq, index) => (
              <div key={index} className="p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 cursor-pointer faq-item">
                <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 结论部分 */}
      <section>
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{trafficJam3DContent.conclusion.title}</h3>
          <p className="mb-4">{trafficJam3DContent.conclusion.content}</p>
          <p className="font-semibold">
            Maximize your score with smart upgrades, conquer all 80 levels, and become a master of the roads. Drive safely and strategically!
          </p>
        </div>
      </section>
    </div>
  );
};