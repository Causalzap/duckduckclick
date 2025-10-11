'use client';

import React from 'react';
import { candyClicker2Content } from '@/app/candy-clicker-2/content';
import Image from "next/image";
import { marked } from 'marked';

const CandyClick2Content: React.FC = () => {
  const { metadata, introduction, sections, conclusion } = candyClicker2Content;

  // Helper function to convert Markdown string to HTML
  const renderMarkdown = (markdownString: string) => {
    const htmlString = marked.parseInline(markdownString, { breaks: true, gfm: true });
    return { __html: htmlString };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 顶部糖果装饰 */}
        <div className="flex justify-center mb-8">
          <div className="candy-decoration">
            <div className="candy candy-1"></div>
            <div className="candy candy-2"></div>
            <div className="candy candy-3"></div>
          </div>
        </div>
        
        {/* 标题部分 */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full candy-pattern opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              {metadata.title}
            </h1>
            <p className="text-xl text-pink-100 text-center max-w-3xl mx-auto">
              {metadata.description}
            </p>
          </div>
        </div>

        {/* 介绍部分 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-purple-700 mb-6 flex items-center">
              <span className="mr-3">🍬</span>
              {introduction.title}
            </h2>
            
            <div className="space-y-4">
              {introduction.paragraphs.map((para, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={renderMarkdown(para)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 游戏截图 */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
          <div className="relative h-80 md:h-96">
            <Image
              src="/assets/candy-clicker-2/candy-clicker-2-gameplay.png"
              alt="Candy Clicker 2 gameplay"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg font-medium">
                Candy Clicker 2 gameplay - maximize your candy production!
              </p>
            </div>
          </div>
        </div>

        {/* 主要内容部分 */}
        <div className="space-y-12">
          {sections.map((section, sIndex) => (
            <div 
              key={sIndex} 
              className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
            >
              {/* 装饰元素 */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-pink-200 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-tr-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 pb-3 border-b-2 border-pink-200 flex items-center">
                  <span className="mr-3">{sIndex === 0 ? '⚙️' : sIndex === 1 ? '📈' : '❓'}</span>
                  {section.title}
                </h2>

                <div className="space-y-8">
                  {section.subsections.map((sub, subIndex) => (
                    <div key={subIndex} className="bg-pink-50 rounded-xl p-6 border border-pink-100">
                      <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                        <span className="mr-2">🍭</span>
                        {sub.title}
                      </h3>
                      
                      <div className="space-y-3">
                        {sub.content.map((content, cIndex) => (
                          <p 
                            key={cIndex} 
                            className="text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={renderMarkdown(content)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 结论部分 */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 shadow-xl mt-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full candy-pattern opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Final Thoughts
            </h2>
            <p 
              className="text-xl text-pink-100 text-center max-w-3xl mx-auto"
              dangerouslySetInnerHTML={renderMarkdown(conclusion)}
            />
          </div>
        </div>

        {/* 底部糖果装饰 */}
        <div className="flex justify-center mt-12">
          <div className="candy-decoration">
            <div className="candy candy-4"></div>
            <div className="candy candy-5"></div>
            <div className="candy candy-6"></div>
          </div>
        </div>
      </div>

      {/* 全局样式 */}
      <style jsx global>{`
  .candy-decoration {
    display: flex;
    gap: 1.5rem;
  }
  
  .candy {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
    animation: float 3s ease-in-out infinite;
  }
  
  .candy-1 {
    background: linear-gradient(45deg, #ff6b9d, #ff9a8b);
    animation-delay: 0s;
  }
  
  .candy-2 {
    background: linear-gradient(45deg, #a166ab, #c779d0);
    animation-delay: 0.5s;
  }
  
  .candy-3 {
    background: linear-gradient(45deg, #4facfe, #00f2fe);
    animation-delay: 1s;
  }
  
  .candy-4 {
    background: linear-gradient(45deg, #ff9a9e, #fad0c4);
    animation-delay: 0s;
  }
  
  .candy-5 {
    background: linear-gradient(45deg, #a1c4fd, #c2e9fb);
    animation-delay: 0.5s;
  }
  
  .candy-6 {
    background: linear-gradient(45deg, #ffecd2, #fcb69f);
    animation-delay: 1s;
  }
  
  .candy-pattern {
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(255, 200, 124, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 80% 30%, rgba(255, 107, 157, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 40% 70%, rgba(199, 121, 208, 0.2) 0%, transparent 20%);
    background-size: 300px 300px;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  
  strong {
    color: #ff6b9d;
    font-weight: 700;
    background-color: rgba(255, 107, 157, 0.1);
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
  }
  
  .bg-gradient-to-r.from-pink-500.to-purple-600 {
    box-shadow: 0 10px 30px rgba(199, 121, 208, 0.4);
  }
`}</style>
    </div>
  );
};

export default CandyClick2Content;