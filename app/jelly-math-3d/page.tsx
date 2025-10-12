import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

export const metadata: Metadata = {
  title: `Jelly Math 3D | Play Unblocked Game`,
  description: "Play Jelly Math 3D unblocked online for free! Solve fun math puzzles in a colorful 3D environment. No download needed – start playing instantly in browser!",
  openGraph: {
    title: `Jelly Math 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Jelly Math 3D - a free math puzzle game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/jelly-math-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/jelly-math-3d/jelly-math-3d.webp`,
        alt: `Jelly Math 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jelly Math 3D - Free Online Puzzle Game',
    description: 'Play Jelly Math 3D – solve math puzzles in a fun, colorful 3D environment. No downloads required.',
    images: [`/assets/jelly-math-3d/jelly-math-3d.webp`],
  },
  alternates: {
    canonical: `/jelly-math-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Jelly Math 3D",
    title1:"Jelly Math 3D",
    description: "Play Jelly Math 3D – a fun and educational math puzzle game that helps improve your arithmetic skills while solving colorful challenges. No downloads required.",
    url: "/jelly-math-3d"
  }
  ,
  content: futbolLibreContent,
  downloadUrl: {
    googlePlayUrl: "",
    appleStoreUrl: "https://apps.apple.com/sa/app/jelly-math/id6502281441",
  }
};

export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}





