import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { cheeseChompersContent } from "./content";

export const metadata: Metadata = {
  title: `Speed Run 3D | Free Online Game`,
  description: "Play Speed Run 3D – a fast-paced parkour game where you dash, jump, and sprint through challenging 3D obstacle courses. No downloads required!",
  openGraph: {
    title: `Speed Run 3D | Play Free Online Game | ${siteConfig.domain}`,
    description: "Play Speed Run 3D - a free, fast-paced parkour action game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/speed-run-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/speed-run-3d/speed-run-3d.jepg`,
        alt: `Speed Run 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed Run 3D - Free Online Game',
    description: 'Play Speed Run 3D - a fast-paced parkour game right in your browser. No downloads required.',
    images: [`/assets/speed-run-3d/speed-run-3d.jepg`],
  },
  alternates: {
    canonical: `/speed-run-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Speed Run 3D",
    title1: "Speed Run 3D",
    description: "Play Speed Run 3D - a free, fast-paced parkour action game right in your browser. No downloads required.",
    url: "/speed-run-3d"
  },
  content: cheeseChompersContent,
  downloadUrl: {
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamehox.speedrun",
    appleStoreUrl: "",
  }
};

export default function CheeseChompers3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}





