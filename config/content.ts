import { siteConfig } from "./site";
import React from 'react'; // React 导入是正确的

// 修正函数，返回纯字符串而不是 JSX
const parseBoldText = (text: string): string => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Play", href: "#game-section" },
        { text: "Hot Games", href: "#other-games" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play ${siteConfig.name} - a free physics-based battle game right in your browser. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Linktr", href: "https://linktr.ee/KnitOut" },
        { text: "Bubble Woods", href: "/bubble-woods" },
        { text: "Traffic Jam 3D", href: "/traffic-jam-3d" },
        { text: "Death Run 3D", href: "/death-run-3d" },
        { text: "Geometry Rash", href: "/geometry-rash" },
        { text: "Candy Click 2", href: "/candy-click-2" },
      ]
    },
    games: {
      title: "Games",
      links: [
        { text: "Duck Duck Clicker", href: "/" },
        { text: "Snow Rider 3d", href: "/snow-rider-3d" },
        { text: "Speed Run 3D", href: "/speed-run-3d" },
        { text: "Summer Rider 3D", href: "/summer-rider-3d" },
        { text: "Princess Run 3D", href: "/princess-run-3d" },
        { text: "Traffic Cop 3D", href: "/traffic-cop-3d" },
        { text: "Mahjong 3D Match", href: "/mahjong-3d-match" },
        { text: "Moscow Metro Driver 3D", href: "/moscow-metro-driver-3d" },
        { text: "Screw Sort 3D: Screw Puzzle", href: "/screw-sort-3d" },
        { text: "Merge 3D - Match 3 Balloons", href: "/merge-3d-match-3-balloons" },
        { text: "Jelly Math 3D", href: "/jelly-math-3d" },
        { text: "Drift Hunters", href: "/drift-hunters" },
        { text: "Rolling Ball 3D", href: "/rolling-ball-3d" },
        { text: "Stickman Hook", href: "/stickman-hook" },
        { text: "Hexa Sort 3D", href: "/hexa-sort-3d" },
        { text: "Extreme Run 3D", href: "/extreme-run-3d" },
        { text: "Capybara Clicker", href: "/capybara-clicker" },
        { text: "Planet Clicker", href: "/planet-clicker" },
        { text: "BLOODMONEY!", href: "/blood-money" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent(siteConfig.name)}&u=${encodeURIComponent(siteConfig.url)}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social?.twitter || 'Games'},Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Duck Duck Click. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate Duck Duck Clicker",
    votes: "votes",
    initialRating: 4.6,
    initialVotes: 146
  },
  gameSection: {
    title: "Duck Duck Click",
    game: {
      url: 'https://www.hoodamath.com/mobile/games/duck-duck-clicker/game.html?nocheckorient=1',
      title: "duckduckclick",
      externalUrl: '/game/duckduckclick/index.html'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  howToPlay: {
    title: "How to Play Duck Duck Clicker",
    description: "Learn the strategies and mechanics to master Duck Duck Clicker",
    image: "/assets/how-to-play.jpg",
    imageAlt: "Duck Duck Clicker Gameplay"
  },
  whatIs: {
    title: "Duck Duck Clicker — The Most Captivating Clicker Idle Game",
    description: 
    "Experience unprecedented clicker idle fun with Duck Duck Clicker! \n\nTap your finger to activate the **high-speed asset growth mode** and feel the exhilaration brought by unique resource management and idle reset mechanics. \n\nHundreds of thousands of players are already immersed. Are you ready to join the duck army and pioneer a new era of clicking? Click \"Play Game\" now to **begin your journey to wealth!**\n\n" +
    
    "**Rivaling and Even Surpassing Cookie Clicker: The Unique Advantages of Duck Duck Clicker**\n\n" +
    "Duck Duck Clicker stands out in the clicker idle genre thanks to two key mechanics: a unique pet upgrade system and a high-reward Prestige reset. Compared to Cookie Clicker, our pet system not only adds more strategic depth but also grants each pet unique skills, significantly boosting resource generation efficiency. Furthermore, the Prestige reset mechanism is ingeniously designed with substantial rewards, ensuring players can climb back quickly after resetting, experience strategic fun at different stages, and enjoy limitless long-term motivation.",
    
    logo: {
      src: "/assets/duck-duck-clicker.png",
      alt: "Duck Duck Clicker - Free Online Unblocked Game Logo"
    }
  },
  faq: {
    title: "Frequently Asked Questions - Duck Duck Clicker Online Game",
    items: [
      {
        value: "maximize-passive-income",
        question: "How to maximize passive income and score in the long-term upgrade path?",
        answer: "To maximize long-term score growth, **our data suggests** a 4:1 investment ratio favoring Auto-Duck Income over manual click power. The most crucial step is timing your Prestige Reset to activate the x2 **or** x5 **multiplier milestones** (check the Prestige panel). Always prioritize unlocking the permanent Golden Egg pet upgrade, as its passive bonus is a compounding factor for all subsequent gains."
      },
      {
        value: "mid-game-resource-allocation",
        question: "How should resources be allocated between manual clicking income and idle income during the mid-game?",
        answer: "During the mid-game, **we advise allocating 60% of resources to acquiring new /SEC asset-ducks (e.g., DUCK PLANET, DUCK GALAXY) to stabilize passive growth.** The remaining 40% should be used to **unlock the powerful permanent bonuses** tied to the **Achievement system** (visible via the list icon on the right). This ensures you gain the synergistic multipliers from special 'pet' rewards."
      },
      {
        value: "advanced-player-tips",
        question: "What are the 3 advanced tips from top players?",
        answer: [
          "1) **Mastering the 'Prestige Handoff'**: Precisely calculate the optimal time for the Prestige reset, aiming to maximize the x10 multiplier effects, not just the x2.",
          "2) **Synergistic Pet Stacks**: The most crucial pet bonuses are often earned by completing specific **Achivements** (like **'Collect 5 Golden Duckets'**). Strategically target these achievement pets early on, as their **multiplicative effect** outpaces the cost of regular upgrades.", 
          "3) **Event Exploitation**: Employ a switching strategy to exploit in-game bonus cycles (e.g., switch to manual clicking only during the 'Rubber Duck Frenzy' event)."
        ]
        },
      {
        value: "new-player-mistakes",
        question: "What are the 3 common strategic mistakes new players make and how to avoid them?",
        answer: [
          "1) **Premature Prestige**: Resetting too early due to excitement often yields insufficient rewards. Solution: Only reset when your **accumulated bonus** can guarantee unlocking the next tier of **Auto-Duck** upgrades immediately.",
          "2) **Ignoring Pet ROI**: Neglecting pet upgrades reduces overall earnings. Solution: Treat **Pet upgrades** as a core investment; their **long-term ROI** is higher than early manual click power.", 
          "3) **Total Manual Reliance**: Investing all resources into manual clicking ignores the powerful idle economy. Solution: Balance is key; ensure your **Auto-Duck income** always accounts for **75%** of your total income to guarantee continuous growth."
        ]
      },
      {
        value: "technical-issues-solutions",
        question: "Common technical issues and solutions?",
        answer: "1) Game is lagging: Please clear your browser cache and close unrelated tabs to free up memory.\n2) Save data lost: It is advised to regularly export and back up your save file, and use a reliable browser for storage.\n3) Abnormal idle earnings: Confirm the game is in an active state or the tab isn't being throttled by the browser; try refreshing the page to ensure proper synchronization."
      }
    ]
  },
  features: {
    title: "Three Core Selling Points of Duck Duck Clicker",
    items: [
      {
        title: "Unique Pet Upgrade System",
        description: "Meticulous nurturing grants each pet unique abilities, offering diverse strategic choices and an immersive experience."
      },
      {
        title: "High-Reward Prestige Reset Mechanism",
        description: "It's not just a reset; it's progression. Each Prestige reset significantly increases your resource acquisition rate, helping you master the game progression with ease."
      },
      {
        title: "Flexible Balance Between Idle and Manual Clicking Income",
        description: "A cleverly designed economy allows players to freely switch between manual clicking and automated idling, maximizing both earnings and enjoyment."
      }
    ]
  }
} as const;