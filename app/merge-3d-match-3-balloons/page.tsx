import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

export const metadata: Metadata = {
    title: `Merge 3D - Match 3 Balloons | Play Free Game`,
    description: "Play Merge 3D - Match 3 Balloons for free! Merge balloons in this fun, challenging 3D puzzle game. No downloads needed – play instantly in your browser!",
    openGraph: {
      title: `Merge 3D - Match 3 Balloons | Play Free Game | ${siteConfig.domain}`,
      description: "Play Merge 3D - Match 3 Balloons - a fun and challenging 3D puzzle game. Merge balloons and solve puzzles right in your browser. No downloads required.",
      type: 'website',
      url: `${siteConfig.url}/merge-3d-match-3-balloons`,
      siteName: siteConfig.name,
      images: [
        {
          url: `/assets/merge-3d-match-3-balloons/merge-3d-match-3-balloons.webp`,
          alt: `Merge 3D - Match 3 Balloons Screenshot`,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Merge 3D - Match 3 Balloons - Free Online Puzzle Game',
      description: 'Play Merge 3D - Match 3 Balloons online for free! Merge balloons and solve puzzles in this fun 3D puzzle game. No downloads required.',
      images: [`/assets/merge-3d-match-3-balloons/merge-3d-match-3-balloons.webp`],
    },
    alternates: {
      canonical: `/merge-3d-match-3-balloons`,
    }
  };
  
  // 游戏页面配置
  const gameConfig = {
    metadata: {
      title: "Merge 3D - Match 3 Balloons",
      description: "Play Merge 3D - Match 3 Balloons online for free! Merge and match balloons in this 3D puzzle game. No downloads required.",
      url: "/merge-3d-match-3-balloons"
    },
    content: futbolLibreContent
  };
  
export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}






