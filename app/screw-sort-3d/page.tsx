import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { sprunkiIncrediboxContent } from "./content";

export const metadata: Metadata = {
  title: `Screw Sort 3D & Screw Puzzle | Free Online Puzzle Game`,
  description: "Play Screw Sort 3D & Screw Puzzle – sort screws into containers and solve challenging puzzles. No downloads required, just play instantly in your browser!",
  openGraph: {
    title: `Screw Sort 3D & Screw Puzzle | Free Online Puzzle Game | ${siteConfig.domain}`,
    description: "Play Screw Sort 3D & Screw Puzzle - a fun and challenging puzzle game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/screw-sort-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/screw-sort-3d/screw-sort-3d.webp`,
        alt: `Screw Sort 3D & Screw Puzzle Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screw Sort 3D & Screw Puzzle | Free Online Puzzle Game',
    description: 'Play Screw Sort 3D & Screw Puzzle, a fun and challenging puzzle game! Sort screws into the right containers and solve tricky puzzles. No downloads required.',
    images: [`/assets/screw-sort-3d/screw-sort-3d.webp`],
  },
  alternates: {
    canonical: `/screw-sort-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Screw Sort 3D: Screw Puzzle - Play Free Online Puzzle Game",
    title1: "Screw Sort 3D: Screw Puzzle",
    description: "Play Screw Sort 3D: Screw Puzzle, a challenging and relaxing 3D puzzle game. Unscrew and organize colorful screws to complete levels. Enjoy this free game in your browser with no downloads required.",
    url: "/screw-sort-3d"
}
,
  content: sprunkiIncrediboxContent,
  downloadUrl: {
    googlePlayUrl: "https://play.google.com/store/apps/details?id=screw.sort.match.jam.puzzle",
    appleStoreUrl: "https://apps.apple.com/jp/app/screw-sort-3d-pin-puzzle-game/id6633425539?l=en-US",
  }
};

export default function SprunkiIncrediboxPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}