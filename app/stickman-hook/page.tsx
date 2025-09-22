import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { cheeseChompersContent } from "./content";

// Metadata for Stickman Hook game page
export const metadata: Metadata = {
  title: `Stickman Hook | Free Online Game`,
  description: "Play Stickman Hook – a fun and addictive game where you control a stickman swinging through obstacle-filled levels. No downloads required!",
  openGraph: {
    title: `Stickman Hook | Play Free Online Game | ${siteConfig.domain}`,
    description: "Play Stickman Hook - a fun and engaging swinging game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/stickman-hook`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/stickman-hook/stickman-hook.jpg`,
        alt: `Stickman Hook Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stickman Hook - Free Online Game',
    description: 'Play Stickman Hook - a fun and addictive swinging game right in your browser. No downloads required.',
    images: [`/assets/stickman-hook/stickman-hook.jpg`],
  },
  alternates: {
    canonical: `/stickman-hook`,
  }
};

// Game page configuration for Stickman Hook
const gameConfig = {
  metadata: {
    title: "Stickman Hook",
    description: "Play Stickman Hook - a fun and addictive swinging game right in your browser. No downloads required.",
    url: "/stickman-hook"
  },
  content: cheeseChompersContent 
};


export default function CheeseChompers3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}





