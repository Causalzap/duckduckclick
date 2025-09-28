// components/content/BloodMoneyContent.tsx
'use client';

import React from 'react';
import { bloodMoneyContent } from '@/app/blood-money/content';

export const BloodMoneyContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      {/* 页面标题 */}
      <header className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          {bloodMoneyContent.metadata.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {bloodMoneyContent.metadata.description}
        </p>
      </header>

      {/* 引言部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{bloodMoneyContent.introduction.title}</h3>
          </div>
          <p className="text-gray-700 mb-4">{bloodMoneyContent.introduction.description}</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">By reading this guide, you will:</h4>
            <ul className="text-blue-700 space-y-1">
              {bloodMoneyContent.introduction.learningObjectives.map((objective, index) => (
                <li key={index}>• {objective}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 结局指南部分 */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800">Ultimate Endings Guide</h3>
          <p className="text-gray-600">How to Unlock All Endings in BLOODMONEY!</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {bloodMoneyContent.endings.map((ending, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg p-6 border-t-4 transition-all duration-300 hover:shadow-xl ${
              ending.type === 'good' ? 'border-green-500' :
              ending.type === 'bad' ? 'border-red-500' : 'border-purple-500'
            }`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-3 ${
                  ending.type === 'good' ? 'bg-green-100 text-green-600' :
                  ending.type === 'bad' ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'
                }`}>
                  {ending.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800">{ending.title}</h4>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Exact Unlock Requirements:</h5>
                <ul className="text-gray-600 space-y-1">
                  {ending.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>• {req}</li>
                  ))}
                </ul>
              </div>
              <div className={`p-3 rounded-lg ${
                ending.type === 'good' ? 'bg-green-50' :
                ending.type === 'bad' ? 'bg-red-50' : 'bg-purple-50'
              }`}>
                <p className={`text-sm ${
                  ending.type === 'good' ? 'text-green-700' :
                  ending.type === 'bad' ? 'text-red-700' : 'text-purple-700'
                }`}>
                  <span className="font-semibold">Moral Tip:</span> {ending.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 升级路径部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Best Upgrade Path</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* 高ROI升级 */}
            <div>
              <h4 className="text-xl font-semibold text-green-600 mb-4">Best Brutal Upgrades for High ROI</h4>
              
              <div className="space-y-4">
                {bloodMoneyContent.features.highROI.map((feature, index) => (
                  <div key={index} className="pl-4 py-2 border-l-4 border-green-500 transition-all duration-200 hover:bg-gray-50 upgrade-item">
                    <h5 className="font-semibold text-gray-800">{feature.title}</h5>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{feature.cost}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{feature.roi}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                    {feature.strategy && (
                      <p className="text-gray-500 text-xs mt-1">{feature.strategy}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* 低ROI升级 */}
            <div>
              <h4 className="text-xl font-semibold text-red-600 mb-4">Worst Upgrades (Low ROI)</h4>
              
              <div className="space-y-4">
                {bloodMoneyContent.features.lowROI.map((feature, index) => (
                  <div key={index} className="pl-4 py-2 border-l-4 border-red-500 transition-all duration-200 hover:bg-gray-50 upgrade-item">
                    <h5 className="font-semibold text-gray-800">{feature.title}</h5>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{feature.cost}</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">{feature.roi}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                    {feature.issue && (
                      <p className="text-red-500 text-xs mt-1">{feature.issue}</p>
                    )}
                    {feature.strategy && (
                      <p className="text-gray-500 text-xs mt-1">{feature.strategy}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 金钱上限机制 */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4
             className="font-semibold text-gray-800 mb-2">{bloodMoneyContent.features.moneyCap.title}</h4>
            <p className="text-gray-600 mb-2">{bloodMoneyContent.features.moneyCap.description}</p>
            <p className="text-gray-500 text-sm">
              <span className="font-medium">Tip:</span> {bloodMoneyContent.features.moneyCap.tip}
            </p>
          </div>
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
            {bloodMoneyContent.faqs.map((faq, index) => (
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
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Conclusion: BLOODMONEY! - The Dark Clicker with Moral Choices</h3>
          <p className="mb-4">{bloodMoneyContent.conclusion}</p>
          <p className="font-semibold">
            Maximize your ROI with smart upgrades, but remember that your decisions will shape the story. 
            Will you choose the path of greed or the path of virtue?
          </p>
        </div>
      </section>
    </div>
  );
};