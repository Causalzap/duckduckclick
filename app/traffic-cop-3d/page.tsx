import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { pokemonGammaEmeraldContent } from "./content";

export const metadata: Metadata = {
  title: `Traffic Cop 3D | Play Free Game`,
  description: "Become a traffic cop in Traffic Cop 3D! Enforce laws, chase criminals, and make tough decisions in this exciting 3D police game. Play for free!",
  openGraph: {
    title: `Traffic Cop 3D | Play Free Game | ${siteConfig.domain}`,
    description: "Step into the role of a traffic cop in Traffic Cop 3D! Enforce laws, chase criminals, and make decisions in this thrilling 3D police simulator. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/traffic-cop-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/traffic-cop-3d/traffic-cop-3d-logo.webp`,
        alt: `Traffic Cop 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traffic Cop 3D - Free Online Police Simulator',
    description: 'Become a traffic cop in Traffic Cop 3D! Enforce laws, chase criminals, and make decisions in this thrilling 3D police game. No downloads required.',
    images: [`/assets/traffic-cop-3d/traffic-cop-3d-logo.webp`],
  },
  alternates: {
    canonical: `/traffic-cop-3d`,
  }
};

const gameConfig = {
  metadata: {
    title: "Traffic Cop 3D",
    title1: "Traffic Cop 3D",
    description: "Experience the thrill of being a traffic cop in this free online 3D police simulator. Enforce laws, chase criminals, and make moral choices in a dynamic city environment.",
    url: "/traffic-cop-3d"
  },
  content: pokemonGammaEmeraldContent,
  downloadUrl: {
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.sunsetgames.copcarscan",
    appleStoreUrl: "https://apps.apple.com/us/app/traffic-cop-3d/id1579072255",
  }
};


export default function PokemonGammaEmeraldPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}


