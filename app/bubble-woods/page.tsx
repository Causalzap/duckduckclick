// app/bubble-woods/page.tsx
import { Metadata } from 'next';
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { BubbleWoodsContent } from '@/components/content/BubbleWoodsContent';
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";

// SEO配置
export const metadata: Metadata = {
  title: "Bubble Woods Strategy Guide: Maximize Score & Boosts",
  description: "Bubble Woods Strategy Guide: Maximize your high score in the 60-second challenge. Master bouncing shots and use boosts to clear big clusters fast!",
  alternates: { canonical: 'https://www.duckduckclick.com/bubble-woods' },
  openGraph: {
    title: "Bubble Woods Ultimate Strategy Guide",
    description: "Maximize Your Score and Master the Game with Pro Tips and Boosts",
    url: 'https://www.duckduckclick.com/bubble-woods',
    siteName: 'Duck Duck Click',
    images: [{ url: '/images/bubble-woods-og.jpg', width: 1200, height: 630, alt: 'Bubble Woods Game Guide' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bubble Woods Ultimate Strategy Guide",
    description: "Maximize Your Score and Master the Game with Pro Tips and Boosts",
    images: ['/images/bubble-woods-twitter.jpg'],
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
    title: "Bubble Woods Ultimate Strategy Guide",
    description: "Maximize Your Score and Master the Game with Pro Tips and Boosts",
    url: "/bubble-woods"
  },
  content: {
    header: {
      title: "Bubble Woods",
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
      title: "Rate Bubble Woods",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Bubble Woods: 60-Second Challenge!",
      game: {
        url: "https://www.bubbleshooter.net/embed.php?id=35",
        title: "Bubble Woods: 60-Second Challenge!",
        externalUrl: "/bubble-woods/index.html",
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

export default function BubbleWoodsPage() {
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

      {/* Content from BubbleWoodsContent */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <BubbleWoodsContent /> {/* Render the BubbleWoodsContent component here */}
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
