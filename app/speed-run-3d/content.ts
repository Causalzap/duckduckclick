import { content as globalContent } from "@/config/content";

export const cheeseChompersContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Speed Run 3d",
    game: {
      url: 'https://html5.gamedistribution.com/68c91de8354345d38c54aa8f81e13393/?gd_sdk_referrer_url=https://gamedistribution.com/games/speed-run-3d/',
      title: "Speed Run 3d",
      externalUrl: '/game/speed-run-3d/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Speed Run 3D: Neon Tunnel Racing Features - Play Free Online!",
    items: [
      {
        title: "Fast-Paced, Reflex-Driven Gameplay",
        description: "Speed Run 3D challenges your reflexes with rapid gameplay! Test your quick reactions as you navigate through neon-lit tunnels and race against time."
      },
      {
        title: "Smooth 3D Neon Tunnel Racing",
        description: "Experience a visually stunning neon tunnel racing adventure. The smooth 3D graphics offer a high-speed thrill as you race through vibrant, futuristic landscapes."
      },
      {
        title: "Simple & Intuitive Controls",
        description: "Control your race with ease using the arrow keys or drag the mouse. Speed Run 3D’s straightforward controls allow you to dive straight into the action without the hassle."
      },
      {
        title: "Increasing Speed & Difficulty",
        description: "As you progress, the speed intensifies, pushing your reflexes to the limit. The growing challenge keeps the adrenaline high, making every race a new test of skill."
      },
      {
        title: "Endless Mode – Race Until You Fail",
        description: "The game features an endless mode where the action never stops. Keep racing as long as you can until you hit an obstacle – every race is a new chance to beat your previous record."
      },
      {
        title: "Modern Visuals & Sound Effects",
        description: "Enjoy a modern visual style with neon lighting effects and dynamic sound design, adding to the immersive, fast-paced racing experience in Speed Run 3D."
      },
      {
        title: "Play Instantly, No Downloads Required",
        description: "Speed Run 3D is a browser-based game, so you can start racing immediately without needing to download anything. Play anywhere, anytime for instant fun!"
      },
      {
        title: "Perfect for Reflex & Hand-Eye Coordination",
        description: "Speed Run 3D is ideal for testing your reflexes and hand-eye coordination. Enjoy fast-paced racing action with simple yet challenging mechanics."
      }
    ]
  },
  
  
  whatIs: {
    title: "What Exactly is Speed Run 3D: The Ultimate Neon Tunnel Racing Game?",
    description: "Speed Run 3D is an exciting, fast-paced 3D parkour racing game where you race through dynamic neon-colored tunnels at lightning speed! Your mission is to dodge obstacles while navigating increasingly difficult and fast-paced tracks.\n\n" +
      "As the game progresses, the speed increases, adding a thrilling challenge that tests your reflexes and quick thinking. The core focus is on recognizing the path patterns and reacting quickly to avoid collisions. With each race, the tension and difficulty rise, creating an exhilarating experience.\n\n" +
      "Speed Run 3D is a browser-based, free-to-play game – no downloads required! Just jump into the neon tunnel and start racing for the ultimate reflex challenge. Play unblocked anytime and enjoy the fast-paced action.",
    logo: {
      src: "/assets/speed-run-3d/speed-run-3d-logo.jpg",
      alt: "Speed Run 3D - Free Online Neon Tunnel Racing Game Logo"
    }
  }
  ,
  
  howToPlay: {
    title: "How to Play Speed Run 3D Online Free: Master the Neon Tunnel Challenge!",
    description: "Speed Run 3D is all about quick reflexes and rapid decision-making in this thrilling free game! Use your keyboard's arrow keys or your mouse to control your character's movement through the neon-colored tunnels. The goal? Dodge obstacles at top speed and navigate the path with precision.\n\n" +
      "Watch ahead to predict the upcoming path and obstacles. React quickly to change direction and avoid crashing into walls and barriers. Speed increases as you progress, testing your reflexes and ability to keep up with the pace.\n\n" +
      "Unlike other games, Speed Run 3D doesn't have jumping. Instead, focus on your ability to read the path and move at the right moment to avoid collisions. Each run starts fresh, offering a challenge to your quick reaction time and ability to stay alert throughout the entire run.",
    image: "/assets/speed-run-3d/speed-run-3d.jpeg",
    imageAlt: "Speed Run 3D Gameplay Guide - Neon Tunnel Racing with Quick Reflexes"
  }
  ,
  faq: {
    title: "Speed Run 3D: Your Questions Answered (Free Online Neon Tunnel Game FAQ)",
    items: [
      {
        value: "platform",
        question: "Where can I play Speed Run 3D?",
        answer: "Speed Run 3D is available to play directly in your browser with no downloads required. It's compatible with multiple platforms and devices, offering instant access for non-stop fun."
      },
      {
        value: "game-mode",
        question: "Does Speed Run 3D have an ending or levels?",
        answer: "Speed Run 3D is an endless mode game with increasing speed and difficulty. The game continues until you crash, making it a test of your reflexes and endurance."
      },
      {
        value: "controls",
        question: "What controls are available in Speed Run 3D?",
        answer: "You can control your character using the arrow keys or by dragging the mouse to move left and right. The game is simple to play but challenging to master."
      },
      {
        value: "highscore",
        question: "Does Speed Run 3D track high scores?",
        answer: "Yes, Speed Run 3D records the highest survival time or distance, allowing you to compete against your personal best or challenge others."
      },
      {
        value: "target-audience",
        question: "Who is Speed Run 3D suitable for?",
        answer: "Speed Run 3D is perfect for players who enjoy fast-paced, reaction-based games. It's ideal for those looking for quick challenges with simple yet engaging controls."
      },
      {
        value: "sound-visuals",
        question: "Does Speed Run 3D have sound and visual effects?",
        answer: "Yes, Speed Run 3D features dynamic neon lighting and immersive sound effects that enhance the game's fast-paced atmosphere and make each moment more thrilling."
      },
      {
        value: "difficulty",
        question: "Does the difficulty increase in Speed Run 3D?",
        answer: "The speed and density of obstacles gradually increase as you progress, making the game more challenging the longer you play."
      },
      {
        value: "progress-save",
        question: "Can I save my progress or continue later in Speed Run 3D?",
        answer: "Speed Run 3D does not typically support saving progress. It’s designed for quick, short bursts of gameplay, making it perfect for fast, continuous runs."
      }
    ]
  }
  
};

