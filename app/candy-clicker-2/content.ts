import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Ultimate Candy Clicker 2 Strategy Guide: Maximize Clicking Power, Unlock Permanent Buffs, & Boost Your Candy Production",
    game: {
      url:"https://candyclicker.io/2.embed",
      title: "Ultimate Candy Clicker 2 Strategy Guide: Maximize Clicking Power, Unlock Permanent Buffs, & Boost Your Candy Production",
      externalUrl: '/game/candy-clicker-2/index.html'
    }
  },

  // 特性部分配置
  "features": {
    "title": "Candy Clicker 2: Core Mechanics of Growth and Permanent Progression",
    "items": [
      {
        "title": "Core Growth: Automation Investment Thresholds",
        "description": "The upgrade curves for automated candy generation equipment and manual click enhancements possess a crucial **investment threshold** in the mid-to-late game. Players must accurately pinpoint the moment to transition from manual focus to **full automation** to achieve maximal efficiency."
      },
      {
        "title": "Permanent Boost System for Exponential Jumps",
        "description": "Purchasable permanent boosts cover both **base production value** and **multiplier effects**. Base production offers stable output, while multipliers provide **exponential acceleration**, ensuring massive developmental leaps across game stages and resets."
      },
      {
        "title": "Incentive Conversion and Long-Term Retention",
        "description": "Custom skins are primarily obtained by viewing advertisements. The system is designed to **balance the number of ad views with the rarity of the skin**, effectively incentivizing active player participation and promoting long-term game retention."
      }
    ]
  },
  
  "whatIs": {
    "title": "Candy Clicker 2 — Explosive Growth of a Candy Empire",
    "description": "Experience infinite candy production and become the coolest candy tycoon!\n\n**Candy Clicker 2** lets you enjoy exponential growth through both manual clicking and automated idling, forging your own sweet empire.\n\n Click \"**Play Game**\" now to start your journey of delicious wonders!\n\n**Competitive Advantage Analysis:**\n\n**1. Powerful Cross-Session Growth with Permanent Upgrades**\n\nOur **Permanent Boost Upgrade System** differentiates us from other games' temporary bonuses, providing powerful **cross-session growth momentum**. This ensures every reset feels rewarding and fuels long-term player progression.\n\n**2. Customization for Enhanced Collection**\n\nThe inclusion of a **personalized custom skin system** enhances the fun of collection and visual individuality. This system offers satisfaction beyond traditional, purely numerical growth gameplay.",
 
      logo: {
      // Image path unchanged
      src: "/assets/candy-clicker-2/candy-clicker-2-logo.jpeg",
      // Alt text updated for the new game concept and keywords
      "alt": "Candy Clicker 2 Free Online Unblocked Incremental Idle Game Logo"
    }
  },

  
  howToPlay: {
    // Title reflecting the drifting gameplay
    title: "How to Play Drift Hunters Online Free: Master the Art of Drifting!",
    // Description focused on drifting mechanics
    description: "Playing Drift Hunters online is all about mastering the art of drifting! Use your keyboard (arrow keys or WASD) to steer, accelerate, and brake your car. Press the spacebar to use the handbrake and initiate thrilling drifts.\n\n" +
      "To take your drifting to the next level, shift gears manually using the left Shift and left Ctrl keys. Perfect the balance between throttle and steering to maintain long drift combos and earn more points. Switch between different camera angles with the C key for the best view of your car’s performance.\n\n" +
      "Upgrade your car’s tuning to improve drifting performance and handle more challenging tracks. Practice on various tracks to refine your skills and master the art of drifting in Drift Hunters. With persistence and practice, you'll become a drift king in no time!",
    // Image path unchanged - I am keeping the placeholder you had. If you have a more relevant image for a drifting game, you'd update this path.
    image: "/assets/drift-hunters/drift-hunters.jpg",
    // Alt text updated
    imageAlt: "Drift Hunters Online Game Guide - Free Drifting Controls & Tips"
  },

    "faq": {
      "title": "Candy Clicker 2: Ultimate Strategy & Frequently Asked Questions (FAQ)",
      "items": [
        {
          "value": "long-term-strategy-efficiency",
          "question": "[Long-Term Strategy] What is the best long-term strategy to maximize candy production and level efficiency?",
          "answer": "**Expert Strategy**: Prioritize investing in **Permanent Boosts** first, as they provide cumulative, lasting power across resets. Supplement this by consistently upgrading your **Automated Production Equipment**."
        },
        {
          "value": "early-game-clicking-strategy",
          "question": "[Pacing] In the early stages of a new level, when resources are abundant, is it beneficial to increase click strength?",
          "answer": "**Pacing Tip**: Yes. At the start of a new level, a temporary boost to **click strength** is highly effective for quickly accumulating the initial capital needed to buy the **first few automated production buildings**."
        },
        {
          "value": "resource-allocation-midgame",
          "question": "[Resource Allocation] In the mid-game, should priority be given to high-tier equipment for stability or unlocking new low-tier production lines?",
          "answer": "**Mid-Game Rule**: Prioritize upgrading **high-tier equipment** to increase production stability and base output. Simultaneously, invest strategically in **new low-tier equipment** only to broaden the production base and unlock future multipliers."
        },
        {
          "value": "permanent-boost-priority",
          "question": "[Permanent Boosts] Which permanent boosts should be prioritized for maximum future returns?",
          "answer": "**Priority Investment**: Prioritize permanent boosts that introduce **Global Multiplier Effects**. These increase the output of *all* current and future production lines exponentially, providing the most significant return on investment over the long term."
        },
        {
          "value": "advanced-purchase-loop",
          "question": "[Advanced Techniques] Do top players utilize specific purchase sequences to create revenue burst cycles?",
          "answer": "**Elite Skill**: Yes. Top players master a **'Purchase and Activate Loop,'** where they precisely time the purchase of a major multiplier upgrade to coincide with a large accumulated candy reserve, resulting in a sudden, massive surge in production (a burst cycle)."
        },
        {
          "value": "click-automation-balance",
          "question": "[Efficiency Balance] How to maintain the optimal balance ratio between manual clicking and automatic production for peak efficiency?",
          "answer": "**Optimal Balance**: The highest efficiency is achieved when **automated production (CPS) is the main source of income**, and **manual clicking (CPC)** is used only as a short burst to immediately fund the next high-cost automated upgrade. Aim for $\\mathbf{95\\%}$ CPS and $\\mathbf{5\\%}$ CPC."
        },
        {
          "value": "hidden-achievements-leveling",
          "question": "[Progression] Besides accumulating candy, do any hidden achievements trigger level progression?",
          "answer": "**Game Mechanic**: Yes. In addition to accumulating pure output, certain **hidden achievements** related to buying a large quantity of specific equipment or performing a certain number of manual clicks may subtly influence or trigger **level-up rewards** or bonuses."
        },
        {
          "value": "newbie-common-errors",
          "question": "[Newbie Pain Points] What common mistakes lead to resource mismanagement or slow growth?",
          "answer": "Common mistakes include **excessive manual clicking** in the mid-game, **poor early-game investment** in low-return upgrades, and **ignoring the development of automation**."
        },
        {
          "value": "upgrade-planning-avoidance",
          "question": "[Planning] How should players plan their resource purchases to avoid production coming to a halt due to overspending?",
          "answer": "**Planning Tip**: Always ensure you maintain an **Energy Buffer**. Before any large purchase, verify that your current **CPS will recover the cost within a reasonable time frame** (e.g., 5-10 minutes). Never zero out your funds for a single upgrade."
        },
        {
          "value": "cosmetic-upgrade-balance",
          "question": "[Investment Balance] How to find a reasonable balance between purchasing new skins and upgrading essential equipment?",
          "answer": "**Balance Rule**: Treat **skin purchases** as rewards for reaching significant **production milestones** (e.g., hitting a million CPS). Always prioritize investing in **essential equipment** that provides permanent, numerical growth first, as this funds all future purchases, including cosmetics."
        },
        {
          "value": "technical-lag-solutions",
          "question": "[Technical Troubleshooting] What causes common lag and efficiency degradation, and what is the fix?",
          "answer": "**Official Solution**: Lag is often caused by the game processing the output of **numerous auto-clicker units**. The quick fix is to **close all background applications** and **restart the game** to clear memory and improve processor efficiency."
        },
        {
          "value": "reward-sync-issue",
          "question": "[Data Integrity] What should players do if ad rewards are not received or progress is lost?",
          "answer": "**Sync Check**: If an ad reward is not received or progress is lost, **refresh the game page** and immediately **check your network connection**. If the issue persists, ensure you are using the official game site or app."
        },
        {
          "value": "ui-decision-aid",
          "question": "[UI/UX] How should the UI clearly display the manual vs. automated production percentage to aid player decision-making?",
          "answer": "**Optimal UI**: The UI should prominently feature a **'Production Breakdown'** panel showing the **Percentage of Total Output contributed by Clicks (CPC)** versus the **Percentage contributed by Automation (CPS)**. This immediately tells the player where to focus their next investment."
        }
      ]
    }
};


