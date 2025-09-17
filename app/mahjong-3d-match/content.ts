import { content as globalContent } from "@/config/content";

export const crazyChickenContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Mahjong 3D Match",
    game: {
      url: 'https://html5.gamedistribution.com/8c388ef95e04425fb807e5cf7829d08f/?gd_sdk_referrer_url=https://gamedistribution.com/games/mahjong-3d-match/',
      title: "Mahjong 3D Match",
      externalUrl: '/game/mahjong-3d-match/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Mahjong 3D Match: Unlimited Fun and Challenging Levels",
    items: [
      {
        title: "Endless Gameplay with Challenging Levels",
        description: "Experience unlimited play with a variety of challenging levels that keep you engaged and entertained as you progress through Mahjong 3D Match."
      },
      {
        title: "Stunning 3D Visual Effects",
        description: "Enjoy polished 3D graphics and beautifully crafted tiles, creating an immersive Mahjong experience that is visually appealing and captivating."
      },
      {
        title: "Simple & Addictive Gameplay",
        description: "Easy to learn and hard to put down, Mahjong 3D Match is suitable for players of all ages, providing a fun and addictive experience."
      },
      {
        title: "Auto-Save Feature for Convenience",
        description: "Never lose your progress! The auto-save feature ensures you can continue from where you left off, anytime you want to play."
      },
      {
        title: "Varied Tile Layouts & Backgrounds",
        description: "Explore different tile layouts and backgrounds that add variety and freshness to each game, keeping the gameplay exciting."
      },
      {
        title: "Helpful Tips, Hints, & Boosters",
        description: "Need some help? Use the tips, hints, and powerful boosters to navigate through tricky levels and improve your Mahjong skills."
      },
      {
        title: "Pause Gameplay Anytime",
        description: "Life gets busy! With the pause feature, you can easily pause the game and resume it whenever you’re ready to continue."
      },
      {
        title: "Collect Stars & Unlock Rewards",
        description: "Earn stars by completing levels and unlock exciting rewards that enhance your gameplay experience."
      },
      {
        title: "Casual Brain Trainer",
        description: "Challenge your brain with Mahjong 3D Match! Improve problem-solving skills while enjoying a fun and relaxing game experience."
      },
      {
        title: "Available on Multiple Platforms",
        description: "Play Mahjong 3D Match anytime, anywhere! Available on iPhone, iPad, Android, and PC for a cross-platform experience."
      },
      {
        title: "Offline Play Supported",
        description: "No internet? No problem! Mahjong 3D Match supports offline play, allowing you to enjoy the game anytime, even without a connection."
      },
      {
        title: "Timer for Extra Challenge",
        description: "Compete against the clock with a timer for each level, earning bonuses for faster play and adding an extra layer of excitement to the game."
      }
    ]
  }
  ,

  whatIs: {
    title: "Unraveling Mahjong 3D Match: The Ultimate Tile-Matching Puzzle Game",
    description: "Mahjong 3D Match is a unique, free online puzzle game where players match three identical tiles in a relaxing yet mentally stimulating experience. Unlike traditional Mahjong, this game challenges players with a 3D layout and combines traditional Mahjong patterns with modern match-3 mechanics.\n\n" +
      "Play unblocked anytime in this fun and engaging brain teaser, designed for both casual and advanced players. Match three tiles at a time, explore intricate 3D tile sets, and enjoy the calming gameplay with a modern twist on a classic puzzle game.\n\n" +
      "Ready to play? No downloads required – just pure, addictive, and free tile-matching fun that you can enjoy anytime, anywhere.",
    logo: {
      src: "/assets/moscow-metro-driver-3d/moscow-metro-driver-3d-logo.jpg", 
      alt: "Mahjong 3D Match - Free Online Tile Matching Puzzle Game Logo"
    }
  }
  ,

  howToPlay: {
    title: "How to Play Mahjong 3D Match: Master the Tile-Matching Puzzle!",
    description: "Playing Mahjong 3D Match is a fun and engaging experience where you match three identical tiles to remove them from the board. The main goal is to clear all tiles within the given time limit while avoiding overfilling the box.\n\n" +
      "To play, simply tap on three matching Mahjong tiles to collect and remove them. Be careful not to fill the box beyond its 7-tile capacity! Rotate the 3D board to easily locate the tiles and use boosters like hints and shuffle to solve tough puzzles. Completing levels within the time limit earns you extra rewards and boosts your score.\n\n" +
      "The more quickly you match tiles, the higher your score! Test your puzzle-solving skills and enjoy hours of addictive gameplay in this free-to-play Mahjong game.",
    image: "/assets/moscow-metro-driver-3d/moscow-metro-driver-3d.png",
    imageAlt: "Mahjong 3D Match Gameplay Guide - How to Match Tiles and Win"
  }
  ,

  faq: {
    title: "Mahjong 3D Match: Your Questions Answered (Free Online Puzzle Game FAQ)",
    items: [
      {
        value: "free-play",
        question: "Is Mahjong 3D Match free to play?",
        answer: "Yes, Mahjong 3D Match is free to play with ads and optional in-app purchases. Enjoy endless fun without spending a dime!"
      },
      {
        value: "platforms",
        question: "What platforms is Mahjong 3D Match available on?",
        answer: "You can play Mahjong 3D Match on iOS, Android, and PC platforms. Whether you're on mobile or desktop, the game is ready to play!"
      },
      {
        value: "boosters",
        question: "Are there boosters to help complete levels?",
        answer: "Yes! Mahjong 3D Match offers boosters like hints, super hints, and shuffle to help you solve the most challenging puzzles."
      },
      {
        value: "time-limit",
        question: "Does Mahjong 3D Match have a time limit?",
        answer: "Each level in Mahjong 3D Match has a timer to increase the challenge. Race against time to clear the board and score big!"
      },
      {
        value: "pause",
        question: "Can I pause the game?",
        answer: "Yes, you can pause Mahjong 3D Match at any time. Take a break and continue solving puzzles when you're ready."
      },
      {
        value: "failure-condition",
        question: "How do I lose the game in Mahjong 3D Match?",
        answer: "You fail the level if the box exceeds 7 tiles or if time runs out. Keep an eye on the timer and tile limit to succeed!"
      },
      {
        value: "auto-save",
        question: "Does Mahjong 3D Match have auto-save?",
        answer: "Yes, Mahjong 3D Match has an auto-save feature, allowing you to continue from where you left off without losing progress."
      },
      {
        value: "brain-skills",
        question: "Does Mahjong 3D Match help improve brain skills?",
        answer: "Absolutely! Mahjong 3D Match is designed to boost problem-solving and memory, offering a fun and engaging way to exercise your brain."
      }
    ]
  }
  
};


