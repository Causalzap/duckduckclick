import { content as globalContent } from "@/config/content";

export const snowRiderContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Snow Rider 3D",
    game: {
      url: 'https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/',
      title: "snowrider3d",
      externalUrl: '/game/snow-rider-3d/index.html',
      iframe: {
        // 确保 iframe 的 URL 指向正确的域名并且带有正确的 referrer URL
        src: "https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/", // 修改为你的实际域名
        width: 800,
        height: 600,
        scrolling: "none",
        frameborder: 0,
        sandbox: "allow-same-origin" // 允许访问同源资源
      }
    }
  },

  // 特性部分配置
  features: {
    title: "Snow Rider 3D: Online Game Features",
    items: [
      {
        title: "Immersive 3D Winter Environments",
        description: "Explore breathtaking snow-covered mountains, forests, and thrilling downhill tracks, delivering an authentic winter adventure experience."
      },
      {
        title: "Easy & Intuitive Controls",
        description: "Effortlessly control your sled with tilt for direction, tap for jumps, and swipe for stunts. Snow Rider 3D’s controls are perfect for players of all levels."
      },
      {
        title: "Challenging Tracks & Obstacles",
        description: "Navigate through steep descents, icy surfaces, and obstacles like trees and rocks. Test your reflexes and precision in thrilling downhill races."
      },
      {
        title: "Sled Customization & Upgrades",
        description: "Unlock and upgrade various snowmobiles, sleds, and snowboards. Enhance your ride’s performance and speed to take on the toughest challenges."
      },
      {
        title: "Multiple Game Modes",
        description: "Choose from diverse modes like time trials, downhill races, and star-collecting challenges. Each mode offers unique objectives for endless fun."
      },
      {
        title: "Realistic Physics Simulation",
        description: "Experience lifelike physics in jumps, stunts, and maneuvers. Snow Rider 3D offers realistic control, making every turn and jump feel exhilarating."
      },
      {
        title: "Fast-Paced Action & High-Speed Racing",
        description: "Race against time and opponents with high-speed runs, intense jumps, and thrilling stunts in fast-paced, action-packed gameplay."
      },
      {
        title: "Instant Play & No Downloads Required",
        description: "Enjoy Snow Rider 3D directly in your browser with no downloads required. Play anytime, anywhere for quick, unblocked fun."
      },
      {
        title: "Suitable for All Ages",
        description: "With simple controls and exciting gameplay, Snow Rider 3D is perfect for gamers of all ages, offering fun for casual players and racing enthusiasts."
      }
    ]
    
  },

  whatIs: {
    title: "What Exactly is Snow Rider 3D?",
    description: "Snow Rider 3D is an exciting, fast-paced online sled racing game where you race at high speeds down endless snow-covered slopes. Navigate through trees, rocks, and huts while collecting colorful gifts to boost your score.\n\n" +
      "Unlock and upgrade various sleds by collecting gifts, adding variety and freshness to your gameplay. The game offers smooth 3D visuals, intuitive controls, and challenging yet fun gameplay suitable for all ages.\n\n" +
      "Experience the nostalgic **Snow Rider 3D Nostalgia** version with enhanced retro visuals. Play **unblocked** at school or work – no downloads required! Enjoy browser-based fun anytime, anywhere.",
    logo: {
      src: "/assets/snow-rider-3d/snow-rider-3d.jpeg",
      alt: "Snow Rider 3D Free Online Unblocked Game Logo"
    }
  },
  

  howToPlay: {
    title: "How to Play Snow Rider 3D Online Free: Master the Snowy Slopes!",
    description: "Playing Snow Rider 3D online is simple yet thrilling! Use your keyboard's left and right arrow keys to control your sled’s movement and avoid obstacles like trees, rocks, and huts. Use the up arrow key or spacebar to jump over obstacles and continue your high-speed run!\n\n" +
      "Collect colorful gifts along the path to increase your score and unlock new sleds, adding variety to your gameplay. Snow Rider 3D is an endless runner, so there is no finish line – keep sliding until you crash!\n\n" +
      "Stay focused and use your agility to dodge various obstacles while enjoying the excitement of breaking through wooden barriers. Some versions even allow you to perform jump tricks, so timing your jumps is crucial for added fun.\n\n" +
      "For the best experience, we recommend using a stable device and high-speed internet to ensure smooth gameplay in this addictive free browser game!",
    image: "/assets/snow-rider-3d/snow-rider-3d.jpg",
    imageAlt: "Snow Rider 3D Gameplay Guide - Controls for Free Online Unblocked Fun"
  },
  
  faq: {
    title: "Snow Rider 3D: Frequently Asked Questions (FAQ)",
    items: [
      {
        value: "fastest-sled",
        question: "What is the fastest sled in Snow Rider 3D?",
        answer: "The fastest sleds in Snow Rider 3D are the Arctic Thunder and Turbo Sled. These sleds offer high-speed advantages, perfect for players looking to race down the slopes at lightning speed."
      },
      {
        value: "world-record",
        question: "What is the world record in Snow Rider 3D?",
        answer: "Since Snow Rider 3D is an endless runner game, there is no fixed world record. The score depends on the distance traveled, with players aiming to reach new personal bests with each run."
      },
      {
        value: "game-end",
        question: "Does Snow Rider 3D have an endpoint?",
        answer: "No, Snow Rider 3D is an endless game where the path is procedurally generated. The track and obstacles continue infinitely until the player crashes their sled."
      },
      {
        value: "suitable-for-all-ages",
        question: "Is Snow Rider 3D suitable for all ages?",
        answer: "Yes! Snow Rider 3D is designed to be fun for all ages, regardless of gaming experience. Its simple controls and exciting gameplay make it accessible to casual players and younger audiences."
      },
      {
        value: "download-required",
        question: "Do I need to download Snow Rider 3D?",
        answer: "No download required! Snow Rider 3D is a free online game that can be played directly in your browser. Enjoy the action-packed gameplay instantly without the need for installation."
      },
      {
        value: "unlock-new-sleds",
        question: "How can I unlock new sleds in Snow Rider 3D?",
        answer: "New sleds can be unlocked by collecting gifts scattered throughout the tracks. Use the in-game currency to purchase or unlock new sleds and upgrade your performance."
      },
      {
        value: "controls",
        question: "What controls are used in Snow Rider 3D?",
        answer: "The game is controlled using the keyboard's left and right arrow keys to steer your sled. The up arrow key or spacebar is used to jump over obstacles and make exciting tricks."
      }
    ]
  }
  
};
