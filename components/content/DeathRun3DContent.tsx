'use client';

import React from 'react';
import { deathRun3DContent } from '@/app/death-run-3d/content';

export const DeathRun3DContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      {/* 页面标题 */}
      <header className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          {deathRun3DContent.metadata.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {deathRun3DContent.metadata.description}
        </p>
      </header>

      {/* 引言部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{deathRun3DContent.introduction.title}</h3>
          <p className="text-gray-700 mb-4">{deathRun3DContent.introduction.description}</p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">By reading this guide, you will:</h4>
            <ul className="text-purple-700 space-y-1">
              {deathRun3DContent.introduction.learningObjectives.map((objective, index) => (
                <li key={index}>• {objective}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 主体章节 */}
      {deathRun3DContent.sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h3>

            {section.subsections.map((sub, subIndex) => (
              <div key={subIndex} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-700 mb-2">{sub.title}</h4>

                {/* bullets 渲染 */}
                {sub.bullets && (
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {sub.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* FAQ 渲染 */}
                {sub.faq && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">Q: {sub.faq.question}</p>
                    <p className="text-gray-700">A: {sub.faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* 结论 */}
      <section>
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{deathRun3DContent.conclusion.title}</h3>
          <p className="mb-4">{deathRun3DContent.conclusion.description}</p>
          <p className="font-semibold">Stay sharp, stay calm, and aim for the leaderboard crown!</p>
        </div>
      </section>
    </div>
  );
};

export default DeathRun3DContent;
