import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

export const metadata: Metadata = {
  title: `Moscow Metro Driver 3D | Play Free Game`,
  description: "Play Moscow Metro Driver 3D online for free! Control the train, navigate tunnels, and manage stops. No downloads required!",
  openGraph: {
    title: `Moscow Metro Driver 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Moscow Metro Driver 3D - a free 3D metro train simulator. Navigate through tunnels, manage stations, and control the train. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/moscow-metro-driver-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/moscow-metro-driver-3d/moscow-metro-driver-3d-logo.webp`,
        alt: `Moscow Metro Driver 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moscow Metro Driver 3D - Free Online Simulator',
    description: 'Play Moscow Metro Driver 3D – navigate a metro train through tunnels and manage station stops. No downloads required.',
    images: [`/assets/moscow-metro-driver-3d/moscow-metro-driver-3d-logo.webp`],
  },
  alternates: {
    canonical: `/moscow-metro-driver-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Moscow Metro Driver 3D",
    description: "Play Moscow Metro Driver 3D – control a metro train, navigate through tunnels, and manage stations in this free 3D simulator. No downloads required.",
    url: "/moscow-metro-driver-3d"
  },
  content: futbolLibreContent
};


export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}

 


