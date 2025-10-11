import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Bubble Woods",
    game: {
      url: "https://www.bubbleshooter.net/embed.php?id=35",
      title: "Bubble Woods",
      externalUrl: '/game/bubble-woods/index.html'
    }
  },

  // 特性部分配置
  "features": {
    "title": "Bubble Woods: Core Mechanics of Blasting, Combo Strategy, and Progression",
    "items": [
      {
        "title": "Core Mechanism: The 10-Hit Fireball Combo",
        "description": "The **'10-Bubble Combo'** is defined as 10 consecutive, successful matches that eliminate bubbles, triggering the **Fireball release**. The Fireball boasts massive area-clearing power and significantly **increases the score multiplier**, crucial for achieving high-score bursts."
      },
      {
        "title": "Progression and Strategic Boosts",
        "description": "Levels are advanced by accumulating scores and completing rounds, unlocking **permanent new abilities** and diverse **round-based boosts** (e.g., stronger Fireballs, enhanced bank-shot precision). These incentives greatly enrich gameplay strategy and customization."
      },
      {
        "title": "High Score Challenge: Clearing vs. Combo Balance",
        "description": "Strategically, the key to a high score is balancing two objectives: prioritizing the clearing of **top bubbles** to cascade massive drops, and simultaneously building the **combo streak** to trigger the powerful Fireball. Mastering this balance is essential for score maximization."
      }
    ]
  },
  
  "whatIs": {
    "title": "Bubble Woods — The Extreme 60-Second Bubble Shooter Challenge",
    "description": "Unleash the ultimate Fireball and enjoy the thrill of chain explosions in a tense 60-second countdown!\n\n**Bubble Woods** combines fast-paced reaction with deep strategy, designed for both casual players and high-score challengers. Click \"**Play Game**\" now to experience exhilarating blasting and strategic fun!\n\n**Competitive Advantage Analysis:**\n\n**1. High-Tension 60-Second Time Limit**\n\nOur **'60-Second Time Limit'** mechanism, compared to traditional unrestricted bubble shooters, creates an immediate atmosphere of high tension, significantly boosting **replay value and the sense of challenge**.\n\n**2. Ultimate '10-Hit Fireball' Reward**\n\nThe **'10-Hit Fireball Reward'** offers a devastating visual effect and massive clear capacity, surpassing the simple satisfaction of basic power-ups. It delivers the **ultimate experience of satisfying chain combos**.",
  
      logo: {
      // Image path unchanged
      src: "/assets/bubble-woods/bubble-woods-logo.jpg",
      // Alt text updated for the new game concept and keywords
      "alt": "Bubble Woods Free Online Unblocked 60-Second Bubble Shooter Game Logo"
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
      "title": "Bubble Woods: Ultimate Strategy & Frequently Asked Questions (FAQ)",
      "items": [
        {
          "value": "long-term-strategy-efficiency",
          "question": "[Long-Term Strategy] To maximize stars and combo counts, should I prioritize investing in time extension or Fireball efficiency?",
          "answer": "**Expert Strategy**: Prioritize upgrades that **increase game time** first, as more time allows for more scoring opportunities. Then, focus on boosting **Fireball efficiency** (power/multiplier) to ensure those opportunities translate into massive score bursts."
        },
        {
          "value": "risky-shot-reward",
          "question": "[Risk/Reward] Should I take risky shots through small gaps to clear critical top bubbles?",
          "answer": "**Risk Assessment**: Yes. **High-risk gap shots** that successfully clear critical top bubbles can often **massively improve the overall score and combo potential** by triggering a large cascade of falling bubbles. This risk is often justified for high-score runs."
        },
        {
          "value": "resource-allocation-midgame",
          "question": "[Resource Allocation] In the mid-game, should I prioritize increasing Fireball power for scores or improving shooting accuracy to reduce misses?",
          "answer": "**Mid-Game Rule**: Prioritize increasing **Fireball power** first to boost the score multiplier potential. Once power is adequate, balance this by investing in **shooting accuracy boosts** to minimize costly misses during the critical 60-second window."
        },
        {
          "value": "pacing-efficiency",
          "question": "[Pacing] Within the 60-second limit, how quickly should I plan my shots, and how can I avoid wasting time on ineffective matches?",
          "answer": "**Time Management**: You must **plan the shooting path rapidly and continuously**. Avoid wasting time on simple 3-bubble matches that don't lead to a combo or a cluster drop. Focus every shot on **creating cascade drops or building the 10-hit Fireball combo streak**."
        },
        {
          "value": "advanced-bank-shots",
          "question": "[Advanced Techniques] Do top players master 'Bank Shots' to clear hidden or blocked bubbles?",
          "answer": "**Elite Skill**: Yes. Mastering **'Bank Shots'** (utilizing the walls for precise rebounds) is crucial. This technique allows players to clear bubbles that are obscured by other colors and effectively initiate chain reactions or Fireball combos from complex angles."
        },
        {
          "value": "color-randomness-control",
          "question": "[Color Mechanics] Does continuously clearing one color temporarily reduce its appearance frequency?",
          "answer": "**Color Dynamics**: While bubble color generation has an inherent randomness, continuously and aggressively clearing a specific color can **temporarily reduce its immediate appearance frequency** in the queue, allowing players to briefly influence the available color pool."
        },
        {
          "value": "fireball-special-ability",
          "question": "[Power-Up Mastery] Does the Fireball have the ability to penetrate special obstacle bubbles?",
          "answer": "**Fireball Power**: Yes. The Fireball is not only a massive clearing tool but also possesses the ability to **penetrate certain special obstacle bubbles** and trigger powerful explosive effects upon contact, making it the most versatile tool in the game."
        },
        {
          "value": "newbie-common-errors",
          "question": "[Newbie Pain Points] What common errors do new players make?",
          "answer": "Common errors include **failing to properly utilize wall bank shots**, **aiming blindly without a strategic goal**, and **ignoring the severe pressure of the 60-second time limit**."
        },
        {
          "value": "target-switching-training",
          "question": "[Training Method] How can new players train rapid target switching under time pressure?",
          "answer": "**Training Tip**: Start practicing **rapid target switching** in low-difficulty rounds. Focus on quickly identifying the next highest-value target (either for a combo or a drop) immediately after shooting the first. Gradually increase the pace to adapt to time pressure."
        },
        {
          "value": "bottom-vs-top-balance",
          "question": "[Strategic Balance] Should I prioritize clearing easy bubbles at the bottom or attacking key bubbles at the top?",
          "answer": "**Balance Rule**: Balance is crucial. **Quickly clear easy bubbles at the bottom** to open up firing angles, but immediately switch focus to **attacking the critical bubbles at the top** to trigger the massive cascades that yield high scores."
        },
        {
          "value": "technical-lag-solutions",
          "question": "[Technical Troubleshooting] What are the common solutions for lag and aiming delay?",
          "answer": "**Quick Fix**: Common lag and aiming delays are often caused by browser or device load. We recommend **closing all background programs/tabs** and **updating your browser** to improve performance."
        },
        {
          "value": "fullscreen-accuracy-fix",
          "question": "[Control Optimization] Can Full-Screen mode affect aiming accuracy? How to optimize sensitivity?",
          "answer": "**Optimization Tip**: Full-Screen mode might subtly affect perceived precision. It is crucial to **adjust the mouse/touch sensitivity to an optimal, medium level** to ensure stable aiming and shooting, regardless of the screen mode."
        },
        {
          "value": "input-misjudgment-fix",
          "question": "[Input Optimization] Common misjudgment errors include misfires and accidental taps. How to optimize input?",
          "answer": "**Error Fix**: Misjudgments stem from a lack of reference. Use **multiple visual perspectives** (the launcher line, the wall edges) to confirm your aim. Optimize operation by practicing a **deliberate, clean click-and-release** motion to prevent accidental misfires."
        }
      ]
    }
};


