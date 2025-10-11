import { content as globalContent } from "@/config/content";

export const sprunkiIncrediboxContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Screw Sort 3D: Screw Puzzle",
    game: {
      url: 'https://html5.gamedistribution.com/26c509ee4eb54c049c7e04c6bf123ecc/?gd_sdk_referrer_url=https://gamedistribution.com/games/screw-sort-3d:-screw-puzzle/',
      title: "Screw Sort 3D: Screw Puzzle",
      externalUrl: '/game/screw-sort-3d/index.html'
    }
  },

  // 特性部分配置
  "features": {
    "title": "Screw Sort 3D: Core Puzzle Mechanics & Challenge Design",
    "items": [
      {
        "title": "Strategic Removal Sequence to Prevent Deadlocks",
        "description": "Success hinges on **precise removal sequencing**. Players must strategically identify and prioritize the removal of **critical screws** that might restrict subsequent moves. This core mechanic ensures the puzzle is constantly solvable and demands deep forward-thinking to **prevent game-ending deadlocks**."
      },
      {
        "title": "Multi-Color Screw Management & Constraint Layers",
        "description": "Enjoy the challenge of **multi-color screw management**. Different color screws follow unique removal rules—such as only being able to unscrew components with the matching color. This adds complex, layered constraints, making color matching and prioritization a **vital strategic element**."
      },
      {
        "title": "Progressive Difficulty Curve & Expert Challenge",
        "description": "The difficulty is finely tuned, scaling progressively through increasing **screw quantity**, deepening **structural complexity**, and the introduction of **specialized locking mechanisms**. This design perfectly maps the challenge curve from **beginner levels to expert-tier spatial strategy**."
      }
    ]
  }
  ,
  
  "whatIs": {
    "title": "Screw Sort 3D: Screw Puzzle — Ultimate Spatial Deconstruction & Strategy Challenge",
    "description": "Challenge the limits of your spatial thinking and enjoy the pure satisfaction of disassembling screws!\n\nLeaping beyond flat sorting games, Screw Sort 3D offers a **realistic 3D disassembly experience** and complex **color component management**, stimulating your strategic planning and spatial judgment.\n\n Click \"**Play Game**\" now and start your journey of intellectual puzzles!\n\n**Competitive Advantage Analysis:**\n\n**1. Advanced 3D Spatial Challenge**\n\nOur **3D screw puzzle** surpasses traditional 2D color sorting games through **dynamic models and multi-angle observation**, bringing deeper strategy and spatial perception challenges.\n\n**2. Realistic Physics & Immersion**\n\nUnique **disassembly physics feedback** and **visual deconstruction effects** allow players to enjoy a more authentic sense of dismantling satisfaction, enhancing game immersion and the feeling of achievement.",
    "logo": {
      "src": "/assets/screw-sort-3d/screw-sort-3d.jpeg",
      "alt": "Screw Sort 3D Free Online Unblocked Puzzle Game Logo"
    }
  }
  ,
  
  howToPlay: {
    title: "How to Play Screw Sort 3D: Master the Ultimate Screw Puzzle!",
    description: "Playing Screw Sort 3D is all about strategy, planning, and solving 3D screw puzzles! Rotate and inspect 3D objects by dragging or swiping to find screws. The main goal in this brain-teasing puzzle game? Unscrew screws of matching colors in the correct order to disassemble objects layer by layer!\n\n" +
      "Strategize your moves carefully to avoid screw jams where screws block each other. Use zoom and rotate controls to get a better view of the puzzle and ensure minimal moves to clear each level. As the levels increase, you'll need sharp pattern recognition and strategic thinking to tackle the more complex puzzles!\n\n" +
      "Ready to take on the challenge? Dive into this relaxing yet challenging 3D puzzle game, test your skills, and enjoy hours of fun solving screw puzzles!",
    image: "/assets/screw-sort-3d/screw-sort-3d.webp",
    imageAlt: "Screw Sort 3D Online Puzzle Game Guide - Free 3D Screw Puzzle Controls & Strategy"
  }
  ,
  
  
    "faq": {
      "title": "Screw Sort 3D: Screw Puzzle - Ultimate Strategy & Frequently Asked Questions (FAQ)",
      "items": [
        {
          "value": "long-term-strategy-efficiency",
          "question": "[Long-Term Strategy] What is the best long-term strategy to maximize 'Efficiency' and achieve a '3-Star Rating'?",
          "answer": "**Expert Strategy**: Prioritize focusing on **Core Support Components**, as these are the critical pieces obstructing the structure's collapse. While removing top-layer screws offers quick progress, true efficiency comes from forward planning, ensuring each disassembly step clears the way for multiple subsequent moves, preventing deadlocks."
        },
        {
          "value": "expert-spatial-strategy",
          "question": "[Strategic Thinking] How should players adjust spatial awareness and strategic thinking for expert-level puzzles with increased components?",
          "answer": "**Advanced Technique**: You must transition from **Local Deconstruction** to **Global Collapse** thinking. In expert levels, anticipate how the structure will change **three steps ahead** after removing a screw. Mentally break the structure into independent, movable sub-modules rather than focusing on individual screws."
        },
        {
          "value": "reset-hint-system",
          "question": "[Resource Allocation] Is there a 'Reset/Hint' system? When should a player use it to salvage a deadlock instead of restarting?",
          "answer": "**Official Tip**: The Hint function is usually limited. You should only use a hint or reset when you are in a **complete deadlock (no available same-color screws to remove, or all screws are suppressed)** and **cannot revert to a viable path within three 'Undo' moves**, to avoid wasting time on an unsolvable sequence."
        },
        {
          "value": "critical-vs-redundant",
          "question": "[Priority Setting] How to judge which screws are 'Critical Supports' and which are 'Redundant Decoration'? What is the quick priority identification technique?",
          "answer": "**Quick ID Technique**: **Critical Support Screws** are the only screws connecting two or more main structural components. **Redundant Decorative Screws** typically only attach small components that don't affect the main structure. **Quick Tip: Visually track how many components will drop after removing a screw. The screw causing the most component drops is the critical one.**"
        },
        {
          "value": "advanced-3d-view",
          "question": "[Advanced Techniques] Are there any hidden 3D perspective tricks only known by top players to quickly locate obscured screws?",
          "answer": "**Top Secret**: Yes, experts use **'Rapid Pulse Rotation'**: Spin the view 90 degrees and immediately reset it at extremely high speed (approx. 100 milliseconds). This quick flash utilizes visual persistence to **momentarily expose the color and shape of obscured screws**, which is far more efficient than slow rotation."
        },
        {
          "value": "perfect-unscrew-bonus",
          "question": "[Operation Technique] Is there a 'perfect unscrew' rhythm or speed that yields extra score or rewards?",
          "answer": "**Game Mechanics**: The game does not offer a speed bonus for 'perfect unscrewing.' However, maintaining a **consistent, fast click rhythm** maximizes your 'Puzzle Efficiency' score. Faster overall time increases your chances of achieving the 3-Star rating."
        },
        {
          "value": "special-locking-mechanisms",
          "question": "[Advanced Mechanics] How do 'Special Locking Mechanisms' work? How do experts utilize them for efficiency?",
          "answer": "**Mechanism Analysis**: Special locking mechanisms (like timed or limited-use screws) introduce **time pressure** and **operational restrictions**. Experts treat these as **must-solve bottlenecks**. They plan the required steps to unlock them *before* starting and pre-prepare the correct color screws."
        },
        {
          "value": "beginner-common-mistakes",
          "question": "[Beginner Mistakes] What are the Top 3 common mistakes that lead new players into deadlocks or wasted time?",
          "answer": "1. **Focusing only on surface screws**: Ignoring the color and connection relationships of the screws beneath the top layer. 2. **Ignoring color constraints**: Randomly clicking screws, leading to a shortage of the correct color screw when needed. 3. **Over-reliance on single-point removal**: Failing to plan continuous actions, causing progress to stall after each screw removal."
        },
        {
          "value": "spatial-thinking-training",
          "question": "[Cognitive Training] How can new players effectively train themselves to switch between 2D planar thinking and 3D spatial deconstruction?",
          "answer": "**Training Method**: Practice the **'2D Projection Method'**: Start a new level and spend 10 seconds mentally breaking the 3D structure into three 2D outlines: **Top View, Front View, and Side View**. This helps the brain quickly understand the spatial hierarchy and connections."
        },
        {
          "value": "color-management",
          "question": "[Color Management] How to effectively manage multi-color screws to avoid lacking the correct one at a crucial moment?",
          "answer": "**Resource Management**: Always maintain a **'Reserve Strategy'** for colors: ensure your active area always has at least two available colors ready for use. If a specific color screw count is low, immediately shift strategy to **prioritize freeing up that color's suppressed screws**."
        },
        {
          "value": "technical-lag-solutions",
          "question": "[Troubleshooting] What are the most common lag or 3D rendering delay issues? What is the one-click solution for complex 3D models?",
          "answer": "**One-Click Solution**: The most common issue is **high GPU rendering strain**. Immediately **enable 'Low Graphics Mode'** (or disable shadows/highlights) in the game settings, ensure your browser is updated, and close unrelated background applications."
        },
        {
          "value": "custom-save-failure",
          "question": "[Technical Fix] What is the primary issue encountered when saving/loading custom layouts? How to guide players for backup?",
          "answer": "**Official Guidance**: Save failures are often related to **local cache limitations**. Users are strongly advised to use the **official 'Share Code' or 'Share Link' features** over relying on local saving. If local saving is necessary, **periodically export/backup** custom layout files to a separate drive."
        },
        {
          "value": "input-sensitivity-fix",
          "question": "[Control Optimization] What are the common issues with misclicks or unresponsiveness during mouse drag, rotation, and unscrewing? How to optimize controls?",
          "answer": "**Optimization Suggestion**: Misclicks often occur on the **boundary between rotation and unscrewing**. Adjust the **'3D View Rotation Sensitivity'** in settings to match your mouse speed. When unscrewing, ensure your click lands on the **center area of the screw** and avoid the edges, which can accidentally trigger rotation. **A wired mouse is recommended for the best input response.**"
        }
      ]
    }
  
  
}; 