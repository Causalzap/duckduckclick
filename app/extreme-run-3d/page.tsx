import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

export const metadata: Metadata = {
  title: `Extreme Run 3D | Play Unblocked Parkour Game`,
  description: "Play Extreme Run 3D unblocked online for free! Navigate through thrilling neon-lit tracks, dodge obstacles, and master parkour skills. No download needed – start playing instantly in browser!",
  openGraph: {
    title: `Extreme Run 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Extreme Run 3D – an exciting parkour game where you control a rolling ball through dynamic neon tracks. Avoid obstacles and complete challenging levels. Free to play with no downloads required.",
    type: 'website',
    url: `${siteConfig.url}/extreme-run-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/extreme-run-3d/extreme-run-3d.webp`,
        alt: `Extreme Run 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extreme Run 3D - Free Online Parkour Game',
    description: 'Play Extreme Run 3D – navigate neon-lit tracks, dodge obstacles, and master parkour. No downloads required.',
    images: [`/assets/extreme-run-3d/extreme-run-3d.webp`],
  },
  alternates: {
    canonical: `/extreme-run-3d`,
  }
};

// Game Page Configuration
const gameConfig = {
  metadata: {
    title: "Extreme Run 3D",
    description: "Play Extreme Run 3D – an intense parkour game that challenges your reflexes as you control a rolling ball through neon tracks. No downloads required.",
    url: "/extreme-run-3d"
  },
  content: futbolLibreContent
};


export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}





