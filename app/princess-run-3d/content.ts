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
  "features": {
    "title": "Princess Run 3D: Core Gameplay Features & Long-Term Goals",
    "items": [
      {
        "title": "Strategic Dual-Currency Collection (Gems & Fashion)",
        "description": "The core collection mechanism balances **Diamonds (General Currency)** and **Fashion Accessories (Charm Value)**. Fashion items are crucial, as they directly boost the **Charm Score**, significantly impacting final rankings and progression. Players must make strategic trade-offs between rapid Diamond collection and high-value Fashion items during high-speed runs."
      },
      {
        "title": "Companion-Powered Defense & Progression",
        "description": "Accumulating **Charm Value** accelerates the acquisition and upgrade of your companion, boosting its defensive efficiency. The companion offers sustained protection, capable of deploying strategic defense against major obstacles and environmental threats (like dynamic traps and chain attacks), drastically increasing long-term survivability."
      },
      {
        "title": "Exclusive Fashion Customization & Long-Term Rewards",
        "description": "The rarest dresses and dream locations feature unique visual effects and powerful **Charm Attributes**. Unlocking these top-tier items requires accumulating substantial rare resources and completing advanced challenges, providing powerful incentives for long-term player engagement and aspirational goals."
      }
    ]
  }
  ,
  
  "whatIs": {
    "title": "Princess Run 3D — Dream Come True Princess Runner Adventure",
    "description": "Unlock your inner princess, collect **dreamy fashion accessories**, and run alongside your exclusive companion who guards your every stride! \n\nPrincess Run 3D invites you to embark on a casual runner journey filled with love and charm.\n\nClick \"**Play Game**\" now and step into your fairy-tale world!\n\n**Beyond Gold Coins: The Charm Collection System**\n\nOur **Charm Value Collection Mechanism** surpasses the monotony of traditional runner games (like Subway Surfers) simple coin collection. It offers **rich visual feedback** and **emotional rewards**, making every collection feel like an achievement with visible growth and progression.\n\n**Strategic Companion Defense System**\n\nUnlike competitors' simple invincible shields or magnets, Princess Run 3D's **Companion Support/Defense Mechanism** not only provides lasting protection but also deploys strategic defensive skills tailored for different obstacles. This dynamic approach adds **game depth and strategic flexibility**.\n\nExperience the true essence of a princess's dream run, where style meets strategy!",
    "logo": {
      "src": "/assets/princess-run-3d/princess-run-3d-logo.jpg",
      "alt": "Princess Run 3D - Free Online Unblocked Dress-Up Endless Runner Game Logo"
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
  
  "faq": {
    "title": "Princess Run 3D: Ultimate Charm Runner Strategy & FAQ",
    "items": [
      {
        "value": "long-term-upgrade-path",
        "question": "[Long-Term Strategy] What is the Optimal Upgrade Path for Score Maximization?",
        "answer": "**Official Strategy**: Prioritize investing in **Charm Value Enhancement** first to quickly boost overall character capabilities and score potential. Then, gradually upgrade the **Companion's Defense Power** to maximize run longevity and survivability in later stages. This ensures an optimal balance between offense (scoring) and defense (persistence)."
      },
      {
        "value": "high-score-risk-pivot",
        "question": "[Score Maximization] At what score threshold should I pivot from safe routes to high-risk collection areas?",
        "answer": "**Deep Player Insight**: Once your score reaches the **mid-to-high threshold (e.g., 3000+ points)**, you must switch from safe routes to high-risk collection zones. This is necessary to maximize **Charm Accumulation** and multiplier potential, as the higher rewards significantly outweigh the risks for experienced players."
      },
      {
        "value": "mid-game-resource-split",
        "question": "[Resource Allocation] What is the recommended resource split between new fashion items and companion defense upgrades in the mid-game?",
        "answer": "**Official Tip**: We recommend a **70/30 split**: Invest $\\mathbf{70\\%}$ of resources into acquiring new **Dresses/Accessories** (to boost Charm) and $\\mathbf{30\\%}$ into **Companion Defense Upgrades**. This balance ensures you maintain offensive scoring capability while retaining enough defensive power for persistent runs."
      },
      {
        "value": "diamond-risk-assessment",
        "question": "[Risk Management] When should I choose to skip Diamonds to ensure survival?",
        "answer": "**Expert Standard**: If collecting Diamonds requires you to enter an area that forces the **immediate use or depletion of your companion's protection**, it is always better to **forgo the Diamonds**. Prioritize life and the longevity of your companion's shield over small currency gains to guarantee a higher final score."
      },
      {
        "value": "advanced-sliding-trick",
        "question": "[Advanced Skills] Do any hidden sliding techniques exist, like 'quick-turn slides,' to rapidly evade traps?",
        "answer": "**Elite Secret**: Yes, top players utilize a **'Momentum Slide Turn'** (a hidden slide technique). By executing a **micro-slide** followed by an immediate **quick-swipe left/right**, you can achieve a rapid, precision turn that avoids traps while maintaining forward momentum, far superior to simple lane changes."
      },
      {
        "value": "charm-combo-multiplier",
        "question": "[Charm Optimization] Are there any outfit combination techniques that activate hidden score multipliers?",
        "answer": "**Deep Player Insight**: Absolutely. Specific combinations of **Rare Dress, Headwear, and Shoe Sets** create a **'Synergy Set'** that temporarily activates a **hidden Charm Score Multiplier** (e.g., $\\mathbf{1.5X}$ bonus). Players should research these optimal pairings to maximize scoring potential."
      },
      {
        "value": "companion-defense-timing",
        "question": "[Companion Usage] What is the defense timing window for the companion's protective ability?",
        "answer": "**Official Tip**: The companion's defensive reaction window is approximately **$\mathbf{1 \text{ second}}$**. Mastering this timing allows players to trigger the defense optimally, enabling the companion to **consecutively block multiple, linked obstacles** (e.g., a rapid series of traps), significantly boosting survival rate."
      },
      {
        "value": "beginner-common-mistakes",
        "question": "[Beginner Mistakes] What are the Top 3 typical mistakes that lead to loss of speed or failure for new players?",
        "answer": "1. **Ignoring Charm Collection**: Focusing only on diamonds and missing essential fashion items. 2. **Over-Reliance on Companion**: Assuming the companion can solve every problem, leading to poor positioning. 3. **Poor Environmental Prediction**: Failing to scan the run for upcoming complex hazards."
      },
      {
        "value": "slide-vs-swipe-utility",
        "question": "[Movement Correction] When is sliding more effective than simply swiping left/right?",
        "answer": "**Official Guide**: Sliding is the preferred movement for evading **low-lying or continuous, short-gap obstacles**. Using a timely slide is much more effective than simple lateral movement because it preserves forward momentum while creating a small window of invulnerability, especially useful for continuous hazards."
      },
      {
        "value": "vision-training-method",
        "question": "[Training Method] What is an effective training method to improve environmental prediction?",
        "answer": "**Expert Practice**: Implement **'Peripheral Sweep Training.'** Focus on consistently practicing your **visual sweep**, ensuring you catch collectible items on the **edges of the runway** while simultaneously keeping your main focus on the **next two upcoming major obstacles**. This trains effective environmental prediction."
      },
      {
        "value": "technical-lag-solutions",
        "question": "[Troubleshooting] What are the common lag/stuttering issues, and the one-click solution?",
        "answer": "**Official Solution**: Common issues are caused by high graphic demands. The solution is to **Enable 'Low Graphics Mode'** in settings, **update your browser to the latest version**, and **close all unnecessary background programs** to free up system resources."
      },
      {
        "value": "progress-sync-issues",
        "question": "[Technical Fix] What are the main reasons for unsynced progress, and how to fix it?",
        "answer": "**Official Tip**: The primary causes for unsynced progress are **unstable network connection** or **corrupted browser cache**. Users should **check their network stability** and **relaunch the game**. If the issue persists, clear the browser's cache and cookies to force a fresh data sync."
      },
      {
        "value": "input-sensitivity-fix",
        "question": "[Control Fix] What causes unresponsive sliding/swiping, and what are the best settings for responsiveness?",
        "answer": "**Optimization Tip**: Unresponsive sliding/swiping is usually due to **improper sensitivity settings**. Users should access the control options and **adjust the 'Swipe/Slide Control Sensitivity'** based on their specific device (Mobile vs. PC trackpad/mouse) until the movement response feels instant and precise."
      }
    ]
  }
  
};
