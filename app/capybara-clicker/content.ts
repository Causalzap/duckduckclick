import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Capybara Clicker",
    game: {
      url: 'https://capybaragame.io/capybara-clicker.embed',
      title: "Capybara Clicker: Idle Clicker Game",
      externalUrl: '/game/capybara-clicker/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Capybara Clicker: Fun and Addictive Clicker Game - Play Now!",
    items: [
      {
        title: "Diverse Upgrade System",
        description: "Boost your click production with a variety of upgrades including Cursor, Mr. Clicker, President Clicker, and King Clicker. Each upgrade increases your water capybara output, ensuring continuous progress!"
      },
      {
        title: "Auto Click Tools for Effortless Progress",
        description: "Keep earning capybaras with Auto Click, Capybara Farm, and Power Plant. These tools ensure a steady, passive production of capybaras, so you can focus on your strategy while they do the work!"
      },
      {
        title: "Unlock Unique Capybara Skins",
        description: "Customize your capybaras with 16 different skins, including Galaxy Capybara, Robin Hood Capybara, and Magic Capybara. Collect them all and show off your unique capybara collection!"
      },
      {
        title: "Dynamic Weather System",
        description: "Experience changing weather backgrounds like sunny, rainy, meteor shower, and snowstorm. Each weather change adds a refreshing twist to the gameplay, making every click more exciting!"
      },
      {
        title: "Double Your Energy Output",
        description: "Activate the Energy Multiplier bar to double your capybara production by maintaining consistent clicks. Maximize your rewards and speed up your progress in Capybara Clicker!"
      },
      {
        title: "Offline Progress Saving",
        description: "Even when you're away, Capybara Clicker keeps track of your progress. Play at your own pace and return to see the rewards of your offline achievements with the game’s automatic progress saving feature!"
      },
      {
        title: "Easy to Play for All Ages",
        description: "Capybara Clicker is designed for players of all ages, offering simple gameplay mechanics that anyone can pick up. No complex controls, just fun and rewarding gameplay!"
      },
      {
        title: "Global Leaderboard & Social Features",
        description: "Compete with other players globally by climbing the leaderboard. Share your progress and interact with other capybara fans through integrated social features, making it even more engaging!"
      }
    ]
}
,
  
whatIs: {
  title: "Discover Capybara Clicker: The Ultimate Idle Clicker Game",
  description: "Capybara Clicker is an engaging idle clicker game where players accumulate capybaras by either manual clicking or using automated tools. The gameplay revolves around generating capybaras with each click, upgrading your click power, and unlocking automatic clickers to boost production.\n\n" +
    "As you progress, you can unlock a variety of skins and weather effects, allowing you to customize the appearance of your capybaras and the game environment. The dynamic weather system adds unique atmosphere changes, while the skin unlocks give you an extra layer of fun customization.\n\n" +
    "Perfect for busy players, Capybara Clicker allows you to earn capybaras even when you’re offline. Return to the game to receive rewards based on your offline progress. Whether you’re playing actively or passively, Capybara Clicker offers a rewarding experience for all types of players.\n\n" +
    "Ready to start? Dive into Capybara Clicker and enjoy hours of fun with idle gameplay, endless upgrades, and exciting customization options!",
  logo: {
    src: "/assets/capybara-clicker/capybara-clicker-logo.jpeg",
    alt: "Capybara Clicker - Fun Idle Clicker Game Logo"
  }
},
  
howToPlay: {
  title: "How to Play Capybara Clicker: Click, Upgrade, and Collect!",
  description: "Playing Capybara Clicker is simple and fun! Tap on the large capybara on the screen to generate more small capybaras. The more you click, the more capybaras you earn, allowing you to upgrade your click power and automatic production speed.\n\n" +
    "As you accumulate capybaras, purchase upgrades to increase your click output or automate the production process for continuous progress. Random small capybaras will appear on the screen – click them to earn extra points!\n\n" +
    "Keep your energy bar full to double your capybara production, speeding up your progress. Unlock different skins and weather effects to customize the game interface and give it a personalized touch.\n\n" +
    "Use the auto-click feature to reduce the effort needed for continuous play, while also benefiting from offline earnings when you’re not actively playing. The controls are easy: use the left mouse button or simply tap the screen to control the game.\n\n" +
    "For an added challenge, use the 'Ascend' feature to reset your progress and earn permanent bonuses, allowing you to start a fresh new round with enhanced capabilities!",
  image: "/assets/capybara-clicker/capybara-clicker.png",
  imageAlt: "Capybara Clicker - How to Play and Controls Guide"
},
  
faq: {
  title: "Capybara Clicker: Your Questions Answered (Free Idle Clicker Game FAQ)",
  items: [
    {
      value: "free-to-play",
      question: "Is Capybara Clicker free to play?",
      answer: "Yes, Capybara Clicker is completely free to play! It is supported by in-app purchases and advertisements that help with the game's operation."
    },
    {
      value: "device-support",
      question: "Which devices can I play Capybara Clicker on?",
      answer: "Capybara Clicker is available on multiple platforms, including web browsers, iOS, Android, and Windows PC. Play it wherever you are!"
    },
    {
      value: "gameplay-complexity",
      question: "Is the gameplay of Capybara Clicker difficult?",
      answer: "No, Capybara Clicker is easy to pick up and play. With simple tap or click mechanics, it's perfect for casual, stress-free entertainment."
    },
    {
      value: "offline-earnings",
      question: "Does Capybara Clicker support offline earnings?",
      answer: "Yes! Capybara Clicker allows you to earn capybaras even while you're offline. When you return, you can collect rewards for your offline progress."
    },
    {
      value: "unlockable-skins-weather",
      question: "How many skins and weather effects can I unlock in Capybara Clicker?",
      answer: "There are 16 unique capybara skins and a variety of weather effects that you can unlock to customize the game’s look and feel."
    },
    {
      value: "progress-saving",
      question: "Does Capybara Clicker save my progress?",
      answer: "Yes, Capybara Clicker saves your game data to the cloud, allowing you to continue your progress across different devices."
    },
    {
      value: "age-appropriateness",
      question: "Is Capybara Clicker suitable for all ages?",
      answer: "Absolutely! The game features cute graphics with no violence, making it perfect for players of all ages."
    },
    {
      value: "developer",
      question: "Who developed Capybara Clicker?",
      answer: "Capybara Clicker was developed by Euclides, a company known for creating fun and addictive idle games."
    }
  ]
}
};


