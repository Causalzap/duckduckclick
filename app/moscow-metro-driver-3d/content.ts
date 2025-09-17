import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Moscow Metro Driver 3D",
    game: {
      url: 'https://html5.gamedistribution.com/92024a65afee401793188351ae69f54f/?gd_sdk_referrer_url=https://gamedistribution.com/games/moscow-metro-driver-3d/',
      title: "Moscow Metro Driver 3D",
      externalUrl: '/game/moscow-metro-driver-3d/index.html'
    }
  },

  // 特性部分配置
  features: {
    // Title reflecting the new game concept
    title: "Moscow Metro Driver 3D: Realistic Subway Train Simulator - Play Free Online!",
    items: [
      {
        // Highlights the authenticity of the game with real train models
        title: "Realistic Train Models",
        description: "Drive authentic Moscow metro train models, including the Nomernoy 81-717/714, Oka 81-760/761, and more. Experience the true feel of Moscow's subway system in stunning 3D detail."
      },
      {
        // Explains the immersive station exploration
        title: "Explore Iconic Stations",
        description: "Navigate detailed stations along the Kalininskaya Line (Line 8), such as Tretyakovskaya and Marksistskaya, for an immersive Moscow metro experience."
      },
      {
        // Focuses on the game modes and difficulty levels
        title: "Two Game Modes: Training & Driver",
        description: "Choose between Training Mode for beginners with step-by-step guidance and Driver Mode for full control, offering a challenge for both new and experienced players."
      },
      {
        // Highlights the realistic controls and mechanics
        title: "Realistic Train Operations",
        description: "Control speed, braking, doors, camera switches, headlights, and horn with multiple levels of control, simulating the real experience of being a subway driver."
      },
      {
        // Emphasizes immersive sound and visual design
        title: "High-Quality 3D Graphics & Sound",
        description: "Enjoy high-quality 3D graphics with realistic onboard announcements and immersive sound effects that replicate the real Moscow metro experience."
      },
      {
        // Encourages exploration of stations outside the train
        title: "Station Exploration",
        description: "Walk off and explore the stations at your own pace with WASD and camera mouse controls, then reboard the trains for a fully immersive experience."
      },
      {
        // Focuses on the challenge of balancing speed, timing, and passenger safety
        title: "Balancing Precision & Timing",
        description: "Perfect your driving skills by balancing speed, stopping schedules, and ensuring passenger safety as you navigate through busy metro routes."
      },
      {
        // Explains the availability across different platforms
        title: "Available on Multiple Platforms",
        description: "Play Moscow Metro Driver 3D on desktop browsers, iOS, Android, and tablet platforms for ultimate convenience."
      },
      {
        // Mentions the game being free to play
        title: "Free-to-Play with No Microtransactions",
        description: "Enjoy the full experience with no in-game purchases required. Free-to-play and accessible to all players."
      },
      {
        // Focuses on the single-player experience
        title: "Single-Player Focused Gameplay",
        description: "Immerse yourself in a single-player experience focused on precision, timing, and the true feel of being a Moscow metro driver."
      }
    ]
}
,
  
whatIs: {
  // Title clearly defines the game type
  title: "Unraveling Moscow Metro Driver 3D: The Ultimate Subway Train Simulation Game",
  
  // Description based on the subway train simulation game info
  description: "Moscow Metro Driver 3D is an immersive subway train driving simulator that lets you experience the thrill of driving authentic Moscow metro trains. Navigate iconic lines like the Kalininskaya Line and manage passenger safety while making precise stops. Designed for train enthusiasts and simulator fans, this game challenges you to master the art of subway driving.\n\n" +
    "Drive real-life Moscow metro train models, such as the Nomernoy 81-717 and Oka 81-760, while experiencing high-quality 3D graphics and realistic sound design. Explore detailed stations, control your speed, and ensure timely stops as you embark on this realistic and engaging metro driving experience.\n\n" +
    "Ready to step into the shoes of a Moscow metro driver? Play for free, no downloads required, and dive into a world of precision, timing, and public transport management in this unique simulation game!",
  
  logo: {
    // Image path unchanged
    src: "/assets/moscow-metro-driver-3d/moscow-metro-driver-3d-logo.jpg",
    // Alt text updated for the new game concept and keywords
    alt: "Moscow Metro Driver 3D - Realistic Subway Train Simulation Game Logo"
  }
}
,
  
howToPlay: {
  // Title reflecting the gameplay
  title: "How to Play Moscow Metro Driver 3D: Master Subway Train Simulation!",

  // Description focused on the simulation gameplay
  description: "Playing Moscow Metro Driver 3D is all about precision and timing in this subway train simulation game! Use the on-screen controls to accelerate (X1 to X4) and brake (T1 to T3) to manage the train's speed. Open and close the train doors at each platform, ensuring smooth operations and a realistic metro experience.\n\n" +
    "Switch camera views, use headlights, and honk the horn when necessary to navigate through stations. In Driver Mode, carefully manage your speed and stops to avoid accidents and ensure passenger safety. Learn the basics in Training Mode and then dive into the full experience by successfully transporting passengers across multiple stations.\n\n" +
    "Complete each journey with precision and make sure you stick to schedules in this immersive 3D subway train simulator. Perfect for train enthusiasts and simulation fans, Moscow Metro Driver 3D offers hours of engaging gameplay with every ride!",

  // Image path unchanged - update with the appropriate image
  image: "/assets/moscow-metro-driver-3d/moscow-metro-driver-3d.png",

  // Alt text updated
  imageAlt: "Moscow Metro Driver 3D Online Game Guide - Subway Train Simulation Controls & Strategy"
}
,
  
faq: {
  // Title updated
  title: "Moscow Metro Driver 3D: Your Questions Answered (Subway Train Simulator FAQ)",
  items: [
    {
      value: "free-to-play",
      question: "Is Moscow Metro Driver 3D free to play?",
      answer: "Yes, Moscow Metro Driver 3D is completely free to play on supported platforms, with no in-app purchases required. Enjoy the full subway train simulation experience without any costs!"
    },
    {
      value: "platforms",
      question: "What platforms support Moscow Metro Driver 3D?",
      answer: "You can play Moscow Metro Driver 3D on desktop browsers, iOS, Android, and tablets. Experience the thrilling subway driving simulation on your preferred device!"
    },
    {
      value: "realism",
      question: "Does Moscow Metro Driver 3D include real Moscow metro features?",
      answer: "Yes! The game offers an authentic Moscow metro experience with real-life trains, station layouts, and onboard announcements, providing a true-to-life subway simulation."
    },
    {
      value: "train-variety",
      question: "Are there different trains to drive in Moscow Metro Driver 3D?",
      answer: "Absolutely! Moscow Metro Driver 3D includes several authentic Moscow metro train models like Nomernoy 81-717/714, Oka 81-760/761, and more, each with unique characteristics for a dynamic driving experience."
    },
    {
      value: "training-mode",
      question: "Is there a training mode in Moscow Metro Driver 3D?",
      answer: "Yes, Moscow Metro Driver 3D features a Training Mode designed for beginners. Learn the game’s controls and basic metro operations before diving into the full experience in Driver Mode."
    },
    {
      value: "explore-stations",
      question: "Can I explore subway stations in Moscow Metro Driver 3D?",
      answer: "Yes! You can walk around the stations, explore platforms, and interact with the environment during train stops. Use WASD controls to move and the mouse to navigate the camera."
    },
    {
      value: "game-mode",
      question: "Is Moscow Metro Driver 3D multiplayer or single-player?",
      answer: "Moscow Metro Driver 3D is a single-player game, focusing on precision driving, skill mastery, and realistic simulation. Test your abilities as a metro driver in this immersive experience."
    },
    {
      value: "microtransactions",
      question: "Does Moscow Metro Driver 3D have microtransactions?",
      answer: "No, Moscow Metro Driver 3D is entirely free with no microtransactions. Enjoy the complete subway simulation experience without additional costs."
    }
  ]
}

};


