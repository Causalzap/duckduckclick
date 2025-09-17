import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { brainrotClickerContent } from "./content";

export const metadata: Metadata = {
  title: `Summer Rider 3D | Play Free Game`,
  description: "Play Princess Run 3D online for free! Enjoy endless running with a stylish princess theme. No downloads required – play instantly in your browser!",
  openGraph: {
    title: `Summer Rider 3D | Play Free Game | ${siteConfig.domain}`,
    description: "Ride through snowy tracks in Summer Rider 3D! Dodge obstacles, collect power-ups, and race to the finish line. Instant play, no download required!",
    type: 'website',
    url: `${siteConfig.url}/summer-rider-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/summer-rider-3d/summer-rider-3d.jpg`,
        alt: `Summer Rider 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summer Rider 3D - Free Online Racing Game',
    description: 'Play Summer Rider 3D – a thrilling 3D racing game where you dodge obstacles and race through snowy tracks. No downloads required!',
    images: [`/assets/summer-rider-3d/summer-rider-3d.jpg`],
  },
  alternates: {
    canonical: `/summer-rider-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Summer Rider 3D",
    description: "Play Summer Rider 3D – a thrilling 3D racing game where you dodge obstacles and race through snowy tracks. No downloads required.",
    url: "/summer-rider-3d"
  },
  content: brainrotClickerContent
};

export default function BrainrotClickerPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
