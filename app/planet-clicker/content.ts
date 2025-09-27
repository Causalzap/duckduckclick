import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Planet Clicker",
    game: {
      url: 'https://planetclicker.io/planet-clicker.embed',
      title: "Planet Clicker",
      externalUrl: '/game/planet-clicker/index.html'
    }
  },

  // 特性部分配置
  features: {
    // Title reflecting the new game concept
    title: "Planet Clicker Features - Play Free Online!",
    items: [
      {
        // Highlights the core gameplay of clicking planets to generate energy
        title: "Click Planets to Generate Energy",
        description: "In Planet Clicker, click on any planet to generate energy! Each click boosts your resources, helping you progress in this simple yet engaging idle clicker game."
      },
      {
        // Focuses on unlocking new planets with unique upgrades
        title: "Unlock Multiple Planets with Unique Upgrades",
        description: "Explore new planets as you progress! Each planet comes with its own set of upgrades, enhancing your energy production and unlocking more powerful features as you advance."
      },
      {
        // Highlights the automation mechanics for increased efficiency
        title: "Automated Devices for Passive Progress",
        description: "Use powerful automation devices like farms and power plants to boost your energy production without lifting a finger! These tools ensure a steady and effortless energy generation."
      },
      {
        // Focuses on powerful upgrades like 'Future Tech'
        title: "Unlock Powerful Upgrades like Future Tech",
        description: "Enhance your gameplay with advanced upgrades such as Future Tech, providing powerful boosts to your energy output and opening new strategic options."
      },
      {
        // Describes the event system for dynamic gameplay
        title: "Dynamic Event System with Lucky and Unlucky Events",
        description: "Stay on your toes with the event system that triggers periodic lucky and unlucky events, affecting your resources. Prepare for surprises that will test your strategy!"
      },
      {
        // Highlights cross-platform accessibility
        title: "Cross-Platform Support for Desktop and Mobile",
        description: "Enjoy Planet Clicker on both desktop and mobile devices. Whether you're at home or on the go, you can keep generating energy and progressing in the game seamlessly across multiple devices."
      },
      {
        // Emphasizes the game's simplicity and casual gameplay appeal
        title: "Simple Gameplay for Casual Players",
        description: "Planet Clicker is perfect for casual players and clicker game fans. Its easy-to-understand mechanics make it the ideal game to unwind and enjoy at your own pace."
      },
      {
        // Mentions the free-to-play model with in-app purchases
        title: "Free to Play with Optional In-App Purchases",
        description: "Planet Clicker is free to play with optional in-app purchases. Enhance your gaming experience by purchasing upgrades or boosters to speed up your progress!"
      }
    ]
},
  
whatIs: {
  // Title clearly defines the game type
  title: "Discover Planet Clicker: The Ultimate Idle Clicker and Strategy Game",
  
  // Description based on the "idle clicker" and "strategy" elements
  description: "Planet Clicker is an engaging incremental idle clicker game where you generate energy by clicking on planets. Use the energy to buy upgrades, automate energy production, and unlock new planets like Earth, Mars, and Venus.\n\n" +
    "Switch between different planets to gradually unlock more efficient energy collection methods. The game combines endless clicking mechanics with strategic elements, requiring players to balance clicking speed with upgrade investments for optimal progress.\n\n" +
    "While the gameplay is simple, it provides a goal-oriented challenge as you advance. Perfect for casual gamers and clicker game fans who enjoy a rewarding yet relaxed experience.\n\n" +
    "Ready to play? Start generating energy, unlock new planets, and master the balance between clicking and upgrades in this fun, free-to-play idle game!",
  
  logo: {
    // Image path (can be updated with the actual game logo)
    src: "/assets/planet-clicker/planet-clicker-logo.jpeg",
    // Alt text updated for the new game concept and keywords
    alt: "Planet Clicker - Free Idle Clicker and Strategy Game Logo"
  }
},
  
howToPlay: {
  // Title reflecting the idle clicker and strategy gameplay
  title: "How to Play Planet Clicker: Master Energy Generation and Upgrades!",
  
  // Description focusing on the core gameplay mechanics
  description: "Playing Planet Clicker is all about generating energy by clicking on planets! Start by clicking Earth to accumulate energy and use it to unlock powerful upgrades in the shop. The more energy you generate, the faster you can progress!\n\n" +
    "As you gather energy, invest in upgrades that boost your click rewards and automate energy production. Switch between planets like Mars and Venus to unlock even more efficient energy gathering methods and advanced upgrades.\n\n" +
    "Focus on upgrading your click multiplier early to accumulate resources quickly, and don't forget to unlock automation buildings to reduce the need for manual clicks.\n\n" +
    "Pay attention to events that can impact your resources, and adjust your strategy accordingly to maximize your energy production. Keep the game tab open to accumulate energy even when you're offline!\n\n" +
    "Planet Clicker is easy to play with both mouse clicks and touchscreen controls, making it accessible for all players. Whether you're using a desktop or mobile device, enjoy this simple yet engaging idle clicker game at your own pace!",
  
  // Image path unchanged
  image: "/assets/planet-clicker/planet-clicker.png",
  
  // Alt text updated
  imageAlt: "Planet Clicker - How to Play and Controls Guide"
},
  
faq: {
  // Title updated
  title: "Planet Clicker: Your Questions Answered (Free Idle Clicker Game FAQ)",
  items: [
    {
      value: "free-to-play",
      question: "Is Planet Clicker free to play?",
      answer: "Yes, Planet Clicker is completely free to play! The game is supported by ads and in-app purchases that help maintain and improve the gameplay experience."
    },
    {
      value: "platforms",
      question: "Which platforms support Planet Clicker?",
      answer: "Planet Clicker is available to play on both web browsers and mobile devices (including phones and tablets). Enjoy the game anywhere, anytime!"
    },
    {
      value: "planets",
      question: "How many planets are there in Planet Clicker?",
      answer: "Planet Clicker features Earth, Mars, and Venus as the main unlockable planets. Additional planets may be added in future game updates for further exploration."
    },
    {
      value: "internet-connection",
      question: "Do I need an internet connection to play Planet Clicker?",
      answer: "While it's recommended to be online for the best experience, Planet Clicker supports offline progress. You can still accumulate energy offline as long as the game tab remains open."
    },
    {
      value: "energy-efficiency",
      question: "How can I improve my energy generation efficiency?",
      answer: "To improve energy efficiency, focus on upgrading your click multiplier, purchase automation devices, and unlock advanced technologies to speed up energy production."
    },
    {
      value: "progress-saving",
      question: "How does Planet Clicker save my progress?",
      answer: "In some versions, Planet Clicker does not save your progress, so it's important to keep the game tab open. If the tab is closed, you may lose your progress and have to start over."
    },
    {
      value: "target-audience",
      question: "Who is Planet Clicker suitable for?",
      answer: "Planet Clicker is ideal for fans of incremental and clicker games, casual players, and those who enjoy strategy planning. Its easy-to-learn mechanics make it accessible to players of all skill levels."
    },
    {
      value: "developer",
      question: "Who developed Planet Clicker?",
      answer: "Planet Clicker was developed by Coltroc, a company known for creating engaging and fun idle clicker games."
    }
  ]
}


};


