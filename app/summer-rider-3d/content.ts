import { content as globalContent } from "@/config/content";

export const brainrotClickerContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Summer Rider 3D",
    game: {
      url: 'https://html5.gamedistribution.com/3ff5df9f5d0248fd9dcd70e2cc253de5/?gd_sdk_referrer_url=https://gamedistribution.com/games/summer-rider-3d/', // 嵌入链接，后续可能需要调整
      title: "summer-rider-3d",
      externalUrl: '/game/summer-rider-3d/index.html'
    }
  },

  // 特性部分配置
  "features": {
    "title": "Summer Rider 3D: Online Game Features & Core Mechanics",
    "items": [
      {
        "title": "Precision Jump Scoring System (5-Star Rating)",
        "description": "Master the **5-Star Reward Jump**: The success window is a precise **150ms**. A perfect landing grants a **3X Score Multiplier** and a **5-second Speed Boost (15% base speed increase)**. This high-risk/high-reward system is the key to elite scores."
      },
      {
        "title": "Strategic Vehicle Duality: Jet-Ski vs. Surfboard",
        "description": "Choose your strategy: **Surfboards** offer superior **Air Control** and tighter **Cornering (Traction +20%)**. **Jet-Skis** (Watercraft) offer unmatched **Top Speed (Base Speed +15%)** and a **50% reduced penalty** on obstacle collisions, trading agility for raw power."
      },
      {
        "title": "Physics-Defying Water Obstacle Course",
        "description": "Navigate dynamic water currents, hidden whirlpools, and our signature **Risk Rock Jump Mechanism**. The unpredictable environment demands constant adaptation and precision steering, making no two runs the same."
      },
      {
        "title": "Head-to-Head '2 Player' Competitive Mode",
        "description": "Engage in true skill-based racing. **All permanent upgrades are temporarily disabled** in 2P mode to ensure fair competition. The core fun is mastering the track's physics and exploiting momentum to beat your rival by a fraction of a second."
      },
      {
        "title": "Deep Customization & Upgrade Path",
        "description": "Unlock **12 unique vehicles** (10 Surfboards, 2 Jet-Skis) and invest resources into permanent attributes like **Air Control** and **Jump Recovery Rate**. No aesthetic item affects physics, ensuring competition remains skill-based."
      },
      {
        "title": "High-Speed Aquatic Momentum Flow",
        "description": "Experience true 3D momentum. Consistently maintain high speed through sharp turns and jumps to activate **Momentum Chains**. Losing speed drastically reduces your score potential and increases the difficulty of subsequent maneuvers."
      },
      {
        "title": "Instant-Play, Unblocked Water Racing",
        "description": "Launch Summer Rider 3D directly in your browser with zero downloads. Enjoy seamless, action-packed aquatic racing anytime, anywhere, on any modern device."
      }
    ]
  }
  ,
  
  whatIs: {
    "title": "Summer Rider 3D: The Ultimate Aquatic Speedrunning & Obstacle Masterpiece!",
    "description": "Tired of repetitive platformers? Dive into Summer Rider 3D and **Dominate the waves with physics-defying precision and pure speed.** \n\n" +
      "Beyond simple water racing, Summer Rider 3D elevates the endless runner genre into a true test of skill and strategy. \n\n" +
      "💥 Click **Play Game** now and begin your high-speed summer adventure!\n\n"+ 

      "**Why Summer Rider 3D Surpasses Traditional Endless Runners?**\n\n" +
      "**1. High-Risk, High-Reward Obstacle System:** Our signature **Risk Rock Jump Mechanism** demands precise timing and air control, offering a **3X Score Multiplier Bonus** for a perfect execution. This instantly renders the single-lane, simple obstacle dodging of competitors (like Temple Run or Subway Surfers) obsolete, transforming the game from simple avoidance into aggressive physics manipulation.\n\n" +
      "**2. Strategic Vehicle Depth:** With a diverse arsenal of **10 Surfboards** and **2 high-tier Jet-Skis**, our vehicle system offers genuine strategic choice. Surfboards grant superior **Air Control and Jump Recovery**, while Jet-Skis provide unmatched **Top Speed and Collision Absorption**. This allows players to select a vehicle that perfectly matches their personal speedrunning strategy, adding a crucial layer of long-term mastery that competitors lack. \n\n" +
      "**3. Core Inducement (The Hook):** Experience the true limit of aquatic velocity and master the precision needed to survive it. \n\n" +
      "Here, survival demands strategy, and victory demands perfection.",
    
    "logo": {
      "src": "/assets/summer-rider-3d/summer-rider-3d-logo.jpeg",
      "alt": "Summer Rider 3D Free Online Unblocked Game Logo"
    }
  }
  ,
  
  howToPlay: {
    title: "How to Play Summer Rider 3D Online Free: Master the Surfing Challenge!",
    description: "Playing Summer Rider 3D is easy and exciting! Use the keyboard (WASD or arrow keys) to control your surfboard or jet ski in the thrilling tropical waters. In single-player mode, move left, right, and jump to avoid obstacles like rocks, fallen pillars, and strong currents. In two-player mode, Player 1 uses WASD and Player 2 uses the arrow keys.\n\n" +
      "Jump over small obstacles and gaps while maintaining a smooth glide across the water. Collect starfish along the way to earn points and unlock new gear, including vibrant surfboards and jet skis. The game’s speed increases over time, so stay alert and keep your reflexes sharp!\n\n" +
      "Use jumping and sharp turns to avoid traps and obstacles that come your way. On mobile devices, control your actions with on-screen buttons for a seamless surfing experience.\n\n" +
      "Each game resets, testing your ability to maintain quick reactions and steady focus as you chase a high score in this endless surfing adventure!",
    image: "/assets/summer-rider-3d/summer-rider-3d.jpeg",
    imageAlt: "Summer Rider 3D Gameplay Guide - Free Unblocked Surfing Controls & Strategy"
  },
  
  
  "faq": {
    "title": "Summer Rider 3D: Elite Strategy Guide & Frequently Asked Questions (FAQ)",
    "items": [
      {
        "value": "long-term-vehicle-path",
        "question": "[Long-Term Strategy] What is the Best Vehicle Path to Maximize Score and Leaderboard Rank?",
        "answer": "**Official Strategy**: The optimal path is to unlock the **first 5 Surfboards** for mastery of Air Control, then immediately pivot to acquiring the **Tier-1 Jet-Ski**. The Jet-Ski's base speed and collision buffer are essential for the high-score ranges (3000+ meters), where raw speed and survivability outweigh complex trick mechanics. **Jet-Skis are the ultimate key to top rankings.**"
      },
      {
        "value": "speed-curve-practice-segment",
        "question": "[Time Optimization] At what distance does the game's speed curve exhibit a significant exponential jump, and which segment requires focused practice?",
        "answer": "**Deep Player Insight**: The speed curve becomes **exponentially aggressive between the 1500-meter and 2500-meter segments**. Players must dedicate practice to this range, as marginal errors become catastrophic. This is where **Momentum Chain maintenance** is the only way to survive and thrive."
      },
      {
        "value": "mid-game-resource-allocation",
        "question":"[Resource Allocation] Should I prioritize diverse Surfboard variety or the fastest Jet-Ski in the mid-game? Which is more competitive?",
        "answer": "**Official Tip**: Prioritize **acquiring the fastest available Jet-Ski** (Tier-1). While diverse Surfboards offer fun, the Jet-Ski’s superior **Top Speed** and **Collision Absorption** provide a distinct competitive advantage for achieving new personal bests and climbing the leaderboard swiftly in the high-speed mid-game."
      },
      {
        "value": "risk-reward-jump-standard",
        "question":"[Risk Management] How to judge if a Risk Rock Jump is worth attempting for the 5-Star reward versus safely navigating around it? (Provide a speed/distance standard)",
        "answer": "**Expert Standard**: **Attempt the 5-Star Jump only if your current speed is above 90% of your maximum potential speed (Jet-Ski recommended).** If your speed is below 80%, the necessary distance and air time for a perfect landing are unachievable, making safe navigation the only viable option. Always prioritize speed chain over risk."
      },
      {
        "value": "advanced-water-tricks",
        "question": "[Advanced Tricks] Are there hidden water surface operations, like 'Perfect Landing' or 'Side Clipping,' that significantly boost speed or score Buffs?",
        "answer": "**Elite Secret**: Yes, the **'Perfect Water Entry'** technique. After a jump, ensure your vehicle touches the water at a **flat 0-degree angle** to trigger a **Micro-Acceleration Burst** (a brief speed buff). Additionally, **'Side-Clipping'** a non-lethal buoy just before a jump can reset momentum decay, granting slightly longer jump distance."
      },
      {
        "value": "delayed-jump-timing",
        "question": "[Jump Mechanics] Is there a 'delayed jump timing' technique to improve jump accuracy during high-speed maneuvering?",
        "answer": "**Deep Player Insight**: Focus on **'Pre-emptive Input.'** During high speed, the actual moment you see the obstacle is often too late. Instead, calculate the jump based on the **distance of the rock/ramp** when it is **1.5 vehicle lengths away**, inputting the jump slightly *before* your eyes register the need. This compensates for input lag and speed."
      },
      {
        "value": "minimal-movement-dodging",
        "question": "[High-Speed Control] How to utilize minimal left/right micro-movements to dodge obstacles while maximizing speed retention?",
        "answer": "**Official Guide**: Only use the **slightest steering taps** to dodge the center mass of an obstacle. **Avoid holding the steering button.** Holding the button causes the vehicle to enter a high-friction turn, bleeding speed. Micro-taps allow you to stay in the **high-speed straight-line momentum state** while narrowly avoiding collision."
      },
      {
        "value": "beginner-speed-loss-errors",
        "question": "[Beginner Mistakes] What are the Top 3 common mistakes that lead to speed loss or game failure for new players?",
        "answer": "1. **Over-Steering**: Holding the left/right steer too long, which drastically reduces momentum. 2. **Mistimed Jumps**: Jumping too early (missing the ramp's apex) or too late (hitting the rock). 3. **Ignoring the Momentum Chain**: Failing to maintain speed through turns, thus missing the opportunity to use speed-gained Buffs."
      },
      {
        "value": "beginner-risk-timing",
        "question": "[New Player Progression] How should new players determine when to stop safe coasting and begin actively attempting high-risk 5-Star Jumps?",
        "answer": "**Recommended Threshold**: New players should only begin practicing 5-Star Jumps **after consistently reaching the 1000-meter mark** with a stable speed. This ensures they have sufficient experience with the base physics before introducing the high-risk, high-reward mechanics."
      },
      {
        "value": "jet-ski-stability-training",
        "question": "[Training Method] What are effective training methods to help beginners maintain stable control while driving the faster Jet-Ski?",
        "answer": "**Expert Practice**: Practice the **'Vision Lead'** technique: **Focus your eyes on the platform 3 seconds ahead of your vehicle.** This forces your hands to react to *future* obstacles, not *current* obstacles, significantly improving stability and control during high-speed Jet-Ski runs."
      },
      {
        "value": "technical-lag-solutions",
        "question": "[Troubleshooting] What are the most common lag/delay issues, and the one-click solution for fast-paced controls?",
        "answer": "**Official Solution**: The most common issue is **Input Throttling** due to high-fidelity water effects. The one-click fix is to **Enable 'Low Graphics Mode'** (or disable 'Motion Blur') in the settings. This forces higher FPS, which directly translates to reduced input delay and more responsive controls."
      },
      {
        "value": "leaderboard-sync-issues",
        "question": "[Technical Fix] What are the common leaderboard score upload issues? How should players check their network status and synchronization process?",
        "answer": "**Official Guide**: Common issues stem from sudden network drops. Always **refresh the game page** after a failed upload attempt. To check the status: verify your internet speed is **above 5Mbps**, and ensure the in-game 'Sync Icon' appears green before closing the browser."
      },
      {
        "value": "input-sensitivity-fix",
        "question": "[Control Fix] What are the common issues with unresponsive jump operations on mobile and PC? What are the suggested optimization settings?",
        "answer": "**Optimization Tip**: On PC, check your **Key Mapping Delay** settings to ensure your jump key triggers instantly. On Mobile, ensure your **Finger Tracking Sensitivity** is set to **'High'** to prevent micro-delays in touch input. In both cases, ensure your input device is fully charged (or wired) for best responsiveness."
      }
    ]
  }
  
};
