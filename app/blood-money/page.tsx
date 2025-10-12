// app/blood-money/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

// SEO配置
export const metadata: Metadata = {
  title: "BLOODMONEY! Ultimate Guide: Unlock All Endings, Maximize Upgrades",
  description: "Complete guide to unlock all three endings, maximize ROI with strategic upgrades, and navigate moral choices in BLOODMONEY! dark clicker game",
  alternates: { canonical: 'https://www.duckduckclick.com/blood-money' },
  openGraph: {
    title: "BLOODMONEY! Ultimate Guide",
    description: "Unlock All Endings, Maximize Upgrades, and Navigate Moral Choices",
    url: 'https://www.duckduckclick.com/blood-money',
    siteName: 'Duck Duck Click',
    images: [{ url: '/assets/blood-money/blood-money-logo.jpeg', width: 1200, height: 630, alt: 'BLOODMONEY! Game Guide' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BLOODMONEY! Ultimate Guide",
    description: "Unlock All Endings, Maximize Upgrades, and Navigate Moral Choices",
    images: ['/assets/blood-money/blood-money-logo.jpeg'],
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
    title: "BLOODMONEY! Ultimate Guide: Unlock All Endings, Maximize Upgrades",
    title1:"BLOODMONEY!",
    description: "Complete guide to unlock all three endings, maximize ROI with strategic upgrades, and navigate moral choices in BLOODMONEY! dark clicker game",
    url: "/blood-money"
  },
  content: futbolLibreContent,
  downloadUrl: {
    googlePlayUrl: "",
    appleStoreUrl: "",
  }
};

export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}