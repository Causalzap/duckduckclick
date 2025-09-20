import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Drift Hunters",
    game: {
      url: 'https://drift-hunters.co/drift-hunters-games.embed',
      title: "Drift Hunters",
      externalUrl: '/game/drift-hunters/index.html'
    }
  },

  // 特性部分配置
  features: {
    // Title reflecting the unique features of Drift Hunters game
    title: "Drift Hunters Features - Free Online 3D Car Drifting Game!",
    items: [
      {
        // Highlights the core gameplay of 3D drifting
        title: "Realistic 3D Drifting with Unity Engine",
        description: "Experience the thrill of realistic 3D car drifting in Drift Hunters, powered by the Unity engine. Control high-performance cars on multiple tracks for the ultimate drifting experience."
      },
      {
        // Focuses on car customization options
        title: "Over 25 Customizable Cars",
        description: "Choose from over 25 unique cars and customize them with upgrades for turbo, brakes, engine, and gearbox. Fine-tune every detail to enhance performance and style."
      },
      {
        // Highlights the variety of tracks available
        title: "Multiple Tracks with Unique Layouts",
        description: "Drift through iconic tracks like Emashi, Forest, and Tsukuba, each offering unique challenges and layouts to test your drifting skills."
      },
      {
        // Focuses on car tuning and painting options
        title: "Full Car Tuning & Painting Customization",
        description: "Personalize your car with full tuning options and custom paint jobs. Make your car truly your own with endless customization possibilities."
      },
      {
        // Emphasizes the gameplay experience and camera features
        title: "Various Camera Views for Enhanced Gameplay",
        description: "Switch between different camera views to enhance your gameplay experience. Choose the perspective that suits your drifting style and control preferences."
      },
      {
        // Highlights smooth controls optimized for multiple platforms
        title: "Smooth Controls for PC & Mobile",
        description: "Enjoy smooth, responsive controls optimized for both PC and mobile devices. Whether you're playing on desktop or mobile, Drift Hunters offers a seamless drifting experience."
      },
      {
        // Focuses on skill-based mechanics
        title: "Skill-Based Drifting Mechanics",
        description: "Master skill-based drifting mechanics that emphasize combos, precision, and style. Perfect your drifting skills and rack up points to show off your skills."
      },
      {
        // Emphasizes the game’s free-to-play model
        title: "Free-to-Play with Optional In-App Purchases",
        description: "Drift Hunters is completely free to play, with optional in-app purchases for additional upgrades and customizations. Jump in and start drifting without any cost!"
      }
    ]
  },
  
  whatIs: {
    // Title clearly defines the game type
    title: "Drift Hunters: The Ultimate Free Online Drifting Simulation Game",
    // Description based on the drifting simulation game info
    description: "Drift Hunters is an exciting free online drifting simulation game developed by Studionum43 (Ilya Kaminetsky). In this game, players take control of high-performance cars and perform drifts on realistic tracks to earn points for style and distance.\n\n" +
      "With true-to-life drifting physics, Drift Hunters offers an immersive experience, where players can enjoy extensive car customization and tuning options. Whether you're perfecting your drifting techniques or upgrading your car's performance, Drift Hunters provides endless fun for fans of racing and drifting games.\n\n" +
      "Available across multiple platforms, including browsers, iOS, and Android, Drift Hunters allows players to enjoy thrilling drifting action anywhere, anytime, for free. Customize your car, master the tracks, and challenge your drifting skills in this exhilarating game.",
    logo: {
      // Image path unchanged
      src: "/assets/drift-hunters/drift-hunters-logo.jpeg",
      // Alt text updated for the new game concept and keywords
      alt: "Drift Hunters - Free Online Drifting Simulation Game Logo"
    }
  },

  
  howToPlay: {
    // Title reflecting the drifting gameplay
    title: "How to Play Drift Hunters Online Free: Master the Art of Drifting!",
    // Description focused on drifting mechanics
    description: "Playing Drift Hunters online is all about mastering the art of drifting! Use your keyboard (arrow keys or WASD) to steer, accelerate, and brake your car. Press the spacebar to use the handbrake and initiate thrilling drifts.\n\n" +
      "To take your drifting to the next level, shift gears manually using the left Shift and left Ctrl keys. Perfect the balance between throttle and steering to maintain long drift combos and earn more points. Switch between different camera angles with the C key for the best view of your car’s performance.\n\n" +
      "Upgrade your car’s tuning to improve drifting performance and handle more challenging tracks. Practice on various tracks to refine your skills and master the art of drifting in Drift Hunters. With persistence and practice, you'll become a drift king in no time!",
    // Image path unchanged - I am keeping the placeholder you had. If you have a more relevant image for a drifting game, you'd update this path.
    image: "/assets/drift-hunters/drift-hunters.jpg",
    // Alt text updated
    imageAlt: "Drift Hunters Online Game Guide - Free Drifting Controls & Tips"
  },
  
  faq: {
    // Title updated
    title: "Drift Hunters: Your Questions Answered (Free Online Drifting Game FAQ)",
    items: [
      {
        value: "free-to-play",
        question: "Is Drift Hunters free to play?",
        answer: "Yes, Drift Hunters is free to play with optional in-app purchases for additional upgrades and customizations. Enjoy drifting without any cost!"
      },
      {
        value: "platforms",
        question: "Which platforms support Drift Hunters?",
        answer: "Drift Hunters is available on browsers (PC), iOS, and Android, allowing you to enjoy the game across multiple platforms at your convenience."
      },
      {
        value: "controls",
        question: "How do you control the car in Drift Hunters?",
        answer: "Use the arrow keys or WASD to steer, accelerate, and brake your car. Press the spacebar to use the handbrake and initiate exciting drifts for style and points."
      },
      {
        value: "customization",
        question: "Can I customize my car in Drift Hunters?",
        answer: "Yes! Drift Hunters offers extensive customization options. You can upgrade your car’s engine, brakes, turbo, paint, and rims to enhance performance and style."
      },
      {
        value: "upgrades",
        question: "Are upgrades necessary in Drift Hunters?",
        answer: "Upgrades can improve your car’s performance, but skillful drifting and mastering the tracks remain the key to success in Drift Hunters."
      },
      {
        value: "multiplayer",
        question: "Does Drift Hunters have multiplayer?",
        answer: "Drift Hunters is primarily a single-player game, but some versions may offer limited multiplayer features for a more competitive experience."
      },
      {
        value: "mobile",
        question: "Is there a mobile version of Drift Hunters?",
        answer: "Yes, Drift Hunters is available on both iOS and Android platforms, letting you enjoy the game on the go with smooth controls and performance."
      },
      {
        value: "scoring",
        question: "How do I score more points in Drift Hunters?",
        answer: "To score more points, focus on maintaining long, smooth drifts and combos. The more stylish and continuous your drifts, the higher your score!"
      }
    ]
  },

};


