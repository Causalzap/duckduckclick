// app/blood-money/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

// SEO配置
export const metadata: Metadata = {
  title: "Ultimate Traffic Jam 3D Guide: Best Upgrades & High Score Tips",
  description: "Master Traffic Jam 3D! Get the complete guide for perfect overtakes, the best car upgrade stats (speed, handling, brakes), and pro tips to conquer all 80 Career Mode levels. Click now!",
  alternates: { canonical: 'https://www.duckduckclick.com/traffic-jam-3d' },
  openGraph: {
    title: "Ultimate Traffic Jam 3D Guide: Best Upgrades & High Score Tips",
    description: "Master Traffic Jam 3D! Get the complete guide for perfect overtakes, the best car upgrade stats (speed, handling, brakes), and pro tips to conquer all 80 Career Mode levels. Click now!",
    url: 'https://www.duckduckclick.com/traffic-jam-3d',
    siteName: 'Duck Duck Click',
    images: [{ url: '/assets/traffic-jam-3d/traffic-jam-3d-logo.png', width: 1200, height: 630, alt: 'BLOODMONEY! Game Guide' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ultimate Traffic Jam 3D Guide: Best Upgrades & High Score Tips",
    description: "Master Traffic Jam 3D! Get the complete guide for perfect overtakes, the best car upgrade stats (speed, handling, brakes), and pro tips to conquer all 80 Career Mode levels. Click now!",
    images: ['/assets/traffic-jam-3d/traffic-jam-3d-logo.png'],
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
    title: "Ultimate Traffic Jam 3D Guide: Best Upgrades & High Score Tips",
    description: "Master Traffic Jam 3D! Get the complete guide for perfect overtakes, the best car upgrade stats (speed, handling, brakes), and pro tips to conquer all 80 Career Mode levels. Click now!",
    url: "/traffic-jam-3d"
  },
  content: futbolLibreContent
};



export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}