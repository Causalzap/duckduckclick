import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

export const metadata: Metadata = {
  title: `Rolling Ball 3D | Play Free Online Ball Runner Game`,
  description: "Play Rolling Ball 3D online for free! Roll the ball across ramps, collect diamonds, and avoid obstacles in this exciting 3D endless runner. No download needed – play instantly in your browser!",
  openGraph: {
    title: `Rolling Ball 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Rolling Ball 3D is a free 3D ball runner game you can play in your browser. Balance, dodge obstacles, and unlock colorful balls while collecting diamonds. No downloads required!",
    type: 'website',
    url: `${siteConfig.url}/rolling-ball-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/rolling-ball-3d/rolling-ball-3d.webp`,
        alt: `Rolling Ball 3D Gameplay Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rolling Ball 3D - Free Online Ball Runner Game',
    description: 'Play Rolling Ball 3D – a free online 3D ball rolling and endless runner game. Collect diamonds, dodge obstacles, and unlock power-ups. No downloads required.',
    images: [`/assets/rolling-ball-3d/rolling-ball-3d.webp`],
  },
  alternates: {
    canonical: `/rolling-ball-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Rolling Ball 3D",
    description: "Play Rolling Ball 3D – a fun and challenging 3D endless runner ball game. Steer the ball, dodge obstacles, and collect diamonds to unlock new balls and power-ups. Free to play, no downloads required.",
    url: "/rolling-ball-3d"
  },
  content: futbolLibreContent
};

export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
