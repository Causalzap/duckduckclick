import { content as globalContent } from "@/config/content";

export const sprunkiIncrediboxContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Screw Sort 3D: Screw Puzzle",
    game: {
      url: 'https://html5.gamedistribution.com/26c509ee4eb54c049c7e04c6bf123ecc/?gd_sdk_referrer_url=https://gamedistribution.com/games/screw-sort-3d:-screw-puzzle/',
      title: "Screw Sort 3D: Screw Puzzle",
      externalUrl: '/game/screw-sort-3d/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Screw Sort 3D: A Relaxing & Challenging Screw Puzzle Game - Play Free Online!",
    items: [
      {
        title: "Hundreds of Challenging Levels",
        description: "Enjoy a vast collection of levels with increasing complexity. Solve intricate puzzles to keep your mind sharp!"
      },
      {
        title: "Unique 3D Puzzle Experience",
        description: "Interact with rotatable 3D objects and solve puzzles by unscrewing color-coded screws. A truly immersive and engaging puzzle game!"
      },
      {
        title: "Intuitive Controls for Easy Gameplay",
        description: "Use simple tap, drag, and twist controls to unscrew screws. Easy to learn but challenging to master, perfect for puzzle enthusiasts!"
      },
      {
        title: "Progressive Difficulty & New Challenges",
        description: "With each level, the difficulty rises and introduces new puzzles, ensuring hours of stimulating gameplay."
      },
      {
        title: "Visually Stunning 3D Graphics",
        description: "Enjoy beautifully crafted tiles and interactive 3D objects that provide an engaging and visually appealing experience."
      },
      {
        title: "Offline Play Supported",
        description: "No internet? No problem! Play Screw Sort 3D offline on mobile and PC anytime, anywhere."
      },
      {
        title: "Available on Multiple Platforms",
        description: "Play on iOS, Android, or PC via emulator. Easy access on any device, whether you’re at home or on the go!"
      },
      {
        title: "Casual Brain Training Game",
        description: "Challenge your problem-solving skills and improve memory with this relaxing but challenging puzzle game."
      }
    ]
  }
  ,
  
  whatIs: {
    title: "Unraveling Screw Sort 3D: The Ultimate 3D Screw Puzzle Game",
    description: "Screw Sort 3D is a relaxing yet challenging 3D puzzle game where you unscrew objects by removing screws! This brain-teasing game combines logic, strategy, and spatial reasoning, offering a unique puzzle experience. Unscrew items layer by layer on 3D objects and fully disassemble them to win. Ideal for casual players and puzzle enthusiasts alike.\n\n" +
      "This free-to-play game is designed to stimulate your problem-solving skills while providing a relaxing environment. Whether you're looking for a casual challenge or a more brain-training puzzle experience, Screw Sort 3D has it all.\n\n" +
      "Ready to start unscrewing? Play Screw Sort 3D online with no downloads required. Dive into this satisfying, strategic puzzle game today!",
    logo: {
      src: "/assets/screw-sort-3d/screw-sort-3d.jpeg",
      alt: "Screw Sort 3D - Free Online 3D Screw Puzzle Game Logo"
    }
  }
  ,
  
  howToPlay: {
    title: "How to Play Screw Sort 3D: Master the Ultimate Screw Puzzle!",
    description: "Playing Screw Sort 3D is all about strategy, planning, and solving 3D screw puzzles! Rotate and inspect 3D objects by dragging or swiping to find screws. The main goal in this brain-teasing puzzle game? Unscrew screws of matching colors in the correct order to disassemble objects layer by layer!\n\n" +
      "Strategize your moves carefully to avoid screw jams where screws block each other. Use zoom and rotate controls to get a better view of the puzzle and ensure minimal moves to clear each level. As the levels increase, you'll need sharp pattern recognition and strategic thinking to tackle the more complex puzzles!\n\n" +
      "Ready to take on the challenge? Dive into this relaxing yet challenging 3D puzzle game, test your skills, and enjoy hours of fun solving screw puzzles!",
    image: "/assets/screw-sort-3d/screw-sort-3d.webp",
    imageAlt: "Screw Sort 3D Online Puzzle Game Guide - Free 3D Screw Puzzle Controls & Strategy"
  }
  ,
  
  faq: {
    title: "Screw Sort 3D: Your Questions Answered (Free Puzzle Game FAQ)",
    items: [
      {
        value: "difficulty",
        question: "Is Screw Sort 3D free to play?",
        answer: "Yes, Screw Sort 3D is completely free to play with ads. Optional in-app purchases are available for extra features and boosters, offering players more options for enhancing their gameplay."
      },
      {
        value: "platforms",
        question: "What platforms is Screw Sort 3D available on?",
        answer: "Screw Sort 3D is available on multiple platforms, including iOS, Android, and can be played on PC via emulators. Enjoy the puzzle-solving fun wherever you are!"
      },
      {
        value: "levels",
        question: "How many levels does Screw Sort 3D have?",
        answer: "Screw Sort 3D features hundreds of levels, with some games offering up to a thousand. The difficulty increases as you progress, providing a rewarding challenge for players of all levels."
      },
      {
        value: "controls",
        question: "Are the controls easy to use in Screw Sort 3D?",
        answer: "Yes! The game uses intuitive tap, drag, and swipe controls, allowing you to unscrew screws and rotate objects effortlessly. It's designed to be user-friendly for both casual players and puzzle enthusiasts."
      },
      {
        value: "offline",
        question: "Can I play Screw Sort 3D offline?",
        answer: "Yes, Screw Sort 3D supports offline play, allowing you to enjoy the puzzle game without an internet connection. Perfect for playing on the go!"
      },
      {
        value: "strategy",
        question: "Does Screw Sort 3D require strategic thinking?",
        answer: "Yes, the game challenges you to plan your moves carefully to avoid screw jams. It's all about thinking ahead, strategizing your moves, and recognizing patterns to progress through the levels."
      },
      {
        value: "rotation",
        question: "Can I rotate the object in Screw Sort 3D?",
        answer: "Absolutely! You can rotate and zoom in on the 3D objects to get a better view of the screws, helping you solve the puzzle from different angles."
      },
      {
        value: "updates",
        question: "Does Screw Sort 3D feature new updates?",
        answer: "Yes, Screw Sort 3D regularly receives updates with new levels, exciting challenges, and limited-time events to keep the game fresh and engaging for players."
      }
    ]
  }
  
}; 