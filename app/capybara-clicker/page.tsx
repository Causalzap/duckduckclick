import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";

export const metadata: Metadata = {
  title: `Capybara Clicker | Play Free Idle Clicker Game`,
  description: "Play Capybara Clicker – an addictive idle clicker game where you generate capybaras with each click. Upgrade your click power and unlock unique skins. Play free online, no downloads required.",
  openGraph: {
    title: `Capybara Clicker Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Capybara Clicker – a fun and relaxing idle clicker game where you generate capybaras, upgrade click power, and unlock custom skins. Play for free with no downloads needed.",
    type: 'website',
    url: `${siteConfig.url}/capybara-clicker`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/capybara-clicker/capybara-clicker.png`,
        alt: `Capybara Clicker Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capybara Clicker - Free Idle Clicker Game',
    description: 'Play Capybara Clicker – generate capybaras, unlock skins, and enjoy fun upgrades. Free to play, no downloads required.',
    images: [`/assets/capybara-clicker/capybara-clicker.png`],
  },
  alternates: {
    canonical: `/capybara-clicker`,
  }
};

// Game Page Configuration
const gameConfig = {
  metadata: {
    title: "Capybara Clicker",
    description: "Play Capybara Clicker – an idle clicker game where you generate capybaras, upgrade your click power, and unlock skins. Enjoy fun and relaxing gameplay. No downloads required.",
    url: "/capybara-clicker"
  },
  content: futbolLibreContent
};



export default function FutbolLibrePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}





