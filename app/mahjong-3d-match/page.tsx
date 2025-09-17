import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { crazyChickenContent } from "./content";

export const metadata: Metadata = {
  title: `Mahjong 3D Match | Play Free Game`,
  description: "Play Mahjong 3D Match online for free! Match tiles in a 3D environment and solve puzzles. No download needed – start playing instantly in your browser!",
  openGraph: {
    title: `Mahjong 3D Match Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Mahjong 3D Match – a free, fun, and relaxing puzzle game in 3D. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/mahjong-3d-match`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/mahjong-3d-match/mahjong-3d-match-logo.webp`,
        alt: `Mahjong 3D Match Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahjong 3D Match - Free Online Puzzle Game',
    description: 'Play Mahjong 3D Match – a relaxing puzzle game in 3D. Match tiles and solve puzzles without downloading.',
    images: [`/assets/mahjong-3d-match/mahjong-3d-match-logo.webp`],
  },
  alternates: {
    canonical: `/mahjong-3d-match`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Mahjong 3D Match",
    description: "Play Mahjong 3D Match – a relaxing 3D puzzle game. Match tiles and solve puzzles. No downloads required.",
    url: "/mahjong-3d-match"
  },
  content: crazyChickenContent
};


export default function CrazyChicken3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}





