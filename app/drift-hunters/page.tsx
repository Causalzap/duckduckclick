import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

export const metadata: Metadata = {
  title: `Drift Hunters | Play Free 3D Drifting Game`,
  description: "Play Drift Hunters online for free! Master the art of drifting in this exciting 3D racing simulation. No download needed – start playing instantly in your browser!",
  openGraph: {
    title: `Drift Hunters Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Drift Hunters – a free 3D drifting simulation game right in your browser. No downloads required. Customize your car, master tracks, and drift like a pro!",
    type: 'website',
    url: `${siteConfig.url}/drift-hunters`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/drift-hunters/drift-hunters.webp`,
        alt: `Drift Hunters Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drift Hunters - Free Online Drifting Game',
    description: 'Play Drift Hunters – a free online 3D drifting simulation game. Customize cars, master tracks, and improve your drifting skills. No downloads required.',
    images: [`/assets/drift-hunters/drift-hunters.webp`],
  },
  alternates: {
    canonical: `/drift-hunters`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Drift Hunters",
    description: "Play Drift Hunters – a fun and challenging 3D drifting simulation game. Customize your car, master different tracks, and drift your way to the top. No downloads required.",
    url: "/drift-hunters"
  },
  content: futbolLibreContent
};


export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
