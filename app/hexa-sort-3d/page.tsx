import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

export const metadata: Metadata = {
  title: `Hexa Sort 3D | Play Unblocked Color-Matching Puzzle Game`,
  description: "Play Hexa Sort 3D – a fun color-matching puzzle game where you stack hexagonal blocks in 3D. Use strategy and power-ups to solve challenges.Play free online.",
  openGraph: {
    title: `Hexa Sort 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Hexa Sort 3D – a thrilling color-matching puzzle game where you stack hexagonal blocks in a 3D space. Solve challenging puzzles with strategic thinking and power-ups. Free to play with no downloads required.",
    type: 'website',
    url: `${siteConfig.url}/hexa-sort-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/hexa-sort-3d/hexa-sort-3d.webp`,
        alt: `Hexa Sort 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hexa Sort 3D - Free Online Puzzle Game',
    description: 'Play Hexa Sort 3D – solve color-matching puzzles in a vibrant 3D environment. No downloads required.',
    images: [`/assets/hexa-sort-3d/hexa-sort-3d.webp`],
  },
  alternates: {
    canonical: `/hexa-sort-3d`,
  }
};

// Game Page Configuration
const gameConfig = {
  metadata: {
    title: "Hexa Sort 3D",
    description: "Play Hexa Sort 3D – a fun color-matching puzzle game where you stack hexagonal blocks in 3D. Use strategy and power-ups to solve challenges. No downloads required.",
    url: "/hexa-sort-3d"
  },
  content: futbolLibreContent
};



export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}





