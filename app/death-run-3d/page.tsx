import { Metadata } from 'next';
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { DeathRun3DContent } from '@/components/content/DeathRun3DContent';
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";

// ==================
// SEO 配置
// ==================
export const metadata: Metadata = {
  title: "Death Run 3D Ultimate High Score Strategy & Obstacle Mastery Guide",
  description:
    "Master Death Run 3D! Learn advanced scoring strategies, multiplier combos, obstacle survival tactics, and tips to dominate the global leaderboard. Click now!",
  alternates: { canonical: 'https://www.duckduckclick.com/death-run-3d' },
  openGraph: {
    title: "Death Run 3D Ultimate Strategy Guide",
    description:
      "Master the hardest obstacles, maximize your score multipliers, and climb the Death Run 3D global leaderboard.",
    url: 'https://www.duckduckclick.com/death-run-3d',
    siteName: 'Duck Duck Click',
    images: [
      {
        url: '/assets/death-run-3d/death-run-3d-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Death Run 3D Game Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Death Run 3D Ultimate Strategy Guide",
    description:
      "Maximize your score, survive the hardest traps, and dominate Death Run 3D with expert strategies.",
    images: ['/assets/death-run-3d/death-run-3d-logo.jpeg'],
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

// ==================
// 游戏配置
// ==================
const gameConfig = {
  metadata: {
    title: "Death Run 3D Ultimate Guide",
    description:
      "Master Death Run 3D with high score strategies, obstacle survival tips, and leaderboard domination tactics.",
    url: "/death-run-3d",
  },
  content: {
    header: {
      title: "Death Run 3D",
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
      title: "Rate Death Run 3D",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Death Run 3D: Survival and High Score Challenge",
      game: {
        url: "https://storage.y8.com/y8-studio/unity_webgl/bitlaslt/death_run_wasm_v1/?key=y8&ratio_tolerant=true&value=default",
        title: "Death Run 3D: Reflex and Reaction Test",
        externalUrl: "/death-run-3d/index.html",
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

// ==================
// 页面组件
// ==================
export default function DeathRun3DPage() {
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

      {/* DeathRun3DContent */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <DeathRun3DContent /> {/* 渲染 DeathRun3DContent 组件 */}
      </div>

      {/* Footer */}
      <Footer />

      {/* Schema 标记 */}
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
