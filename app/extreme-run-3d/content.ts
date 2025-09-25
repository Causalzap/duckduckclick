import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Extreme Run 3D",
    game: {
      url: 'https://play.gamepix.com/hexa-sort-3d/embed?sid=e4515',
      title: "Extreme Run 3D",
      externalUrl: '/game/extreme-run-3d/index.html'
    }
  },

  // 特性部分配置
  features: {
    // Title reflecting the new game concept
    title: "Extreme Run 3D Features - Play Free Online!",
    items: [
      {
        // Highlights the core gameplay with gravity-defying slopes
        title: "Gravity-Defying Slopes",
        description: "Experience thrilling speed in Extreme Run 3D with gravity-defying slopes that challenge your skills! The unique gravity effects add a rush of excitement as you race through the challenging courses."
      },
      {
        // Focuses on the visual appeal with neon 3D graphics
        title: "Neon 3D Visuals",
        description: "Dive into a visually stunning world with sleek, modern neon 3D graphics. The bright, bold colors and sharp design elements enhance the immersive experience, making every level feel electrifying."
      },
      {
        // Emphasizes intuitive controls suitable for all players
        title: "Simple and Intuitive Controls",
        description: "Extreme Run 3D offers intuitive single-finger or keyboard controls that are easy for everyone to pick up. Whether you’re a casual gamer or a seasoned pro, you’ll feel right at home controlling your character."
      },
      {
        // Highlights the variety of levels and challenges
        title: "41 Challenging Levels",
        description: "With up to 41 different levels, each offering varying degrees of difficulty, Extreme Run 3D keeps players engaged with fresh challenges that test their speed and agility. Prepare for an adrenaline-pumping experience!"
      },
      {
        // Focuses on the audio experience
        title: "Immersive Sound Effects and Music",
        description: "The realistic sound effects and rhythm-driven background music add to the intensity of Extreme Run 3D. The energetic soundtrack keeps you motivated as you race through each level."
      },
      {
        // Explains key gameplay mechanics like jumping and movement
        title: "Jump, Dodge, and Move",
        description: "Master the basics of jumping and moving left or right to navigate complex maps. Use these core mechanics to overcome obstacles and progress through the game’s increasingly difficult levels."
      },
      {
        // Emphasizes platform compatibility
        title: "Play Anytime, Anywhere",
        description: "Extreme Run 3D is fully compatible with both web and mobile platforms. Whether you're on your phone, tablet, or computer, you can enjoy the game anytime, anywhere!"
      },
      {
        // Focuses on replay value through endless mode and rankings
        title: "Endless Mode and Ranking System",
        description: "Challenge yourself with the Endless Mode and see how long you can last! The ranking system adds replay value, allowing you to compete with players worldwide for the top spot on the leaderboard."
      }
    ]
  }
  
,
  
whatIs: {
  // Title clearly defines the game type
  title: "Extreme Run 3D: The Ultimate Neon Parkour Challenge",
  
  // Description based on the gameplay mechanics
  description: "Extreme Run 3D is an exhilarating parkour game where you control a fast-moving rolling ball through neon-lit, dynamically generated tracks. In this 3D racing game, you must react quickly to dodge massive obstacles and make precise jumps to avoid falling.\n\n" +
    "The game combines speed, skill, and precise control, offering an intense challenge that tests your reaction time and accuracy. Whether you’re navigating the twisting paths or jumping over sudden hazards, every moment in Extreme Run 3D demands sharp reflexes.\n\n" +
    "With both an Endless Mode for endless fun and multiple difficulty levels (Easy, Medium, etc.), Extreme Run 3D provides varied gameplay to suit players of all skill levels. Ready to take on the challenge? Play for free and experience the rush of high-speed parkour action!",
  
  logo: {
    // Image path for the logo
    src: "/assets/extreme-run-3d/extreme-run-3d-logo.webp",
    // Alt text updated for SEO
    alt: "Extreme Run 3D - Fast-Paced Neon Parkour Game Logo"
  }
}
,
  
howToPlay: {
  // Title reflecting the game mechanics
  title: "How to Play Extreme Run 3D: Master the Neon Parkour Challenge!",
  
  // Description focused on gameplay mechanics
  description: "Playing Extreme Run 3D is all about mastering speed, skill, and precision! Use the arrow keys (left and right) or A/D keys to control the rolling ball and navigate through the dynamic, neon-lit tracks. To jump over obstacles and gaps, simply press the Spacebar, Up Arrow, or W key.\n\n" +
    "The game features sharp turns, steep slopes, and dangerous gaps, requiring quick reactions and accurate movements to avoid falling off the track or crashing into obstacles. The faster you react, the better your chances of surviving the increasingly challenging levels!\n\n" +
    "If you fall off the track or crash into an obstacle, you'll need to restart the level or try again. Extreme Run 3D is all about fast-paced reflexes and the ability to anticipate upcoming challenges.\n\n" +
    "Practice smooth rolling and jumping techniques as you progress through levels, gradually taking on more complex and difficult courses. In some versions, you can adjust the camera angle for better track visibility, making it easier to plan your moves and stay ahead of the game!",
  
  // Image path for the game visuals
  image: "/assets/extreme-run-3d/extreme-run-3d.webp",
  
  // Alt text updated for SEO
  imageAlt: "Extreme Run 3D Game Guide - Master Neon Parkour with Keyboard Controls"
}
,
  
faq: {
  // Title updated
  title: "Extreme Run 3D: Your Questions Answered (Free Online Parkour Game FAQ)",
  items: [
    {
      value: "pricing",
      question: "Is Extreme Run 3D free to play?",
      answer: "Yes, Extreme Run 3D is free to download and play! The game contains ads and in-app purchases, but you can enjoy the main gameplay without spending money."
    },
    {
      value: "platforms",
      question: "Which platforms is Extreme Run 3D available on?",
      answer: "Extreme Run 3D is available on mobile devices (iOS and Android) and can be played on PC web browsers."
    },
    {
      value: "levels",
      question: "How many levels are in Extreme Run 3D?",
      answer: "The game features 41 challenging levels with varying difficulty, plus an Endless Mode for unlimited playtime."
    },
    {
      value: "difficulty",
      question: "Is Extreme Run 3D hard to play?",
      answer: "The controls are simple and easy to learn, but the game offers a challenging experience. Players will need quick reflexes and excellent hand-eye coordination to avoid obstacles and complete levels."
    },
    {
      value: "offline-play",
      question: "Can I play Extreme Run 3D offline?",
      answer: "Yes, you can play Extreme Run 3D offline. However, when connected to the internet, progress is synced, and ads are displayed."
    },
    {
      value: "controls",
      question: "What controls are available in Extreme Run 3D?",
      answer: "Extreme Run 3D supports both keyboard controls (Arrow keys, W, Spacebar) and touch screen controls on mobile devices."
    },
    {
      value: "age-appropriate",
      question: "Is Extreme Run 3D suitable for all ages?",
      answer: "Yes! Extreme Run 3D is suitable for a wide range of players who enjoy parkour and reflex-based games. It offers exciting challenges without inappropriate content."
    },
    {
      value: "developer",
      question: "Who developed Extreme Run 3D?",
      answer: "Extreme Run 3D was developed by AlienWebGames."
    },
    {
      value: "audio",
      question: "Does Extreme Run 3D have sound effects and background music?",
      answer: "Yes, the game features electronic music and sound effects that enhance the fast-paced, thrilling atmosphere of the parkour challenges."
    }
  ]
}


};


