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
  "features": {
    "title": "Extreme Run 3D: Core Mechanics of Speed, Precision, and Zero-Tolerance",
    "items": [
      {
        "title": "Hardcore Difficulty Mechanism with Predictive Cues",
        "description": "The appearance of giant red blocks is based on a **pre-set distance and velocity sequence** (not entirely random), coupled with **subtle auditory and visual pre-warnings**. This mechanism rewards high-skill players by allowing for advanced anticipation and optimal path adjustments."
      },
      {
        "title": "Complex Path Planning with Gravity Dynamics",
        "description": "The course features **curved ramps and sharp turns** that demand early deceleration and precise micro-adjustments. Players must actively **manage gravity and inertia** to maintain control—a challenge significantly more complex than simple straight-line parkour."
      },
      {
        "title": "Sustained Challenge Depth and Diversity",
        "description": "The **speed increase is stair-stepped and relentless**. After reaching the maximum velocity, the game introduces **new obstacle types and complex combinations**, continuously elevating both the difficulty and the diversity of the challenge."
      }
    ]
  }
  
,
  
whatIs: {
  "title": "Extreme Run 3D — Challenge Extreme Speed and Reaction Limits",
  "description": "Conquer relentless speed and test the limits of human reaction! \n\n**Extreme Run 3D** delivers an intense, high-difficulty challenge through **extreme-speed parkour and zero-tolerance design**. Your operational precision and path planning will determine your survival distance—a must-play for hardcore gamers!\n\n Click \"**Play Game**\" now to begin the ultimate experience.\n\n**Competitive Advantage Analysis:**\n\n**1. Pure Skill and High Technical Ceiling**\n\nThe game **deliberately eliminates Power-ups and safety nets**, relying purely on operational skill. This stripped-down design ensures a significantly **higher technical ceiling and sense of achievement** for dedicated players.\n\n**2. Maximal Focus Through Minimalist Design**\n\nThe minimalist visual style, featuring a **neon tunnel and stark red giant blocks**, helps players **maximize concentration and enhance reaction speed** by eliminating visual clutter.",

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
  

  "faq": {
    "title": "Extreme Run 3D: Ultimate Strategy & Frequently Asked Questions (FAQ)",
    "items": [
      {
        "value": "long-term-strategy-efficiency",
        "question": "[Long-Term Strategy] What is the best long-term strategy to maximize survival distance?",
        "answer": "**Expert Strategy**: Focus on the **balance between forward path planning** (looking ahead) and **current speed control**. Sustaining this balance is the key to maintaining a run for the maximum distance."
      },
      {
        "value": "avoidance-speed-tradeoff",
        "question": "[Pacing Strategy] How to balance obstacle avoidance and sprinting speed?",
        "answer": "**Strategic Balance**: Balance is crucial: running too fast risks an immediate crash, while running too slow prevents achieving high scores. Find the speed that allows **zero-tolerance precision**."
      },
      {
        "value": "efficient-avoidance",
        "question": "[Avoidance Technique] Which avoidance method is most efficient at high speed (jumping vs. dodging/weaving)?",
        "answer": "**Efficiency Tip**: **Jumping** consumes the least time and speed at high velocities. Dodging and weaving are comparatively more time-consuming and risk losing horizontal momentum."
      },
      {
        "value": "jump-vs-weave-walls",
        "question": "[Obstacle Strategy] Jump vs. Weave for continuous giant block walls?",
        "answer": "**Tactical Choice**: **Weaving (dodging)** is suited for players focused on precise speed control through the wall. **Jumping** is higher risk but may lead to faster overall passage time."
      },
      {
        "value": "advanced-error-correction",
        "question": "[Advanced Technique] What advanced techniques do top players use to correct errors and prevent loss of momentum?",
        "answer": "**Elite Skill**: Top players utilize **hidden jump and turning techniques** for micro-adjustments immediately following a near-miss or slight bump. This allows them to correct the trajectory without losing critical forward momentum."
      },
      {
        "value": "speed-jump-threshold",
        "question": "[Physics Threshold] Is there a physical threshold for speed and jump distance?",
        "answer": "**Physics Insight**: Yes, there is a physical threshold: **higher speeds allow for longer jump distances**. Mastering speed control is essential for crossing maximal gaps."
      },
      {
        "value": "visual-cue-lines",
        "question": "[Visual Cues] How to use the neon blue lines on the track as a visual cue?",
        "answer": "**Reference Point**: The neon blue lines serve as an excellent **visual reference** to help judge the precise distance to upcoming obstacles, aiding in advanced reaction timing."
      },
      {
        "value": "newbie-common-errors",
        "question": "[Newbie Pain Points] What are the common beginner mistakes?",
        "answer": "Common errors include **mistimed jumps**, **focusing only on nearby obstacles** (limited field of view), and **lack of sustained concentration** at high speeds."
      },
      {
        "value": "focus-control-training",
        "question": "[Training Method] How to improve focus and speed control?",
        "answer": "**Training Tip**: Practice **staring at the furthest visible point** of the track. Combine this with **rhythmic speed control** to keep your body and mind synchronized with the environment's tempo."
      },
      {
        "value": "slope-turn-strategy",
        "question": "[Pacing Strategy] Strategy for steep slopes and sharp turns?",
        "answer": "**Stability First**: **Adjust the rhythm and slow down slightly in advance** of steep slopes and sharp turns. Prioritize stability and accurate navigation over maintaining maximal speed to avoid instant failure."
      },
      {
        "value": "technical-lag-solutions",
        "question": "[Troubleshooting] Solutions for lag and input delay?",
        "answer": "**Official Solution**: Immediately **close all background programs** and **reduce the graphics quality** setting. This minimizes the load on the CPU's physics calculation pipeline."
      },
      {
        "value": "collision-grazing",
        "question": "[Collision] Is collision detection precise? Can 'grazing' obstacles be used as an advantage?",
        "answer": "**Precision Check**: Collision detection is precise. Smart **'edge-grazing'** (barely touching the edge of a block) can be used as an advanced technique to narrowly circumvent obstacles and maintain speed."
      },
      {
        "value": "input-sensitivity-fix",
        "question": "[Control Optimization] Recommended control sensitivity?",
        "answer": "**Optimization Tip**: A **medium sensitivity setting** is recommended. This setting provides the optimal balance between high responsiveness (required for micro-adjustments) and precision (preventing misoperation)."
      }
    ]
  }



};


