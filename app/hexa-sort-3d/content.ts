import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Hexa Sort 3D",
    game: {
      url: 'https://play.gamepix.com/hexa-sort-3d/embed?sid=e4515',
      title: "Hexa Sort 3D",
      externalUrl: '/game/hexa-sort-3d/index.html'
    }
  },

  // 特性部分配置
 "features": {
    "title": "Hexa Sort: Core Mechanics of Layered Strategy and Precision",
    "items": [
      {
        "title": "The Rule of Precision: 'Aligned and Unobstructed' Stacking",
        "description": "The precise condition for the hexagonal auto-stacking is **'Aligned and Unobstructed.'** Elimination only occurs when a tile is placed next to three or more same-colored tiles that are **fully cleared on their top layer**. Players must utilize this rule by precisely clearing top layers to create **uninterrupted vertical pathways**, enabling continuous, multi-layer elimination chains."
      },
      {
        "title": "Power-up Strategy for Critical Blockages",
        "description": "Among all Power-ups and Boosters, the **'Swap' or 'Undo'** function is the most strategically valuable when dealing with a **'critical layer blockage'** (where the required color is trapped underneath a different color). The best time to use it is the moment you realize a move will lock up the board **within the next two turns**, rather than waiting for an actual deadlock."
      },
      {
        "title": "Controlling the Cascade: Planning Chain Matches",
        "description": "To effectively control and predict the arrangement of underlying colors after the top layer is cleared, players must engage in **Chain Match Planning**. Strategically place tiles so that when the top layer is eliminated, the newly exposed tiles form an immediate match with neighboring tiles, triggering a **cascade of eliminations** and maximizing scoring."
      }
    ]
  },
  
"whatIs": {
    "title": "Hexa Sort — Ultimate Multi-Layer Strategy and ASMR Matching",
    "description": "Beyond a simple sorting puzzle, Hexa Sort is the supreme challenge of **multi-dimensional strategic layout**!\n\nExperience the **ASMR-like satisfaction** of perfect tile elimination while mastering complex color stacks. The challenge is not just sorting, but **planning every move across multiple color depths**.\n\n Click \"**Play Game**\" now to test your foresight and strategic mastery!\n\n**Competitive Advantage Analysis:**\n\n**1. The Core Hook: Multi-Dimensional Strategic Depth**\n\nThe most compelling benefit is the satisfaction of engaging in **multi-dimensional strategic layout**. Our **multi-layer color challenge** demands complex, forward-thinking strategy, as players must plan for colors that are currently obscured, creating a depth far beyond traditional single-layer sorting games.\n\n**2. Deep Strategy from Layered Constraints**\n\nOur **multi-layer color challenge** surpasses traditional single-color sorting games by forcing players to strategize across different depths. This creates a much more complex and **forward-thinking strategic depth** as players must plan for colors that are currently obscured.\n\n**3. High-Stakes 19-Slot Board Limitation**\n\nThe **19-slot board limitation** creates a far more intense and precise challenge compared to competitors. This constraint forces players to engage in rigorous **space and bottleneck management**, making every move a critical decision to prevent board lock-up.",
 
  logo: {
    // Image path for the logo
    src: "/assets/hexa-sort-3d/hexa-sort-3d-log.webp",
    // Alt text updated for the new game concept and keywords
    alt: "Hexa Sort 3D - Color Matching Puzzle Game Logo"
  }
}

,
  
howToPlay: {
  // Title reflecting the gameplay mechanics
  title: "How to Play Hexa Sort 3D: Master the Color Matching Puzzle!",
  
  // Description focused on the game mechanics and strategy
  description: "Playing Hexa Sort 3D is all about strategically sorting and stacking hexagonal blocks in this fun and challenging puzzle game. Use drag-and-drop mechanics to place the blocks onto the game board in the correct positions. Your goal is to group blocks of the same color together to trigger automatic merging and elimination.\n\n" +
    "Once a stack reaches 10 layers, the blocks are eliminated. Focus on managing your limited space by prioritizing the merging of lower layers to create room for future moves. Use the hammer power-up to destroy improperly stacked blocks, or the swap function to adjust the block placement for better organization.\n\n" +
    "Hexa Sort 3D features a dynamic 3D perspective that you can rotate and adjust, making it easier to plan and strategize. There’s no time limit, so you can take your time to think through each move carefully.\n\n" +
    "As you progress, challenge yourself with more difficult levels that test your sorting and spatial planning skills. Can you clear the required number of blocks and complete all the levels?",
  
  // Image path for how-to-play visual
  image: "/assets/hexa-sort-3d/hexa-sort-3d.webp",
  
  // Alt text updated for SEO
  imageAlt: "Hexa Sort 3D - How to Play, Color Matching Puzzle and Sorting Strategy"
}


,
  

  "faq": {
    "title": "Hexa Sort: Ultimate Strategy & Frequently Asked Questions (FAQ)",
    "items": [
      {
        "value": "long-term-strategy-efficiency",
        "question": "[Long-Term Strategy] What is the best long-term strategy to maximize 'Elimination Efficiency' and 'Level Completion Rate'?",
        "answer": "**Expert Strategy**: The best strategy is to prioritize clearing the **deep-layer colors that are most likely to cause blockages**. While clearing the most numerous color gives temporary relief, long-term success requires foresight to manage the colors at the bottom of the stacks, which hold the ultimate veto over the board's solvability."
      },
      {
        "value": "multi-impact-training",
        "question": "[Cognitive Training] How to effectively train yourself to simultaneously predict the impact of placing one hexagon on its six surrounding neighbors?",
        "answer": "**Training Method**: Practice **'Peripheral Vision Planning.'** When focusing on the target placement spot, consciously use your peripheral vision to track the **potential matches for the surrounding five neighbors**. This trains the brain to execute the central move while anticipating the subsequent chain reactions."
      },
      {
        "value": "power-up-allocation",
        "question": "[Resource Allocation] Should players prioritize using Power-ups mid-game to prevent failure, or save them for high levels to pursue perfect clears/high scores?",
        "answer": "**Strategic Guidance**: In the mid-game, Power-ups should be used **strategically to prevent critical failure**. However, once consistency is achieved, **reserve Power-ups for advanced levels** to target the high-score multiplier, as the scoring potential in later stages outweighs the cost of a mid-game restart."
      },
      {
        "value": "safe-vs-risky-zones",
        "question": "[Space Management] How to determine which areas on the 19-slot board are 'Safe Zones' (for temporary stacking) and which are 'Blockage Risk Zones'?",
        "answer": "**Zone Identification**: **'Safe Zones'** are the central slots that are easily accessible from multiple angles. **'Blockage Risk Zones'** are the slots in the **outermost ring and corners**. Avoid stacking unmatched colors in the corners, as they become difficult to clear without blocking the entire board."
      },
      {
        "value": "hidden-multi-layer-clear",
        "question": "[Advanced Technique] Is there a hidden placement technique known only by top players that can instantly trigger a 'Full Board Multi-Layer Clear'?",
        "answer": "**Elite Secret**: This is the **'Calculated Gap Fill.'** It involves strategically leaving a specific single-slot gap open for the final tile. Placing the final piece not only completes the top layer match but also simultaneously exposes and completes the match for the color in the layer directly underneath it, triggering an immediate, cascading multi-layer elimination."
      },
      {
        "value": "fixed-color-sequence",
        "question": "[Prediction Mechanics] Is there a fixed color sequence for the 'multi-layer color' mechanism? How does this affect foresight?",
        "answer": "**Mechanism Insight**: There is **no globally fixed color sequence** (e.g., Red is always followed by Blue). However, **within a single level**, the colors are often pre-determined based on the level's design. Top players use **repeated play** and memory to learn the sequence of colors for high-value stacks, giving them a predictive advantage."
      },
      {
        "value": "3d-visual-advantage",
        "question": "[3D Visualization] How to leverage the 3D perspective to quickly identify which underlying hexagons are covered by 'soon-to-be-cleared' top-layer hexagons?",
        "answer": "**Visual Trick**: Use **'Quick-Shift Perspective.'** Instead of waiting, quickly rotate the 3D view to see the **side walls** of the stacks before clicking the final tile. This confirms the color of the underlying piece before it drops, ensuring your planned chain match is successful."
      },
      {
        "value": "newbie-common-errors",
        "question": "[Newbie Pain Points] What are the three common errors that cause the 19-slot board to fully block or prevent the clearing of critical colors?",
        "answer": "The three major errors are: 1) **Focusing only on the top layer** and ignoring the growing complexity below. 2) **Mindlessly stacking unmatched colors in corners**, which are impossible to clear later. 3) **Breaking up potential deep-layer matches** with temporary, misplaced colors."
      },
      {
        "value": "must-clear-vs-can-keep",
        "question": "[Strategic Assessment] How should new players judge which hexagon is 'Must Be Cleared Immediately' versus 'Can Be Temporarily Reserved'?",
        "answer": "**Assessment Guide**: A tile is **'Must Be Cleared Immediately'** if it is an unmatched color placed on top of a key color needed for an existing match. A tile is **'Can Be Temporarily Reserved'** if it is an unmatched color placed on top of another unmatched color, or if it is on a low-risk, easily accessible area (not a corner)."
      },
      {
        "value": "dual-layer-training",
        "question": "[Dual-Layer Focus] How to effectively train yourself to consider both the current color and the color of the layer underneath when placing a hexagon?",
        "answer": "**Training Method**: Practice **'Two-Turn Planning.'** Before placing any tile, mentally confirm: **1) What color will this match? 2) What color will be exposed underneath?** Only proceed if the placement either clears a match immediately or reveals a color that can be matched on the very next move."
      },
      {
        "value": "technical-lag-solution",
        "question": "[Technical Troubleshooting] What are the most common lag or 3D rendering delay issues? What is the one-click solution for 3D puzzle games?",
        "answer": "**One-Click Solution**: The most common issue is **high 3D rendering pressure**. The immediate solution is to **disable visual effects (lower graphics quality)** and ensure your browser/device is running the **latest software update** to optimize the rendering pipeline."
      },
      {
        "value": "asmr-sync-fix",
        "question": "[UX Fix] Does the ASMR elimination sound effect have a delay? How to ensure the optimal visual/auditory synchronization experience?",
        "answer": "**Synchronization Tip**: The ASMR sound is designed for minimal delay. To ensure the optimal experience, if you notice any lag, immediately follow the **technical lag solution** (lowering graphics quality). A clean elimination with minimal visual lag should ensure perfect audio synchronization."
      },
      {
        "value": "input-optimization",
        "question": "[Input Optimization] What is the most common placement judgment error when dragging and rotating hexagons to the specified position? How to optimize the operation?",
        "answer": "**Optimization Advice**: The most common error is **misjudged alignment due to drag distance**. Optimize by ensuring you **fully center the hexagon** over the target slot before releasing the mouse/touch. Adjust the **control sensitivity** in the settings to allow for finer, more controlled movements rather than fast, sweeping drags."
      }
    ]
  }


};


