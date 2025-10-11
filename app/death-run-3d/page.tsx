// app/blood-money/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

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

// Game Page Configuration
const gameConfig = {
  metadata: {
    title: "Death Run 3D Ultimate High Score Strategy & Obstacle Mastery Guide",
    description:
    "Master Death Run 3D! Learn advanced scoring strategies, multiplier combos, obstacle survival tactics, and tips to dominate the global leaderboard. Click now!",
    url: "/death-run-3d"
  },
  content: futbolLibreContent
};

export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}