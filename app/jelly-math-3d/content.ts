import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Jelly Math 3D",
    game: {
      url: 'https://html5.gamedistribution.com/2e93e177c83841fa985f2c11078bd0af/?gd_sdk_referrer_url=https://gamedistribution.com/games/jelly-math-3d/',
      title: "Jelly Math 3D",
      externalUrl: '/game/jelly-math-3d/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Jelly Math 3D Features - Fun and Engaging Math Puzzle Game for All Ages!",
    items: [
      {
        title: "Colorful Math Puzzle Game",
        description: "Dive into Jelly Math 3D, a fun and colorful math puzzle game designed for all ages. Match vibrant jelly blobs to solve arithmetic problems and sharpen your math skills."
      },
      {
        title: "Educational Fun",
        description: "Jelly Math 3D blends educational content with entertaining gameplay, making learning arithmetic enjoyable. It's perfect for kids, students, and adults who want to challenge their brain while having fun."
      },
      {
        title: "Progressive Difficulty",
        description: "As you progress, the difficulty levels increase, helping you improve your math proficiency. Each level introduces more challenging problems to keep you engaged and learning."
      },
      {
        title: "Instant Feedback & Rewards",
        description: "Jelly Math 3D offers instant feedback after each puzzle, rewarding players with satisfying animation effects as they solve problems correctly. It’s a fun, addictive way to enhance your math skills."
      },
      {
        title: "Vibrant 3D Graphics",
        description: "Enjoy the visually engaging 3D graphics and satisfying animation effects as you solve math puzzles. The vibrant jelly blobs and interactive elements make the learning experience more immersive."
      },
      {
        title: "Accessible on Multiple Platforms",
        description: "Jelly Math 3D is accessible on both web and mobile platforms, allowing you to enjoy the game anytime, anywhere. Play on your desktop, tablet, or smartphone!"
      },
      {
        title: "Brain-Boosting Challenges",
        description: "Jelly Math 3D is the perfect brain trainer! Whether you’re a beginner or a seasoned pro, this game offers math challenges suitable for everyone, helping you develop arithmetic skills in a fun, addictive way."
      }
    ]
  }
  
,
  
whatIs: {
  title: "Discover Jelly Math 3D: The Fun and Educational Math Puzzle Game",
  description: "Jelly Math 3D is an engaging, educational puzzle game designed to make learning math enjoyable. Players solve math problems by matching colorful jelly blobs, making it a fun way to practice arithmetic skills. Combining challenging puzzles and math, it provides an exciting brain-training experience for all ages. Whether you're a student looking to improve your math skills or just love solving puzzles, Jelly Math 3D offers an interactive and enjoyable way to learn.",
  logo: {
    src: "/assets/jelly-math-3d/jelly-math-3d-logo.jpg",
    alt: "Jelly Math 3D - Free Online Educational Math Puzzle Game"
  }
}
,
  
howToPlay: {
  title: "How to Play Jelly Math 3D: Master the Fun Math Puzzle Challenges!",
  description: "Playing Jelly Math 3D is an exciting and educational experience! To play, match jelly blobs of the same color to solve math equations. Complete arithmetic tasks by selecting the correct jelly blobs and progress through increasingly difficult levels. Use logic, quick thinking, and math skills to maximize your points. With fluid tap controls and visual cues, you’ll enjoy an intuitive and rewarding gameplay experience. Ready to boost your math skills while having fun?",
  image: "/assets/jelly-math-3d/jelly-math-3d.png",
  imageAlt: "Jelly Math 3D Gameplay - Fun and Educational Math Puzzle Game"
}

,
  
faq: {
  title: "Jelly Math 3D: Your Questions Answered (Free Educational Math Puzzle FAQ)",
  items: [
    {
      value: "free-to-play",
      question: "Is Jelly Math 3D free to play?",
      answer: "Yes, Jelly Math 3D is completely free to play on web and mobile platforms, offering accessible educational fun for everyone!"
    },
    {
      value: "math-skills",
      question: "Can Jelly Math 3D help improve math skills?",
      answer: "Absolutely! Jelly Math 3D is designed to sharpen your arithmetic and problem-solving abilities, making learning math fun and interactive."
    },
    {
      value: "platforms",
      question: "What platforms support Jelly Math 3D?",
      answer: "Jelly Math 3D is available on browsers for online play and can be accessed on mobile devices, providing a seamless gaming experience on various platforms."
    },
    {
      value: "suitable-for-kids",
      question: "Is this game suitable for children?",
      answer: "Yes, Jelly Math 3D is family-friendly and educational, making it perfect for learners of all ages, including children."
    },
    {
      value: "difficulty-levels",
      question: "Are there different levels of difficulty?",
      answer: "Yes, Jelly Math 3D features progressive difficulty levels that increase as you advance, ensuring a rewarding challenge for all players."
    },
    {
      value: "how-to-play",
      question: "How do I play the game?",
      answer: "To play Jelly Math 3D, match jelly blobs to solve math problems and progress through levels. Use logic and quick thinking to maximize your score!"
    }
  ]
}


};


