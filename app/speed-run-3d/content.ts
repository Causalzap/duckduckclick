import { content as globalContent } from "@/config/content";

export const cheeseChompersContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Speed Run 3d",
    game: {
      url: 'https://html5.gamedistribution.com/68c91de8354345d38c54aa8f81e13393/?gd_sdk_referrer_url=https://gamedistribution.com/games/speed-run-3d/',
      title: "Speed Run 3d",
      externalUrl: '/game/speed-run-3d/index.html'
    }
  },

  // 特性部分配置

  features: {
    "title": "Core Features of Speed Run 3D: Precision, Challenges, and Ultimate Racing",
    "items": [
      {
        "title": "Core Mechanic of Extreme Precision: Airborne Steering Accuracy",
        "description": "Master the art of airborne steering and distance judgment, where every jump demands pinpoint precision. High-difficulty challenges push your skill limits, with rewards coming in the form of incredibly fast completion times. Achieving perfect control will unlock the thrill of shaving seconds off your race!"
      },
      {
        "title": "Level Unlocks & Progressive Achievement Experience",
        "description": "Speed Run 3D introduces a ‘score X unlock’ system, ensuring players feel a steady sense of accomplishment. The advanced CELESTIAL/QUANTUM levels combine intricate physics and multi-jump challenges, pushing precision limits and offering a substantial difficulty leap compared to basic levels. Prepare for a rewarding experience as you advance through progressively challenging stages."
      },
      {
        "title": "Diverse Maps & Differentiated Physical Challenges",
        "description": "The FRENZY theme focuses on speed and continuous jumps, while the VORTEX theme emphasizes sharp turns and rhythm control. These diverse physical challenges guarantee fresh and exciting gameplay with each session, ensuring a high replay value."
      }
    ]
  } ,
  
  
  whatIs: {
    "title": "What Exactly is Speed Run 3D: The Ultimate 3D Platform Racing Game?",
    "description": "Speed Run 3D is a high-speed, precision platform racing game where you race through extreme 3D obstacle courses and skillful shortcuts. \n\nThe goal is to shatter global records and experience an unparalleled rush of racing precision!\n\n" +
      "Join Speed Run 3D now and challenge yourself with the most extreme 3D obstacle racing and tricky shortcuts ever. Master precise controls, push the time limits, and race your way to the top of the leaderboard! Click '**Play Game**' to start your thrilling, high-speed adventure today!\n\n" +
      "**What makes Speed Run 3D stand out from other mainstream 3D platform racing games?**\n\n" +
      "Speed Run 3D uses an ultra-precise physics engine, allowing players to feel the subtle nuances of hovering, inertia, and dash turning, achieving industry-leading control accuracy and skill limits. The game features a unique high-risk shortcut mechanic, enabling players to skip up to 50% of the standard course with high-difficulty maneuvers. This drastically shortens completion times, giving players an exponential speed advantage far beyond traditional platform racing games.\n\n" +
      "Speed Run 3D is a browser-based, free-to-play game – no downloads required! Jump into the action and race for the ultimate thrill. Play unblocked anytime and enjoy the fast-paced racing experience.",
    "logo": {
      "src": "/assets/speed-run-3d/speed-run-3d-logo.jpg",
      "alt": "Speed Run 3D - Free Online 3D Platform Racing Game Logo"
    }
  }
  ,
  
  howToPlay: {
    title: "How to Play Speed Run 3D Online Free: Master the Neon Tunnel Challenge!",
    description: "Speed Run 3D is all about quick reflexes and rapid decision-making in this thrilling free game! Use your keyboard's arrow keys or your mouse to control your character's movement through the neon-colored tunnels. The goal? Dodge obstacles at top speed and navigate the path with precision.\n\n" +
      "Watch ahead to predict the upcoming path and obstacles. React quickly to change direction and avoid crashing into walls and barriers. Speed increases as you progress, testing your reflexes and ability to keep up with the pace.\n\n" +
      "Unlike other games, Speed Run 3D doesn't have jumping. Instead, focus on your ability to read the path and move at the right moment to avoid collisions. Each run starts fresh, offering a challenge to your quick reaction time and ability to stay alert throughout the entire run.",
    image: "/assets/speed-run-3d/speed-run-3d.jpeg",
    imageAlt: "Speed Run 3D Gameplay Guide - Neon Tunnel Racing with Quick Reflexes"
  },


  faq: {
    "title": "Elite Speedrunning Tactics & Precision Platforming FAQ",
    "items": [
      {
        "value": "Long-Term Strategy",
        "question": "What is the Best Permanent Attribute Investment Path for Maximum Speed?",
        "answer": "**Deep Player Insight**: Focus on the attributes that directly reduce air time and improve recovery. Prioritize increasing **Air Control Force (ACF)** first, as it allows for mid-air course correction and setting up complex angles. Secondly, invest in **Sprint Recovery Rate (SRR)** to minimize the cooldown between sprints. Pure speed (e.g., base sprint speed) is less critical than high-precision control."
      },
      {
        "value": "Threshold Mastery",
        "question": "At what difficulty threshold must players abandon safe routes for high-risk shortcuts?",
        "answer": "**Official Strategy**: The pivot point is typically after mastering the **Level 5 or 6 time target**. Before this, safe platforms are efficient. To achieve Top 1% times, players must **fully commit to pathfinding** that requires exploiting corner boosts, triple-jumping off minimal ledges, and using **known wall-climb spots** that bypass $50\%$ of the stage."
      },
      {
        "value": "Training Value",
        "question": "What is the true value of 'Ghost Replay' or 'Practice Mode' for long-term improvement?",
        "answer": "**Expert Insight**: These tools are invaluable for **Rhythm Timing**. Use Ghost Replay not just to see the route, but to *hear* the exact rhythm of jumps and sprints. Practice Mode should be used for **single-section grinding** to build muscle memory for the most complex 1-second maneuvers, separating them from the pressure of a full run."
      },
      {
        "value": "Economic Balance",
        "question": "What is the most cost-effective upgrade strategy between 'Air Jumps' and 'Base Sprint Speed'?",
        "answer": "**Official Tip**: Upgrade **Air Jump Capacity** only until you reach the **second jump** ($+1$ jump). Then, invest fully in **Base Sprint Speed** until the next major jump threshold. Maximum air jumps are rarely necessary, but sustained ground speed is the core time-saver. This ratio offers the greatest Time-to-Cost advantage."
      },
      {
        "value": "Training Efficiency",
        "question": "Should I prioritize general 'Precision Skills' or 'Single Level Shortcuts' first?",
        "answer": "**Deep Player Insight**: **General Precision** first. Master the **Universal Precise Operations** (e.g., jump-dash-jump combo) until they are automatic. Once that foundation is solid, then dedicate time to learning and executing **Level-Specific Hidden Shortcuts**. Shortcuts are useless without fundamental precision."
      },
      {
        "value": "Cosmetic Physics",
        "question": "Do cosmetic items (skins/props) offer any subtle advantage (e.g., smaller hitbox)?",
        "answer": "**Official Guide**: **No.** All character models and cosmetic items are strictly **aesthetic**. The core hitbox and physics parameters (acceleration, top speed, turning radius) are uniform across all cosmetic choices to ensure fair competitive integrity."
      },
      {
        "value": "Inertia Trick",
        "question": "What operation on the platform edge preserves the maximum forward momentum?",
        "answer": "**Elite Secret**: The technique is called **'Edge Clipping.'** Sprint toward the edge, initiate a **micro-crouch (tap)** just before leaving the platform, and immediately perform a **boost-jump**. This brief crouch resets the game's internal momentum decay, providing a fractional, yet critical, speed boost into the jump. Requires millisecond timing."
      },
      {
        "value": "Advanced Physics",
        "question": "Is there a technique to 'store' or 'card-clip' momentum for maximum jump distance?",
        "answer": "**Deep Player Insight**: Yes, exploit the **'Wall-Stall Boost.'** By briefly brushing (stalling) against a non-lethal vertical wall surface just before an uphill jump, you can transfer vertical momentum into horizontal speed, effectively increasing the reach of your final leap. This is a high-risk, frame-perfect technique."
      },
      {
        "value": "Run Management",
        "question": "What is the Optimal 'Quick Reset' timing after a mistake, and when is a run worth salvaging?",
        "answer": "**Official Strategy**: The ideal **'Quick Reset'** threshold is **$\mathbf{0.7 \text{ seconds}}$** of lost time after a mistake. If the mistake costs you more than $0.7$ seconds (e.g., missed a platform and falling), immediately hit the Reset button. Salvaging a run is only worthwhile if the error cost is under $\mathbf{0.3 \text{ seconds}}$, or if you have a perfect run up to that point."
      },
      {
        "value": "Beginner Mistake",
        "question": "What are the Top 3 Mistakes New Players Make and How to Stop Wasting Time?",
        "answer": "1. **Over-Jumping on Flat Ground**: **Official Tip**: New players jump too much. On flat platforms, **pure sprinting** is always faster. Jump only when necessary to clear a gap. 2. **Not Using Air Control**: **Deep Player Insight**: Failing to use **mid-air steering** (Air Control) after a jump to adjust for distance. This leads to missing platforms and wasting time on poor landings. 3. **Focusing on Character, Not the Horizon**: **Official Guide**: Practice shifting your vision to the **third platform ahead** (Horizon Prediction) instead of the immediate environment. This allows for pre-emptive turns and speed maintenance."
      },
      {
        "value": "Error Correction",
        "question": "How can a new player decide whether to 'Quick Reset' vs. 'Salvage' a failed jump?",
        "answer": "**Simple Rule of Thumb**: If your character has **stopped moving forward** (i.e., stalled or started falling), **always Quick Reset**. If you are still moving but merely took a sub-optimal route, attempt to salvage it. The core rule is: **Momentum loss is irreparable time loss.**"
      },
      {
        "value": "Vision Training",
        "question": "How to effectively train yourself to see the 'far horizon' instead of just the immediate platform?",
        "answer": "**Expert Practice Method**: Dedicate $15$ minutes of practice to **'No-Look Running.'** Blindfold or cover the screen just around your character, forcing your eyes to focus only on the **top third** of the screen. This trains the brain for **long-range visual prediction**, which is essential for high-speed runs."
      },
      {
        "value": "Troubleshooting",
        "question": "What are the most common lag or input delay issues, and the one-click solution?",
        "answer": "**Official Solution**: The most common issue is **Input Throttling**. The one-click fix is to **Enable 'Low Graphics Mode'** (or disable motion blur/V-Sync) in the settings, and ensure your browser **Hardware Acceleration** is ON. Forcing a higher frame rate (FPS) directly reduces input delay."
      },
      {
        "value": "Integrity Check",
        "question": "How to quickly check and fix leaderboard synchronization or recording integrity issues?",
        "answer": "**Official Tip**: Ensure a stable, **wired** internet connection if possible. If a score fails to sync, take a **full-screen screenshot (with in-game timer visible)** immediately. Then, **refresh the page and attempt the run again** to force a server synchronization of your profile data."
      },
      {
        "value": "Controller Fixes",
        "question": "What are the 3 most common controller/key mapping pain points?",
        "answer": "1. **Inconsistent Air Steering**: **Fix**: Increase **Mouse/Controller Sensitivity** by small increments to achieve the necessary speed for mid-air corrections. 2. **Delayed Sprint Trigger**: **Fix**: Ensure your **Sprint Key (often Shift)** is remapped to a **single, easy-to-press key** (e.g., Ctrl or a side button) with minimal travel. 3. **Jump Height Inconsistency**: **Fix**: Adjust the **Long-Press Duration** setting in the options to ensure all your double-jumps reach maximum height reliably."
      }
    ]
  }

  
};

