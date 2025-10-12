import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { basketballBrosUnblockedContent } from "./content";

export const metadata: Metadata = {
  title: `Princess Run 3D | Free Endless Running Game`,
  description: "Play Princess Run 3D – a fast-paced endless runner with a princess theme. Dodge obstacles, collect outfits, and race through levels. No downloads required!",
  openGraph: {
    title: `Princess Run 3D | Play Free Game | ${siteConfig.domain}`,
    description: "Play Princess Run 3D - a fun and fast-paced endless running game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/princess-run-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/princess-run-3d/princess-run-3d.png`,
        alt: `Princess Run 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Princess Run 3D - Free Online Endless Running Game',
    description: 'Play Princess Run 3D - a fast-paced endless running game right in your browser. No downloads required.',
    images: [`/assets/princess-run-3d/princess-run-3d.png`],
  },
  alternates: {
    canonical: `/princess-run-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Princess Run 3D | Free Endless Running Game",
    title1: "Princess Run 3D",
    description: "Play Princess Run 3D - a fun, fast-paced endless running game with a stylish princess theme. Collect outfits, dodge obstacles, and enjoy the adventure in your browser. No downloads required.",
    url: "/princess-run-3d"
  },
  content: basketballBrosUnblockedContent,
  downloadUrl: {
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.jop.princessrun3dgp",
    appleStoreUrl: "https://apps.apple.com/jp/app/princess-run-3d/id1621255733",
  }
};


export default function BasketballBrosUnblockedPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
