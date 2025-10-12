import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

export const metadata: Metadata = {
  title: `Planet Clicker | Play Free Idle Clicker Game`,
  description: "Play Planet Clicker – a fun and engaging idle clicker game where you generate energy by clicking on planets. Unlock new planets and upgrades to automate energy production. Play free online with no downloads required.",
  openGraph: {
    title: `Planet Clicker Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Planet Clicker – an exciting idle clicker game where you click on planets to generate energy, unlock powerful upgrades, and automate energy production. Free to play with no downloads required.",
    type: 'website',
    url: `${siteConfig.url}/planet-clicker`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/planet-clicker/planet-clicker.webp`,
        alt: `Planet Clicker Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planet Clicker - Free Idle Clicker Game',
    description: 'Play Planet Clicker – generate energy by clicking on planets, unlock upgrades, and automate production. Free to play with no downloads required.',
    images: [`/assets/planet-clicker/planet-clicker.webp`],
  },
  alternates: {
    canonical: `/planet-clicker`,
  }
};

// Game Page Configuration
const gameConfig = {
  metadata: {
    title: "Planet Clicker",
    title1: "Planet Clicker",
    description: "Play Planet Clicker – an idle clicker game where you generate energy, unlock planets, and use upgrades to automate your energy production. Enjoy fun and relaxing gameplay with no downloads required.",
    url: "/planet-clicker"
  },
  content: futbolLibreContent,
  downloadUrl: {
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.petrica.PlanetClicker",
    appleStoreUrl: "https://apps.apple.com/jp/app/planet-clicker/id1635239939",
  }
};

export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}





