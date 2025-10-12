// components/templates/GamePageTemplate.tsx
'use client';

import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Article } from "@/components/article/Article";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import DownloadSection from "@/components/download/DownloadSection";

interface GamePageTemplateProps {
  gameConfig: {
    metadata: {
      title: string;
      title1: string;
      description: string;
      url: string;
    };
    content: any;
    downloadUrl: {
      googlePlayUrl: string;
      appleStoreUrl: string;
    };
  };
}

export function GamePageTemplate({ gameConfig }: GamePageTemplateProps) {
  // 判断是否使用新的Article结构
  const useNewArticleStructure = hasStructuredArticleContent(gameConfig.content);
  
  // 构造富媒体 Schema - 修复函数调用
  const howToSchema = generateHowToSchema(gameConfig.content, gameConfig.metadata.url);
  const faqSchema = generateFAQSchema(gameConfig.content);
  const softwareAppSchema = generateSoftwareAppSchema(
    gameConfig.metadata,
    gameConfig.downloadUrl,
    gameConfig.content?.whatIs?.logo?.src
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* 游戏展示区域 */}
        <GameSection content={gameConfig.content} />
        
        {/* 条件渲染：新结构或旧结构 */}
        {useNewArticleStructure ? (
          <Article 
            title={getArticleTitle(gameConfig)}
            description={getArticleDescription(gameConfig)}
            content={getStructuredContent(gameConfig.content)}
          />
        ) : (
          <>
            <Features content={gameConfig.content} />
            <WhatIs content={gameConfig.content} />
            <FAQ content={gameConfig.content} />
          </>
        )}
        
        {/* 下载链接 */}
        <DownloadSection
          appName={gameConfig.metadata.title1}
          googlePlayUrl={gameConfig.downloadUrl.googlePlayUrl}
          appleStoreUrl={gameConfig.downloadUrl.appleStoreUrl}
        />

        {/* 其他游戏推荐 */}
        <OtherGames
          games={getOtherGames()}
          onGameSelect={() => {}}
        />
      </main>

      <Footer />

      {/* Schema标记 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ItemList",
            "name": "Game Features",
            "itemListElement": gameConfig.content.features?.items?.map((feature: any, index: number) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": feature.title,
              "description": feature.description
            })) || []
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareAppSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ItemList",
            "name": "Other Recommended Games",
            "itemListElement": getOtherGames().map((game: any, index: number) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": game.title,
              "url": game.url,
              "image": game.image || "/default-game-image.jpg"
            }))
          }),
        }}
      />
    </div>
  );
}

// 新增缺失的函数定义
function generateHowToSchema(content: any, url: string): any {
  return {
    "@context": "http://schema.org",
    "@type": "HowTo",
    "name": content.howToPlay?.title || "Game Guide",
    "url": `https://www.duckduckclick.com${url}`,
    "inLanguage": "en",
    "image": {
      "@type": "ImageObject",
      "url": content.howToPlay?.image || "/default-game-image.jpg"
    },
    "step": [{
      "@type": "HowToStep",
      "position": "1",
      "name": content.howToPlay?.title || "Game Guide",
      "text": content.howToPlay?.description || "Learn how to play this game",
      "image": content.howToPlay?.image || "/default-game-image.jpg"
    }]
  };
}

function generateFAQSchema(content: any): any {
  return {
    "@context": "http://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faq?.items?.map((faqItem: any) => ({
      "@type": "Question",
      "name": faqItem.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqItem.answer
      }
    })) || []
  };
}

function generateSoftwareAppSchema(metadata: any, downloadUrl: any, logoUrl?: string): any {
  return {
    "@context": "http://schema.org",
    "@type": "SoftwareApplication",
    "name": metadata.title1,
    "operatingSystem": "Android, iOS", 
    "url": metadata.url,
    "downloadUrl": {
      "googlePlay": downloadUrl.googlePlayUrl,
      "appleStore": downloadUrl.appleStoreUrl
    },
    "description": metadata.description,
    "publisher": "Your Company Name", 
    "applicationCategory": "Game",
    "offers": {
      "@type": "Offer",
      "url": metadata.url,
      "priceCurrency": "USD", 
      "price": "Free" 
    }
  };
}

// 原有的辅助函数保持不变
function hasStructuredArticleContent(content: any): boolean {
  return (
    content.article?.structuredContent !== undefined &&
    content.article.structuredContent.introduction !== undefined &&
    content.article.structuredContent.endings !== undefined
  );
}

function getArticleTitle(gameConfig: GamePageTemplateProps['gameConfig']): string {
  return gameConfig.content.article?.title || gameConfig.metadata.title;
}

function getArticleDescription(gameConfig: GamePageTemplateProps['gameConfig']): string {
  return gameConfig.content.article?.description || gameConfig.metadata.description;
}

function getStructuredContent(content: any) {
  if (content.article?.structuredContent) {
    return content.article.structuredContent;
  }
  
  return transformLegacyContent(content);
}

function transformLegacyContent(content: any) {
  return {
    introduction: content.whatIs?.description || content.article?.content?.match(/<h2>Introduction:([\s\S]*?)<\/h2>/)?.[1] || "Game introduction",
    endings: extractEndingsFromContent(content),
    features: transformFeatures(content.features),
    faqs: transformFAQs(content.faq),
    conclusion: content.article?.content?.match(/<h2>Conclusion:([\s\S]*?)<\/h2>/)?.[1] || "Game conclusion"
  };
}

function extractEndingsFromContent(content: any) {
  const endings: any[] = [];
  
  if (content.article?.content) {
    const goodEndingMatch = content.article.content.match(/<h3>🥇 Good Ending[\s\S]*?<h3>/);
    const badEndingMatch = content.article.content.match(/<h3>💀 Bad Ending[\s\S]*?<h3>/);
    const normalEndingMatch = content.article.content.match(/<h3>⚖️ Normal Ending[\s\S]*?<h3>/);
    
    if (goodEndingMatch) {
      endings.push({
        title: "Good Ending (Moral Path)",
        icon: "🥇",
        requirements: ["Total income must reach $25,000", "No cruel upgrades"],
        tip: "The Good Ending is the hardest to unlock, requiring patience and ethical upgrades.",
        type: "good" as const
      });
    }
    
    if (badEndingMatch) {
      endings.push({
        title: "Bad Ending (Brutal Path)",
        icon: "💀",
        requirements: ["Purchase all cruel weapons", "Use the gun to kill Harvey"],
        tip: "The Bad Ending provides quick profits but comes at the cost of humanity.",
        type: "bad" as const
      });
    }
    
    if (normalEndingMatch) {
      endings.push({
        title: "Normal Ending (Balanced Path)",
        icon: "⚖️",
        requirements: ["Purchase scissors but not knives", "Cause non-lethal moderate harm"],
        tip: "The Normal Ending offers a middle ground between good and bad.",
        type: "normal" as const
      });
    }
  }
  
  if (endings.length === 0) {
    endings.push(
      {
        title: "Good Ending",
        icon: "🥇",
        requirements: ["Complete the game with moral choices"],
        tip: "Achieve the good ending by making ethical decisions.",
        type: "good" as const
      },
      {
        title: "Bad Ending", 
        icon: "💀",
        requirements: ["Make cruel choices throughout the game"],
        tip: "The bad ending results from selfish decisions.",
        type: "bad" as const
      }
    );
  }
  
  return endings;
}

function transformFeatures(features: any) {
  if (!features?.items) return [];
  
  return features.items.map((item: any) => ({
    title: item.title,
    cost: "Varies",
    roi: "High",
    description: item.description,
    type: item.title.toLowerCase().includes('best') ? "high" as const : "low" as const
  }));
}

function transformFAQs(faq: any) {
  if (!faq?.items) return [];
  
  return faq.items.map((item: any) => ({
    question: item.question,
    answer: item.answer
  }));
}