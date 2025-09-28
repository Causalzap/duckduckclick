// app/blood-money/page.tsx
import { Metadata } from 'next';
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { BloodMoneyContent } from '@/components/content/BloodMoneyContent';
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";

// SEO配置
export const metadata: Metadata = {
  title: "BLOODMONEY! Ultimate Guide: Unlock All Endings, Maximize Upgrades",
  description: "Complete guide to unlock all three endings, maximize ROI with strategic upgrades, and navigate moral choices in BLOODMONEY! dark clicker game",
  keywords: "bloodmoney, clicker game, game guide, unlock endings, maximize upgrades, moral choices",
  alternates: { canonical: 'https://www.duckduckclick.com/blood-money' },
  openGraph: {
    title: "BLOODMONEY! Ultimate Guide",
    description: "Unlock All Endings, Maximize Upgrades, and Navigate Moral Choices",
    url: 'https://www.duckduckclick.com/blood-money',
    siteName: 'Duck Duck Click',
    images: [{ url: '/images/blood-money-og.jpg', width: 1200, height: 630, alt: 'BLOODMONEY! Game Guide' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BLOODMONEY! Ultimate Guide",
    description: "Unlock All Endings, Maximize Upgrades, and Navigate Moral Choices",
    images: ['/images/blood-money-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// 游戏配置（保持与 defaultContent 结构一致，允许为空值覆盖）
const gameConfig = {
  metadata: {
    title: "BLOODMONEY! Ultimate Guide",
    description: "Unlock All Endings, Maximize Upgrades, and Navigate Moral Choices",
    url: "/blood-money"
  },
  content: {
    header: {
      title: "BLOODMONEY!",
      search: {
        placeholder: "Find your next favorite game...",
        ariaLabel: "Search games",
        buttonAriaLabel: "Search",
      },
      navigation: { links: [] },
    },
    footer: {
      about: { title: "", description: "" },
      quickLinks: { title: "", links: [] },
      games: { title: "", links: [] },
      social: { title: "", links: [] },
      legal: { title: "", links: [] },
      copyright: { text: "", subText: "" },
    },
    rating: {
      title: "Rate BLOODMONEY!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "BLOODMONEY!: DARK CLICKER DESCENT!",
      game: {
        url: "https://lovemoneygame.io/lovemoney.embed",
        title: "BLOODMONEY!: DARK CLICKER DESCENT!",
        externalUrl: "/blood-money/index.html",
      },
    },
    otherGames: {
      title: "Other Games",
      cardLabels: { playButton: "Play Now" },
    },
    features: { title: "Features", items: [] },
    howToPlay: { title: "", description: "", image: "", imageAlt: "" },
    whatIs: { title: "", description: "", logo: { src: "", alt: "" } },
    faq: { title: "FAQ", items: [] },
  },
} as const;

export default function BloodMoneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <Header />
      
      {/* 游戏区域 */}
      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>
      
      {/* 其他游戏推荐 */}
      <div className="container mx-auto px-4 pb-8">
        <OtherGames games={getOtherGames()} onGameSelect={() => {}} />
      </div>

      {/* 内容组件 */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <BloodMoneyContent />
      </div>

      {/* Footer */}
      <Footer />

      {/* Schema标记 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateGameSchema({
              title: gameConfig.metadata.title,
              description: gameConfig.metadata.description,
              url: gameConfig.metadata.url,
            })
          ),
        }}
      />
    </div>
  );
}
