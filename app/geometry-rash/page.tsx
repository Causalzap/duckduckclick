// app/blood-money/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

// SEO配置
export const metadata: Metadata = {
  title: "Mastering Geometry Rash: Core Mechanics, High Score Secrets, and Guide",
  description: 
  "Master Geometry Rash! Learn core game mechanics, jump/dodge tips, and high-score strategies. Discover how Stars unlock new stages and beat the speed challenge.",
  alternates: { canonical: 'https://www.duckduckclick.com/geometry-rash' },
  openGraph: {
    title: "Mastering Geometry Rash Guide",
    description: "Struggling with Geometry Rash? Get the ultimate guide to overcoming spikes, blades, and high speed. Find out how to get free access and improve your reflexes.",
    url: "https://www.duckduckclick.com/geometry-rash",
    siteName: "Duck Duck Click",
    images: [
      {
        url: "/assets/geometry-rash/geometry-rash-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Geometry Rash Game Guide"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mastering Geometry Rash: Core Mechanics, High Score Secrets, and Guide",
    description: "Struggling with Geometry Rash? Get the ultimate guide to overcoming spikes, blades, and high speed. Find out how to get free access and improve your reflexes.",
    images: ['/assets/geometry-rash/geometry-rash-logo.jpeg'],
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

const gameConfig = {
  metadata: {
    title: "Mastering Geometry Rash: Core Mechanics, High Score Secrets, and Guide",
    title1: "Geometry Rash",
    description: "Struggling with Geometry Rash? Get the ultimate guide to overcoming spikes, blades, and high speed. Find out how to get free access and improve your reflexes.",
    url: "/geometry-rash"
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