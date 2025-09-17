import { content as globalContent } from "@/config/content";

export const brainrotClickerContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Summer Rider 3D",
    game: {
      url: 'https://html5.gamedistribution.com/3ff5df9f5d0248fd9dcd70e2cc253de5/?gd_sdk_referrer_url=https://gamedistribution.com/games/summer-rider-3d/', // 嵌入链接，后续可能需要调整
      title: "summer-rider-3d",
      externalUrl: '/game/summer-rider-3d/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Summer Rider 3D: Ultimate Surfing Adventure Features - Play Free Online!",
    items: [
      {
        title: "Vibrant 3D Tropical Environments",
        description: "Immerse yourself in the vivid, colorful 3D world of Summer Rider 3D, featuring rich tropical landscapes and sunny beaches, perfect for an unforgettable surfing experience."
      },
      {
        title: "Simple and Intuitive Controls",
        description: "Summer Rider 3D offers easy-to-learn controls, allowing players to quickly dive into the action, whether you’re using touch or keyboard controls."
      },
      {
        title: "Engaging and Entertaining Gameplay",
        description: "With fast-paced surfing action, unpredictable waves, and thrilling water obstacles, Summer Rider 3D keeps you entertained with exciting gameplay that’s perfect for all ages."
      },
      {
        title: "Single and Multiplayer Modes",
        description: "Compete in both single-player and multiplayer modes, allowing for solo adventures or challenging your friends to a race across the waves."
      },
      {
        title: "Unlockable Surfboards and Jet Skis",
        description: "Collect in-game currency to unlock a variety of surfboards and jet skis, each offering unique performance and styles to enhance your gameplay experience."
      },
      {
        title: "High-Speed Thrills",
        description: "Feel the rush as the game’s fast-paced gameplay keeps you on your toes, with challenging obstacles and rapidly increasing speed as you progress."
      },
      {
        title: "Variety of Water Obstacles",
        description: "Navigate through various water-based obstacles, such as rocks, pillars, and flowing water, each presenting new challenges to overcome during your ride."
      },
      {
        title: "Collect Starfish to Unlock New Skins and Items",
        description: "Earn starfish by completing levels and use them to unlock new skins and power-ups, customizing your ride and boosting your performance in the game."
      },
      {
        title: "Global Leaderboard",
        description: "Compete with players around the world and see where you stand on the global leaderboard. Challenge yourself to beat your own high score and climb the ranks."
      },
      {
        title: "Cross-Platform Support",
        description: "Play Summer Rider 3D on both mobile and desktop. The game supports touch controls on mobile devices and keyboard controls for a seamless experience on PC."
      }
    ]
  }
  ,
  
  whatIs: {
    title: "Unraveling Summer Rider 3D: The Ultimate Surfing Adventure",
    description: "Summer Rider 3D is an exciting, fast-paced 3D surfing game where players control a surfboard or jet ski, racing through tropical waters filled with obstacles. Enjoy the thrill of endless racing while avoiding rocks, pillars, and other hazards in this action-packed adventure.\n\n" +
      "Blending parkour and racing elements, Summer Rider 3D challenges your reflexes and control skills as you navigate increasingly difficult levels. The game offers both single-player challenges and a competitive two-player mode, providing endless entertainment.\n\n" +
      "Collect starfish to unlock new colorful surfing gear, enhancing your gameplay experience. With vibrant visuals and immersive sound effects, Summer Rider 3D delivers a summer surfing feast for your senses.\n\n" +
      "Ready to dive in? No downloads required – play instantly in your browser and experience the ultimate surfing adventure with friends or solo!",
    logo: {
      src: "/assets/summer-rider-3d/summer-rider-3d-logo.jpg",
      alt: "Summer Rider 3D - Free Online Unblocked Surfing Adventure Game Logo"
    }
  }
  ,
  
  howToPlay: {
    title: "How to Play Summer Rider 3D Online Free: Master the Surfing Challenge!",
    description: "Playing Summer Rider 3D is easy and exciting! Use the keyboard (WASD or arrow keys) to control your surfboard or jet ski in the thrilling tropical waters. In single-player mode, move left, right, and jump to avoid obstacles like rocks, fallen pillars, and strong currents. In two-player mode, Player 1 uses WASD and Player 2 uses the arrow keys.\n\n" +
      "Jump over small obstacles and gaps while maintaining a smooth glide across the water. Collect starfish along the way to earn points and unlock new gear, including vibrant surfboards and jet skis. The game’s speed increases over time, so stay alert and keep your reflexes sharp!\n\n" +
      "Use jumping and sharp turns to avoid traps and obstacles that come your way. On mobile devices, control your actions with on-screen buttons for a seamless surfing experience.\n\n" +
      "Each game resets, testing your ability to maintain quick reactions and steady focus as you chase a high score in this endless surfing adventure!",
    image: "/assets/summer-rider-3d/summer-rider-3d.jpeg",
    imageAlt: "Summer Rider 3D Gameplay Guide - Free Unblocked Surfing Controls & Strategy"
  },
  
  
  faq: {
    title: "Summer Rider 3D: Your Questions Answered (Free Online Surfing Game FAQ)",
    items: [
      {
        value: "free-to-play",
        question: "Is Summer Rider 3D free to play?",
        answer: "Yes, Summer Rider 3D is completely free to play! You can enjoy the game directly in your browser or on mobile devices without any downloads required."
      },
      {
        value: "multiplayer",
        question: "How many players can play Summer Rider 3D at the same time?",
        answer: "Summer Rider 3D supports both single-player and two-player split-screen modes, allowing you to enjoy the fun solo or compete with a friend."
      },
      {
        value: "unlocking-boards",
        question: "How do I unlock more surfboards in Summer Rider 3D?",
        answer: "Unlocking new surfboards is simple! Collect starfish during the game to use as currency and unlock new surfboards and equipment in the in-game store."
      },
      {
        value: "controls",
        question: "What control options are available for Summer Rider 3D?",
        answer: "On PC, you can use the keyboard (WASD or arrow keys). On mobile, touch controls make it easy to steer your surfboard and navigate the tropical waters."
      },
      {
        value: "difficulty",
        question: "Does the difficulty of Summer Rider 3D increase?",
        answer: "Yes! As you progress, the speed and obstacle density increase, making the game progressively more challenging and exciting."
      },
      {
        value: "mobile-compatibility",
        question: "Can I play Summer Rider 3D on my mobile device?",
        answer: "Absolutely! Summer Rider 3D is fully optimized for mobile devices, with touch screen controls that provide a seamless gameplay experience on smartphones and tablets."
      },
      {
        value: "leaderboard",
        question: "Does Summer Rider 3D have a leaderboard?",
        answer: "Yes! Compete with players around the world and track your performance on the global leaderboard to see how you rank in this fast-paced surfing game."
      },
      {
        value: "installation",
        question: "Do I need to install Summer Rider 3D?",
        answer: "No installation is needed! Summer Rider 3D is a browser-based game that you can play directly online, with no downloads required."
      },
      {
        value: "gameplay-duration",
        question: "Can I save my progress or resume the game later?",
        answer: "Typically, Summer Rider 3D does not support saving progress as it is designed for short bursts of fun. It's perfect for quick, continuous play sessions."
      }
    ]
  }
  
};
