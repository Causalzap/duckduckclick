import { siteConfig } from "./site";

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
       ]
    },
    games: {  // 添加 games section
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
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social.twitter},Games`
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
    // Added "Online Free", "Play"
    title: "How to Play Duck Duck Clicker Online Free - Game Controls & Guide",
    // Added "unblocked", "play this free game"
    description: "Playing Duck Duck Clicker online unblocked is easy: Simply click on the duck to earn Ducket$, which you can use to buy upgrades that increase your earning speed. In the beginning, each click earns 1 point, but as you progress, upgrades will boost your earnings significantly. Unlock automatic income-generating upgrades like Duck Houses and Duck Farms to increase your earnings per second.\n\n" +
      // Added "online game"
      "In the 3D version of Duck Duck Clicker, the gameplay is similar: Click to earn points, purchase upgrades, and find a balance between manual clicking and automation for faster progression. Click quickly to maximize efficiency, and use automation to earn points even while offline. Floating rubber ducks are a key resource that can provide additional rewards. Customize your ducks with fun accessories to enhance the game experience.\n\n" +
      // Added "play", "free online game"
      "The Prestige system allows you to restart the game and multiply your points for faster growth. Focus on balancing manual clicks with automated income to optimize your progress. Always capture floating yellow ducks for extra rewards and use them strategically. Duck Duck Clicker is a simple, casual game where the goal is to build a powerful duck army, unlock cool decorations, and progress by upgrading and resetting using the Prestige system.\n\n" +
      "Success in Duck Duck Clicker depends on mastering the balance between clicking, upgrading, and automation. Keep progressing and enjoy the satisfying loop of earning and upgrading in this free online game. Start with simple clicks, then unlock powerful upgrades and decorations to enhance your ducks’ appearance and performance.",
 
      // Image path unchanged
    image: "/assets/duck-duck-clicker-howto.png",
    // Added "Play Online Unblocked"
    imageAlt: "Duck Duck Clicker Game Guide - Play Online Unblocked, Controls, Physics, and Strategy Tutorial"
  },

  whatIs: {
    // Added "Play Game Online Free"
    title: "Everything about Duck Duck Clicker 3D - Play Game Online Free",
    // Added "free online game", "unblocked"
    description: "Duck Duck Clicker is an independently developed free online clicker game where players click on adorable ducks to earn Ducket$ and unlock exciting upgrades. This lighthearted, addictive game is available to play unblocked anytime.\n\n" +
      // Added "online game"
      "In Duck Duck Clicker, you control a cute duck and click to earn in-game currency, which can be used to increase your duck power and unlock automatic income-generating upgrades like Auto Ducks. The game features a variety of accessories like hats and necklaces to customize your ducks and make them the coolest in the galaxy.\n\n" +
      // Added "play this free online game", "unblocked"
      "With simple yet addictive gameplay, Duck Duck Clicker is perfect for both casual play and long-term progression. Play this free online game directly in your browser unblocked – no downloads needed, just pure duck-clicking fun that will keep you coming back for more.",

    logo: {
      // Image path unchanged
      src: "/assets/duck-duck-clicker.png",
      // Added "Free Online Unblocked Game"
      alt: "Duck Duck Clicker - Free Online Unblocked Game Logo"
    }
  },
  faq: {
    // Title already well-optimized
    title: "Frequently Asked Questions - Duck Duck Clicker Online Game",
    items: [
      {
        value: "where-to-play-original", // New item based on PAA
        question: "Where can I find and play the original Duck Duck Click online?",
        answer: "The original Duck Duck Clicker game can officially be found on itch.io. However, you can also play Duck Duck Click unblocked on various free online games websites that host web-based versions. This allows you to play the game directly in your browser on Windows, Mac, Linux, and other web-supported environments."
      },
      {
        value: "play-on-mobile", // New item based on PAA
        question: "Can I play Duck Duck Click online on my mobile device?",
        answer: "Yes, since Duck Duck Click is available in web-based environments (as a browser game), you can often play this free online game on mobile devices (phones and tablets) that support modern web browsers. Look for unblocked versions to play the game on the go."
      },
      {
        value: "creator-info", // New item based on PAA
        question: "Who is the creator of the Duck Duck Click game?",
        answer: "Currently, little is publicly known about the specific original creator or development team behind the Duck Duck Click game. Most assets appear to be original works. Many players enjoy playing this free online game for its unique physics and fun regardless!"
      },
      {
        value: "game-rating", // New item based on PAA
        question: "What is the rating for the Duck Duck Click online game?",
        answer: "There isn't a single official 'rating' (like ESRB) for Duck Duck Click, as it's often found on various platforms and unblocked games sites. However, it's widely regarded as a fun, chaotic, and engaging free online physics game. You can find player opinions and community feedback on sites where you play the game."
      },
      {
        value: "new-player-difficulty", // Adjusted existing item's value for clarity
        question: "How difficult is the Duck Duck Click online game for new players?",
        answer: "Duck Duck Click is designed with an intuitive physics-based control system that's easy to grasp but challenging to master. The game starts with basic movement mechanics, allowing new players to enjoy immediate action while gradually discovering advanced techniques when you play this free game. Our tutorial mode helps you understand momentum-based gameplay, and the forgiving respawn system encourages experimentation without frustration."
      },
      {
        value: "technical-requirements-online", // Adjusted existing item's value
        question: "What are the technical requirements to play Duck Duck Click online smoothly?",
        answer: "To best play Duck Duck Click online for free and unblocked, we recommend using a modern browser (Chrome, Firefox, or Edge) and a stable internet connection. The game's physics engine is optimized to run smoothly on most devices, but for best performance, ensure your device has at least 4GB RAM and updated graphics drivers. If you experience any slowdown, try adjusting the quality settings in the game menu when you play this online game."
      },
      {
        value: "available-game-modes", // Adjusted existing item's value
        question: "What game modes are available when you play Duck Duck Click online?",
        answer: "Duck Duck Click currently features an exciting single-player arena mode in this free online game where you compete against intelligent AI opponents. Each match offers a unique experience thanks to our dynamic physics system and varied arena layouts. Practice mode lets you perfect your skills without pressure, while Challenge mode puts your abilities to the test with increasingly difficult scenarios and objectives. Many play these game modes unblocked."
      },
      {
        value: "comfort-settings-online-game", // Adjusted existing item's value
        question: "How can I adjust Duck Duck Click for a more comfortable online gaming experience?",
        answer: "Duck Duck Click includes several comfort options to enhance your free online game experience. You can adjust camera sensitivity, enable smooth camera transitions, and customize control responsiveness. We recommend starting with default settings and gradually adjusting them to match your play style. The game also features visual indicators for better spatial awareness during intense physics-based battles when you play this game."
      },
      {
        value: "winning-tactics-game", // Adjusted existing item's value
        question: "What tactics help secure victories when I play the Duck Duck Click game?",
        answer: "Mastering the Duck Duck Click online game requires understanding of momentum and timing. Start by learning the arena layouts and identifying high-ground advantages. Use the environment to build speed, and practice the signature 'bounce boost' technique for quick escapes. Advanced players can master the 'precision impact' strategy, where carefully timed collisions can send opponents off balance. Remember, strategic positioning often matters more than aggressive charging in this free unblocked game."
      }
    ]
  },
  features: {
    // Title already has "Online Game", added "Play Free"
    title: "Revolutionary Features of Duck Duck Click - Play Free Online Game",
    items: [
      {
        title: "Advanced Physics Engine",
        // Added "play this free game"
        description: "Duck Duck Clicker 3D introduces a groundbreaking physics engine designed for authentic duck movement. The engine ensures precise collision detection, allowing players to perform tactical maneuvers such as momentum-based attacks and strategic dodges. Whether performing aerial assaults or narrowly escaping elimination, the physics engine delivers engaging combat scenarios."
      },
      {
        title: "Global Battle Environments",
        // Added "unblocked online game"
        description: "Explore three meticulously crafted battle arenas: Ireland's rolling hills perfect for momentum-based attacks, Iceland's volcanic terrain offering hazard zones, and New Zealand's mountainous landscape for vertical combat strategies. Each environment features carefully balanced power-ups and strategic choke points, altering how players approach combat and survival."
      },
      {
        title: "Pure Skill-Based Combat",
        // Added "play Duck Duck Click online free"
        description: "Duck Duck Click sets itself apart with a pure skill-based progression system, ensuring no paid advantages. Players rely on mastering physics-based combat with well-timed collisions to send opponents flying off the map. The difficulty curve ensures that both beginners and veterans can enjoy the competitive spirit."
      },
      {
        title: "Battle Royale Innovation",
        // Added "free to play online game"
        description: "Experience Duck Duck Click's unique take on the battle royale format, where physics-based combat meets strategic gameplay. Each 30-minute match features a dynamically shrinking arena that forces tactical confrontations. The streamlined gameplay loop is easy to understand but challenging to master, offering consistent excitement from start to finish."
      }
    ]
  }
} as const;





