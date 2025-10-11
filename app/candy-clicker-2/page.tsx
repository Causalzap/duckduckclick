// app/blood-money/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

// SEO配置
export const metadata: Metadata = {
  title: "Ultimate Candy Clicker 2 Strategy Guide: Maximize Clicking Power, Unlock Permanent Buffs, & Boost Your Candy Production",
  description: 
  "A complete Candy Clicker 2 guide to maximize your candy production, unlock permanent buffs, and achieve the highest CPS.",
  alternates: { canonical: 'https://www.duckduckclick.com/candy-clicker-2' },
  openGraph: {
    title: "Ultimate Candy Clicker 2 Strategy Guide: Maximize Clicking Power, Unlock Permanent Buffs, & Boost Your Candy Production",
    description: 
    "A complete Candy Clicker 2 guide to maximize your candy production, unlock permanent buffs, and achieve the highest CPS.",
    url: "https://www.duckduckclick.com/candy-clicker-2",
    siteName: "Duck Duck Click",
    images: [
      {
        url: "/assets/candy-clicker-2/candy-clicker-2-logo.jpeg",
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
    images: ['/assets/candy-clicker-2/candy-clicker-2-logo.jpeg'],
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
    title: "Ultimate Candy Clicker 2 Strategy Guide: Maximize Clicking Power, Unlock Permanent Buffs, & Boost Your Candy Production",
    description: 
    "A complete Candy Clicker 2 guide to maximize your candy production, unlock permanent buffs, and achieve the highest CPS.",
    url: "/candy-clicker-2"
  },
  content: futbolLibreContent
};

export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}