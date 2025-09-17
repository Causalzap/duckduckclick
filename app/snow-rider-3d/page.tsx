import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { snowRiderContent } from "./content";  // 引入Snow Rider 3D的内容

export const metadata: Metadata = {
  title: `Snow Rider 3D | Play Unblocked Free Game`,
  description: "Play Snow Rider 3D online for free! Control a wild cow in this fun, chaotic 3D action game. No download required, just play in your browser!",
  openGraph: {
    title: `Snow Rider 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Snow Rider 3D - a free physics-based battle game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/snow-rider-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/snow-rider-3d/snow-rider-3d.png`,
        alt: `Snow Rider 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snow Rider 3D - Free Online Unblocked Game',
    description: 'Play Snow Rider 3D free online game without download',
    images: [`/assets/snow-rider-3d/snow-rider-3d.png`],
  },
  alternates: {
    canonical: `/snow-rider-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Snow Rider 3D",
    description: "Play Snow Rider 3D - a free physics-based battle game right in your browser. No downloads required.",
    url: "/snow-rider-3d"
  },
  content: snowRiderContent
};

export default function SnowRider3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
