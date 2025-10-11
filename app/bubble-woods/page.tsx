// app/blood-money/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

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

// Game Page Configuration
const gameConfig = {
  metadata: {
    title: "Bubble Woods Strategy Guide: Maximize Score & Boosts",
    description: "Bubble Woods Strategy Guide: Maximize your high score in the 60-second challenge. Master bouncing shots and use boosts to clear big clusters fast!",
    url: "/bubble-woods"
  },
  content: futbolLibreContent
};

export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}