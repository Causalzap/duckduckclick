import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Mastering Geometry Rash: Pro Player Tips, Core Mechanics, and High Score Guide",
    game: {
      url:"https://previews.envatousercontent.com/files/223637350/index.html",
      title: "Mastering Geometry Rash: Pro Player Tips, Core Mechanics, and High Score Guide",
      externalUrl: '/game/geometry-rash/index.html'
    }
  },

  // 特性部分配置
  "features": {
    "title": "Geometry Dash: Core Mechanics of Timing, Rhythm, and Dynamic Challenge",
    "items": [
      {
        "title": "Core Difficulty: Dynamic Obstacle Precision",
        "description": "Among spikes, gaps, and moving hazards, **moving obstacles** demand the highest degree of jump timing precision. Their dynamic, non-static movement significantly **increases the difficulty of anticipation**, forcing real-time decision-making over memorization."
      },
      {
        "title": "Operational Precision: The 'Don't Click Too Fast' Principle",
        "description": "The principle of **'Don't Click Too Fast'** means players must precisely control the timing interval between clicks. This avoids sequential jumps from overlapping or failing due to poor synchronization, ensuring **stable, accurate rhythm** crucial for complex sequences."
      },
      {
        "title": "Sustained Challenge Depth",
        "description": "Speed and difficulty increase incrementally with each level. Later stages introduce **significantly more complex obstacle arrangements** and **entirely new gameplay mechanics** (e.g., gravity switches, vehicles), ensuring a continuous escalation of challenge and skill requirement."
      }
    ]
  },
  
  "whatIs": {
    "title": "Geometry Dash — Millisecond Reactions and Extreme Rhythm Challenge",
    "description": "Conquer a trial of both visual and auditory extremes, embarking on the path of high-difficulty platforming!\n\n**Geometry Dash** delivers the ultimate jumping test dreamt of by hardcore players, demanding **pinpoint timing and absolute concentration**.\n\n Click \"**Play Game**\" now to feel the ultimate contest of speed and rhythm.\n\n**Competitive Advantage Analysis:**\n\n**1. High-Stakes 'Instant Collapse/Start Over' Design**\n\nThe game utilizes an **'Instant Collapse / Start Over'** design, which surpasses traditional checkpoint mechanisms by instilling a more intense sense of achievement and operational drive. This zero-tolerance approach forces flawless execution.\n\n**2. Focused Aesthetics for Minimal Distraction**\n\nThe **vibrant and visually cohesive geometric design** perfectly integrates with the fast-paced gameplay. This minimalist aesthetic helps players **maximize focus** and prevents distraction from the critical millisecond timing required.",
   
      logo: {
      // Image path unchanged
      src: "/assets/geometry-rash/geometry-rash-logo.jpeg",
      // Alt text updated for the new game concept and keywords
      "alt": "Geometry Dash Free Online Unblocked Extreme Rhythm Platformer Game Logo"
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
      "title": "Geometry Dash: Ultimate Strategy & Frequently Asked Questions (FAQ)",
      "items": [
        {
          "value": "long-term-strategy-efficiency",
          "question": "[Long-Term Strategy] What is the best long-term strategy to maximize level completion rate and memory?",
          "answer": "**Expert Strategy**: Prioritize consolidating **muscle memory for single, difficult jumps** first, while simultaneously and gradually familiarizing yourself with the **overall flow and rhythm** of the entire level. Consistent repetition of difficult segments is key."
        },
        {
          "value": "dynamic-obstacle-timing",
          "question": "[Obstacle Timing] With dynamic obstacles, when is it better to wait for the jump opportunity, and when is quick continuous jumping suitable?",
          "answer": "**Timing Rule**: For **slower-moving or widely spaced dynamic obstacles**, you should wait for the optimal timing. In **consecutive, high-speed, and continuous zones**, continuous jumping is necessary to pass through quickly and maintain the required momentum."
        },
        {
          "value": "visual-cues-rhythm",
          "question": "[Visual Cues & Rhythm] How are visual cues like corners and edge markers key to efficient prediction?",
          "answer": "**Prediction Key**: Visual cues and jump markers (especially on corners and platforms) are the most efficient prediction keys. Players should **constantly observe the current and immediately upcoming jump markers** rather than focusing solely on the cube itself."
        },
        {
          "value": "music-rhythm-training",
          "question": "[Rhythm Training] How does combining background music and sound effects with jump timing training help?",
          "answer": "**Rhythm Synergy**: Training your jump reaction in sync with the **background music and sound effects** significantly enhances operational precision and immersion. The beat often serves as a highly accurate, audible guide for complex, rhythmic sequences."
        },
        {
          "value": "advanced-cushion-jump",
          "question": "[Advanced Techniques] What 'cushion jump' and 'micro-adjustment' skills do top players master?",
          "answer": "**Elite Skill**: Top players master the **'Cushion Jump' (or buffer jump)** and micro-adjustment techniques, allowing them to initiate a jump **the millisecond they land** to avoid collision. This minimizes ground time and preserves rhythm for challenging sequences."
        },
        {
          "value": "collision-grazing-limit",
          "question": "[Collision Physics] Is there a critical collision threshold? Can touching the edge of a spike be avoided?",
          "answer": "**Precision Threshold**: Yes, there is a collision threshold. Mastering **precise 'spike-grazing'** can allow the player to pass an obstacle with minimal distance, but this requires **absolute precision of the distance** and is a high-risk maneuver."
        },
        {
          "value": "block-size-optimization",
          "question": "[Operational Optimization] How to use the geometric block size to adjust jump amplitude and optimize distance?",
          "answer": "**Amplitude Optimization**: Learn to visually estimate the distance based on the **unit size of the geometric blocks**. This allows you to fine-tune the duration and amplitude of each jump, optimizing the distance covered and improving overall efficiency."
        },
        {
          "value": "newbie-common-errors",
          "question": "[Newbie Pain Points] What are the common errors that lead to instant failure?",
          "answer": "Common errors include **jumping too early or too late**, **inaccurate rhythm control** (losing synchronization with the music), and **panicked clicking** during complex sections."
        },
        {
          "value": "sequence-training-method",
          "question": "[Training Method] What method is recommended for practicing complex jump sequences?",
          "answer": "**Training Tip**: Practice **segmenting the complex jump sequence** into smaller, manageable parts. Master each segment individually before chaining them together. This step-by-step approach gradually improves reaction and control ability."
        },
        {
          "value": "reaction-timing-balance",
          "question": "[Operational Balance] What is the balance point between quick reaction and precise timing?",
          "answer": "**Balance Key**: Success hinges on the balance between **fast reaction and precise timing**. Quick reaction gets you moving, but precise timing (holding the click for the exact duration) is what determines success. **Rhythm** is the bridge between the two."
        },
        {
          "value": "technical-lag-solutions",
          "question": "[Technical Troubleshooting] What are the solutions for lag and input delay?",
          "answer": "**Quick Fix**: Lag and input delay are often due to device performance limitations. It is recommended to **close all unnecessary background programs** and **lower the graphics quality/effects settings** to improve frame rate and input responsiveness."
        },
        {
          "value": "input-misjudgment-fix",
          "question": "[Input Optimization] Frequent misjudgments occur during rapid consecutive clicking; how can this be fixed?",
          "answer": "**Optimization Tip**: Adjust your **touch/click sensitivity** settings (if available). More importantly, focus on **adjusting your operational habit**—ensure that your clicks are intentional and separated by a clean release to prevent the game from registering ghost clicks or overlaps."
        },
        {
          "value": "audio-importance",
          "question": "[Aesthetics & Gameplay] Music and sound effects are crucial for rhythm judgment; does turning off sound significantly increase the difficulty?",
          "answer": "**Crucial Element**: Yes, **disabling sound significantly increases game difficulty**. The music and sound effects are integral to judging the required rhythm and timing, especially in non-visual sequences. It is strongly recommended to play with sound enabled."
        }
      ]
    }
  
  

};


