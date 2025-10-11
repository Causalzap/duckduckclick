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
  "features": {
    "title": "Capybara Clicker: Core Growth Mechanisms and Exponential Progression",
    "items": [
      {
        "title": "Core Growth: Automated Acceleration and Investment Thresholds",
        "description": "Auto-click and upgrades drastically accelerate Capybara growth in the mid-to-late game. Manual clicking becomes marginally less profitable after reaching a critical investment threshold, compelling players to strategically prioritize **automation development** for maximum efficiency."
      },
      {
        "title": "Ascend Prestige: The Exponential Reset Mechanism",
        "description": "The **Ascend reset** grants permanent, exponential bonuses (such as global production multipliers and click add-ons). This ensures that each reset progresses significantly faster than the last, achieving true **exponential growth** and maintaining long-term player motivation."
      },
      {
        "title": "Personalized Incentives with Strategic Impact",
        "description": "Population milestones and weather scene unlocks provide more than visual enjoyment; **specific weather effects subtly enhance click revenue or overall production**, adding a crucial **strategic layer** to the game's aesthetic and customization system."
      }
    ]
  }
,
  
"whatIs": {
    "title": "Capybara Clicker — Effortlessly Build a Billion-Capybara Empire",
    "description": "Experience exponential growth and passive income—enjoy the ultimate fun of idle gaming!\n\n**Capybara Clicker** is more than just tapping; it's the satisfaction of building your personal empire. Click to upgrade, boost your auto-income, and feel the thrill of surging numbers.\n\n Click \"**Play Game**\" now to start your journey to Capybara wealth!\n\n**Competitive Advantage Analysis:**\n\n**1. Exponential Growth via the Ascend Mechanism**\n\nOur **Ascend Prestige Reset Mechanism** goes beyond simple resets by granting players **permanent, exponential boosts**, fostering powerful long-term engagement. This system ensures satisfying growth that keeps players motivated for months.\n\n**2. Unique Customization & Dual Fulfillment**\n\nThe unique system of **Capybara appearance and weather scene unlocks** offers more than just visual changes; it enriches the personalization experience. This dual fulfillment of **collection and numerical growth** clearly differentiates us from competitors focused purely on numerical increases.",
  
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
  
  "faq": {
    "title": "Capybara Clicker: Ultimate Strategy & Frequently Asked Questions (FAQ)",
    "items": [
      {
        "value": "long-term-strategy-efficiency",
        "question": "[Long-Term Strategy] What is the best long-term strategy for sustained growth?",
        "answer": "**Expert Strategy**: Prioritize increasing **Capybaras Per Second (CPS)** first, then balance this with improvements to **Capybaras Per Click (CPC)**. Balancing both ensures steady passive income while making manual input impactful, leading to balanced exponential growth."
      },
      {
        "value": "ascend-timing-efficiency",
        "question": "[Ascend Timing] When is the most efficient time to execute an Ascend reset?",
        "answer": "**Efficiency Threshold**: Ascend is most effective when your Capybara population or accumulated income reaches a **specific threshold** that is significantly higher than your previous Ascend (factoring in current prestige bonuses). This ensures the permanent boost drastically accelerates the next run."
      },
      {
        "value": "resource-allocation-midgame",
        "question": "[Resource Allocation] How should resources be allocated during the mid-game phase?",
        "answer": "**Mid-Game Tip**: Prioritize upgrading **high-tier production tools** for maximum output first. Then, invest in unlocking new **low-tier production methods** to expand your overall production capacity and diversification."
      },
      {
        "value": "cosmetic-vs-bonus",
        "question": "[Visuals vs. Mechanics] How to determine which appearances and weather scenes grant actual bonuses?",
        "answer": "**Clue Identification**: **Decorative items** will state they are purely visual. **Bonus-granting items** will explicitly mention an added benefit, such as 'extra income' or 'production multiplier,' in their description. Always check the item's detailed description."
      },
      {
        "value": "advanced-clicking-techniques",
        "question": "[Advanced Techniques] Do quick-clicking or macro command techniques exist?",
        "answer": "**Elite Skill**: Yes, top players utilize **high physical click speed** and, where allowed by platform terms, **external tools (macros)** to maximize early-game advantages by instantly achieving high CPC rates and reaching automation thresholds faster."
      },
      {
        "value": "multiplier-stacking",
        "question": "[Multiplier Stacking] How to utilize multiplier stacking techniques?",
        "answer": "**Strategy**: Employ **synchronized activation**—time your highest-impact upgrades (e.g., permanent prestige buffs, timed boosters) to activate simultaneously. This combination creates a temporary, massive production spike (burst of output)."
      },
      {
        "value": "weather-rare-events",
        "question": "[Weather Impact] Does the weather feature influence rare events?",
        "answer": "**Game Mechanics**: Yes, certain weather patterns **increase the probability of rare events** appearing. High-level players should track and utilize these specific weather conditions to maximize opportunities for rare bonuses."
      },
      {
        "value": "newbie-common-errors",
        "question": "[Newbie Pain Points] What are the typical errors made by new players?",
        "answer": "Typical errors include: **Ascending too early** (before achieving sufficient permanent gain), **over-relying on manual clicking** late in the run, and **neglecting the balance** of auto-upgrade investments."
      },
      {
        "value": "automation-transition",
        "question": "[Pacing] When should the player transition focus entirely to auto-upgrades?",
        "answer": "**Transition Rule**: Transition focus when your **Capybaras Per Second (CPS) significantly outpaces your Capybaras Per Click (CPC)**. A good rule of thumb is to use the **income ratio** (CPC divided by the highest CPS upgrade cost) as a benchmark for investment priorities."
      },
      {
        "value": "upgrade-bottleneck-avoidance",
        "question": "[Bottleneck Avoidance] How to avoid upgrade bottlenecks?",
        "answer": "**Planning Tip**: Plan your purchase order carefully. Prioritize **core production capacity upgrades** that yield the highest CPS for the investment, ensuring the income stream always supports the next major upgrade tier."
      },
      {
        "value": "technical-lag-solutions",
        "question": "[Troubleshooting] How to solve common lag and efficiency degradation issues?",
        "answer": "**Official Solution**: **Close all background programs** to free up system resources, and ensure you are using the **latest version of your device's operating system and browser** to maintain optimal performance."
      },
      {
        "value": "ascend-data-loss",
        "question": "[Data Integrity] What to do if save data is lost during an Ascend?",
        "answer": "**Data Recovery**: **Regularly back up your game data** using the official export/import save function (if available). If loss occurs, check your cloud or browser synchronization settings, and attempt to use the official manual synchronization tool."
      },
      {
        "value": "click-response-limit",
        "question": "[Input Optimization] Is there a limit to click responsiveness?",
        "answer": "**Input Mechanics**: Yes, most systems have a limit where excessively high click frequencies might be ignored. Maintain a **moderate, consistent click rate** to ensure every input is registered by the game system, maximizing recorded CPC."
      }
    ]
  }

};


