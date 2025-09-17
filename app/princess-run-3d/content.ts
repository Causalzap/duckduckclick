import { content as globalContent } from "@/config/content";

export const basketballBrosUnblockedContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Princess Run 3D",
    game: {
      url: 'https://html5.gamedistribution.com/0470cd6225c54abb9cd854dd6c71cbe9/?gd_sdk_referrer_url=https://gamedistribution.com/games/princess-run-3d/', // 嵌入链接
      title: "Princess Run 3D",
      externalUrl: '/game/princess-run-3d/index.html', // 外部链接
    }
  },

  // 特性部分配置 (占位符内容)
  features: {
    title: "Princess Run 3D: Princess-Themed Endless Runner Features - Play Free Online!",
    items: [
      {
        title: "Princess-Themed Endless Runner",
        description: "Join the fun in Princess Run 3D, an exciting endless runner game with a princess theme! Dash through dynamic environments and avoid obstacles like buses, trains, and mud to escape the chaos."
      },
      {
        title: "Collect Coins, Diamonds, and Fashionable Accessories",
        description: "As you run, collect valuable coins, diamonds, and trendy outfits. Unlock fashionable clothes and accessories to personalize your princess's look and make her the most stylish on the run."
      },
      {
        title: "Unlock New Characters and Helpers",
        description: "Unlock a variety of new princess characters and helpful companions like a maid of honor. Each character has unique abilities to assist in your adventure, keeping the game fresh and exciting."
      },
      {
        title: "Power-Ups for the Ultimate Run",
        description: "Use special props like hoverboards, magnets, jumpers, and boosters to help your princess conquer even the toughest obstacles. Upgrade your gear and make every run more exciting and rewarding."
      },
      {
        title: "Colorful and Dynamic Environments",
        description: "Princess Run 3D takes you through a variety of vibrant environments, including snowy landscapes, subways, bustling cities, and magical forests. Each environment brings its own set of challenges and beauty."
      },
      {
        title: "Realistic 3D Graphics & Smooth Controls",
        description: "Enjoy immersive 3D graphics and intuitive controls. Tap, slide, and double-tap to skateboard and perform amazing moves. The controls are designed to be easy to master, making it enjoyable for players of all ages."
      },
      {
        title: "Challenge Your Friends for High Scores",
        description: "Princess Run 3D allows you to challenge your friends for the highest scores. Compete with others to see who can run the farthest and collect the most treasures!"
      },
      {
        title: "Free to Play with Ads",
        description: "Princess Run 3D is free to play with ads. Enjoy endless fun without any downloads, directly in your browser or on your mobile device."
      }
    ]
  }
  ,
  
  whatIs: {
    title: "Unraveling Princess Run 3D: The Ultimate Dress-Up Endless Runner Game",
    description: "Princess Run 3D is an exciting, fast-paced endless runner game with a dress-up twist! Start as a shabby girl and transform into a glamorous princess by collecting stylish outfits on your run. Avoid obstacles, gather fashionable items, and boost your charisma to become the ultimate princess!\n\n" +
      "The game features fun and dynamic gameplay, where you’ll need to dodge obstacles like buses and trains while picking up trendy outfits to increase your charm. Unlock various helpers who assist you in overcoming enemies and environmental challenges.\n\n" +
      "Ready to run, jump, and style your way through an endless adventure? Play Princess Run 3D now and enjoy a fashionable and fast-paced experience with no downloads required. Compete with friends and become the most stylish princess in this thrilling free browser game!",
    logo: {
      src: "/assets/princess-run-3d/princess-run-3d-logo.jpg",
      alt: "Princess Run 3D - Free Online Unblocked Dress-Up Endless Runner Game Logo"
    }
  }
  
  ,
  
  howToPlay: {
    title: "How to Play Princess Run 3D: Master the Endless Fashion Run!",
    description: "Playing Princess Run 3D is all about stylish running and avoiding obstacles! Use your finger or keyboard (arrow keys) to swipe, dash, and jump your way through a fast-paced adventure.\n\n" +
      "Master the controls: swipe left or right to move, tap to dash, and slide to avoid low obstacles or barriers. Double tap to activate the skateboard for a speed boost! Collect coins, diamonds, and stylish clothes to increase your charisma while avoiding bad outfits, mud, rain, and enemies that slow you down.\n\n" +
      "Upgrade your character and props with the coins you collect. Complete exciting tasks and challenges to progress through levels. Use your reflexes to dodge obstacles and carefully choose the best outfits to enhance your style and charisma.\n\n" +
      "With continuous challenges and tons of unlockables, Princess Run 3D keeps you entertained as you race to become the ultimate princess. Ready to run? Let’s go!",
    image: "/assets/princess-run-3d/princess-run-3d.webp",
    imageAlt: "Princess Run 3D Online Game Guide - How to Run, Jump, and Style in This Endless Run Game"
  }
  ,
  
  faq: {
    title: "Princess Run 3D: Your Questions Answered (Free Online Dress-Up Endless Run FAQ)",
    items: [
      {
        value: "free-play",
        question: "Is Princess Run 3D free to play?",
        answer: "Yes, Princess Run 3D is completely free to play on mobile devices and web browsers. While it is free, the game contains ads to support its development."
      },
      {
        value: "multi-device",
        question: "Can I play Princess Run 3D on multiple devices?",
        answer: "Absolutely! Princess Run 3D supports gameplay on Android, iOS devices, and in-browser, making it easy to play on various platforms without downloads."
      },
      {
        value: "enemies",
        question: "Are there enemies in the game?",
        answer: "Yes, Princess Run 3D features enemies along with environmental obstacles like mud, rain, and barriers that players must avoid to keep running."
      },
      {
        value: "collecting-clothes",
        question: "What happens when I collect clothes?",
        answer: "Collecting clothes in Princess Run 3D helps increase your charisma, unlock new outfits, and even earn maid of honor helpers who assist in overcoming challenges."
      },
      {
        value: "character-upgrades",
        question: "Can the character be upgraded?",
        answer: "Yes! You can upgrade your character by collecting coins and completing challenges, unlocking new characters, outfits, and powerful items like hoverboards."
      },
      {
        value: "avoiding-obstacles",
        question: "How do I avoid obstacles?",
        answer: "Avoid obstacles in Princess Run 3D by swiping left or right to dodge, and sliding under barriers to keep running smoothly. Timing and reflexes are crucial for success."
      },
      {
        value: "multiplayer",
        question: "Is there multiplayer or score competition?",
        answer: "While Princess Run 3D doesn’t have a direct multiplayer mode, players can challenge their friends by sharing high scores and competing for the top spot."
      },
      {
        value: "game-tips",
        question: "Are there any tips for success?",
        answer: "To succeed in Princess Run 3D, focus on collecting the right outfits and power-ups while avoiding obstacles. Upgrading your character and props will also give you an edge in longer runs."
      }
    ]
  }
  
};
