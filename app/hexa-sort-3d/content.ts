import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Hexa Sort 3D",
    game: {
      url: 'https://play.gamepix.com/hexa-sort-3d/embed?sid=e4515',
      title: "Hexa Sort 3D",
      externalUrl: '/game/hexa-sort-3d/index.html'
    }
  },

  // 特性部分配置
  features: {
    // Title reflecting the new game concept
    title: "Hexa Sort 3D Features - Play Free Puzzle Game with Colorful Hexagons!",
    items: [
      {
        // Highlights the core gameplay mechanics
        title: "Stunning 3D Colorful Hexagons",
        description: "Immerse yourself in the vibrant world of Hexa Sort 3D with beautifully designed, multi-colored hexagon blocks and smooth animations. Experience an eye-catching puzzle adventure that combines both strategy and visual appeal."
      },
      {
        // Focuses on ease of play and depth of strategy
        title: "Easy to Play, Rich in Strategy",
        description: "Hexa Sort 3D offers intuitive gameplay where players can quickly get started. However, the levels are strategically challenging, offering plenty of room for thought and tactics, making every move count."
      },
      {
        // Emphasizes the variety of challenges
        title: "Diverse Levels and Exciting Challenges",
        description: "With a wide range of levels and unique challenges, Hexa Sort 3D keeps players engaged with constantly evolving puzzles. Conquer each stage to unlock new difficulties and exciting game mechanics."
      },
      {
        // Focuses on the relaxing audio experience
        title: "Relaxing ASMR Sounds for Immersion",
        description: "Enhance your gameplay experience with soothing ASMR sound effects. These calming sounds elevate your immersion, helping you relax while solving puzzles in the Hexa Sort 3D world."
      },
      {
        // Highlights intuitive controls for a seamless experience
        title: "Intuitive Drag-and-Drop Gameplay",
        description: "Enjoy easy-to-use, drag-and-drop controls in Hexa Sort 3D. The intuitive interface allows for smooth interactions, making it accessible to players of all ages."
      },
      {
        // Focuses on in-game support tools
        title: "Power-ups to Help You Overcome Challenges",
        description: "Hexa Sort 3D features a variety of helpful power-ups, such as hammers and block replacement tools, designed to aid you in overcoming tough levels and progressing faster in the game."
      },
      {
        // Emphasizes offline play and accessibility
        title: "Play Anytime, Even Without an Internet Connection",
        description: "Enjoy Hexa Sort 3D even when offline! The game is fully playable without an internet connection, allowing you to dive into the action whenever you want, anywhere."
      },
      {
        // Highlights the competitive and social features
        title: "Leaderboards and Social Sharing",
        description: "Compete with friends and players worldwide! Hexa Sort 3D includes a leaderboard system and social sharing features, allowing you to compare your scores and share your achievements with others."
      }
    ]
  }
  
  
,
  
whatIs: {
  // Title clearly defines the game type
  title: "Hexa Sort 3D: The Ultimate Color Matching Puzzle Game",
  
  // Description based on the Hexa Sort 3D gameplay info
  description: "Hexa Sort 3D is an engaging strategy puzzle game that combines color sorting, stack elimination, and stunning 3D visuals. In this game, players must place hexagonal blocks of the same color next to each other, triggering an automatic merging and elimination mechanism. Your goal is to complete specific elimination tasks within the game.\n\n" +
    "Strategically use the limited space on the board and carefully sort and stack the blocks to reach the game’s objectives. Hexa Sort 3D blends brain training, color matching, and visual enjoyment, offering both relaxing and challenging gameplay elements.\n\n" +
    "With its intuitive drag-and-drop mechanics and increasing levels of difficulty, Hexa Sort 3D provides a fun and satisfying puzzle experience that players of all ages can enjoy. Whether you’re looking to relax or challenge your mind, this game offers something for everyone.",
  
  logo: {
    // Image path for the logo
    src: "/assets/hexa-sort-3d/hexa-sort-3d-log.webp",
    // Alt text updated for the new game concept and keywords
    alt: "Hexa Sort 3D - Color Matching Puzzle Game Logo"
  }
}

,
  
howToPlay: {
  // Title reflecting the gameplay mechanics
  title: "How to Play Hexa Sort 3D: Master the Color Matching Puzzle!",
  
  // Description focused on the game mechanics and strategy
  description: "Playing Hexa Sort 3D is all about strategically sorting and stacking hexagonal blocks in this fun and challenging puzzle game. Use drag-and-drop mechanics to place the blocks onto the game board in the correct positions. Your goal is to group blocks of the same color together to trigger automatic merging and elimination.\n\n" +
    "Once a stack reaches 10 layers, the blocks are eliminated. Focus on managing your limited space by prioritizing the merging of lower layers to create room for future moves. Use the hammer power-up to destroy improperly stacked blocks, or the swap function to adjust the block placement for better organization.\n\n" +
    "Hexa Sort 3D features a dynamic 3D perspective that you can rotate and adjust, making it easier to plan and strategize. There’s no time limit, so you can take your time to think through each move carefully.\n\n" +
    "As you progress, challenge yourself with more difficult levels that test your sorting and spatial planning skills. Can you clear the required number of blocks and complete all the levels?",
  
  // Image path for how-to-play visual
  image: "/assets/hexa-sort-3d/hexa-sort-3d.webp",
  
  // Alt text updated for SEO
  imageAlt: "Hexa Sort 3D - How to Play, Color Matching Puzzle and Sorting Strategy"
}


,
  
faq: {
  // Title updated for Hexa Sort 3D FAQ
  title: "Hexa Sort 3D: Your Questions Answered (Puzzle Game FAQ)",
  items: [
    {
      value: "pricing",
      question: "Is Hexa Sort 3D free to play?",
      answer: "Yes, Hexa Sort 3D is free to download and play! The game includes ads and in-app purchases, but you can enjoy the core gameplay without spending money."
    },
    {
      value: "platforms",
      question: "Which platforms is Hexa Sort 3D available on?",
      answer: "Hexa Sort 3D is available on iOS, Android, and web browsers. The game is fully compatible with mobile devices, tablets, and desktop platforms."
    },
    {
      value: "difficulty",
      question: "How difficult is Hexa Sort 3D?",
      answer: "Hexa Sort 3D is designed to be easy to pick up, with levels that gradually increase in difficulty. It’s perfect for puzzle players of all ages, offering both relaxing gameplay and challenging puzzles as you progress."
    },
    {
      value: "offline-play",
      question: "Do I need an internet connection to play Hexa Sort 3D?",
      answer: "No, Hexa Sort 3D supports offline play, so you can enjoy the game without needing a constant internet connection."
    },
    {
      value: "power-ups",
      question: "Are there power-ups in Hexa Sort 3D?",
      answer: "Yes, Hexa Sort 3D includes helpful power-ups, such as the hammer to break unsuitable stacks and the swap function to adjust block positions. These features help you overcome tough levels."
    },
    {
      value: "progress-saving",
      question: "How does Hexa Sort 3D save my progress?",
      answer: "Hexa Sort 3D supports cloud saving across multiple platforms, allowing you to sync your progress and play across different devices (platform-specific)."
    },
    {
      value: "leaderboards-social",
      question: "Does Hexa Sort 3D have leaderboards or social features?",
      answer: "Yes, Hexa Sort 3D features leaderboards where you can compare your scores and progress with friends or other players. It also has social sharing options so you can show off your achievements."
    },
    {
      value: "age-appropriateness",
      question: "Is Hexa Sort 3D suitable for all ages?",
      answer: "Hexa Sort 3D is rated 18+, but it is suitable for players of all ages, with a focus on puzzle-solving and relaxation. It offers both fun and mental stimulation for everyone."
    }
  ]
}

};


