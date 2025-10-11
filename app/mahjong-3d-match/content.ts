import { content as globalContent } from "@/config/content";

export const crazyChickenContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Mahjong 3D Match",
    game: {
      url: 'https://html5.gamedistribution.com/8c388ef95e04425fb807e5cf7829d08f/?gd_sdk_referrer_url=https://gamedistribution.com/games/mahjong-3d-match/',
      title: "Mahjong 3D Match",
      externalUrl: '/game/mahjong-3d-match/index.html'
    }
  },

  // 特性部分配置
  "features": {
    "title": "Mahjong 3D: Core Puzzle Features & Creative Freedom",
    "items": [
      {
        "title": "360° Free 3D Perspective Control",
        "description": "Gain the ultimate strategic advantage: Players can **freely rotate and zoom** the tile pile in three dimensions, allowing for precise identification of hard-to-reach or hidden tiles. This flexible operation directly improves puzzle efficiency and aids in formulating superior elimination strategies."
      },
      {
        "title": "Powerful & Shareable Custom Editor Mode",
        "description": "Unlock unprecedented creativity: The **robust Editor Mode** supports custom adjustments to the number, height, and complexity of the tile pile. Players can **create and save their own unique layouts** and easily share them with friends, dramatically enhancing replay value and community engagement."
      },
      {
        "title": "Rich Customization Options & Aesthetic Appeal",
        "description": "Personalize your experience with extensive customization options. This includes diverse **Tile Sets** (with the classic **Oriental Style** being the most popular), selectable backgrounds, tile color schemes, and UI styles, creating a truly immersive Mahjong environment."
      }
    ]
  }
  ,

  "whatIs": {
    "title": "Mahjong 3D — Full-View Classic Mahjong Tile Matching Reimagined",
    "description": "Experience **360-degree free operation** and **creatively infinite custom level design**!\n\nLeaping beyond traditional 2D Mahjong, Mahjong 3D allows you to freely rotate and zoom the tile pile in a three-dimensional space, planning unique puzzle strategies. Simultaneously, **design and share personalized layouts** to enjoy endless challenge and creative fun! Click \"**Play Game**\" now to start your new Mahjong world.\n\n**Why Choose Mahjong 3D?**\n\n**1. 3D Perspective Superiority**\n\nOur **3D perspective** surpasses traditional 2D Mahjong by revealing **hidden information and complex layers** within the tile pile, making strategy deeper and the challenge greater.\n\n**2. Unprecedented Creative Freedom (Editor Mode)**\n\n**Editor Mode** grants players unprecedented freedom, supporting custom layout number, height, and complexity. The ability to **save and share** these creations greatly enriches the game's **long-term replay value and community engagement**.",
    "logo": {
      "src": "/assets/mahjong-3d-match/mahjong-3d-match-logo.jpg",
      "alt": "Mahjong 3D Free Online Unblocked Tile Matching Puzzle Game Logo"
    }
  }
  ,

  howToPlay: {
    title: "How to Play Mahjong 3D Match: Master the Tile-Matching Puzzle!",
    description: "Playing Mahjong 3D Match is a fun and engaging experience where you match three identical tiles to remove them from the board. The main goal is to clear all tiles within the given time limit while avoiding overfilling the box.\n\n" +
      "To play, simply tap on three matching Mahjong tiles to collect and remove them. Be careful not to fill the box beyond its 7-tile capacity! Rotate the 3D board to easily locate the tiles and use boosters like hints and shuffle to solve tough puzzles. Completing levels within the time limit earns you extra rewards and boosts your score.\n\n" +
      "The more quickly you match tiles, the higher your score! Test your puzzle-solving skills and enjoy hours of addictive gameplay in this free-to-play Mahjong game.",
    image: "/assets/moscow-metro-driver-3d/moscow-metro-driver-3d.png",
    imageAlt: "Mahjong 3D Match Gameplay Guide - How to Match Tiles and Win"
  }
  ,

  
    "faq": {
      "title": "Mahjong 3D: Ultimate Strategy & Frequently Asked Questions (FAQ)",
      "items": [
        {
          "value": "long-term-strategy-efficiency",
          "question": "[Long-Term Strategy] How to Maximize Success Rate and Puzzle Efficiency?",
          "answer": "**Official Strategy**: The key is **fluidity and flow**. Prioritize eliminating **top-layer tiles** and strategically opening **middle channels** to ensure a smooth, continuous flow of available tiles."
        },
        {
          "value": "custom-vs-classic-challenge",
          "question": "[Challenge Difference] How does player-created complex layouts differ from classic preset layouts?",
          "answer": "**Deep Player Insight**: Player-created layouts are often **more random and variable in difficulty**, making them ideal for developing **strategic adaptability** and handling unexpected tile arrangements."
        },
        {
          "value": "resource-allocation-midgame",
          "question": "[Resource Allocation] Should I prioritize unlocking new Tile Sets or Background/UI customization in the mid-game?",
          "answer": "**Official Tip**: New **Tile Sets** provide better visual distinction, aiding puzzle-solving efficiency. **Background/UI** enhances the aesthetic experience. We recommend balancing your choice based on **personal preference** for efficiency versus visual immersion."
        },
        {
          "value": "optimal-viewing-angle",
          "question": "[Advanced View] Is there an optimal viewing angle for tile identification?",
          "answer": "**Expert Standard**: The easiest angle for identifying obstructed tiles and reducing blind spots is a **slightly overhead, 45-degree rotated perspective**. This viewpoint is crucial for maintaining flow."
        },
        {
          "value": "top-player-3d-techniques",
          "question": "[Advanced Techniques] What hidden 3D operation techniques are used by top players?",
          "answer": "**Elite Secret**: Top players utilize **'Rapid Zoom-Spin'**—a quick, continuous rotation combined with synchronized zooming—to instantly locate all available tile pairs and maintain visual awareness across the entire pile."
        },
        {
          "value": "custom-layout-design-principles",
          "question": "[Editor Mode] Are there 'Winning' or 'Most Difficult' principles for custom layout design?",
          "answer": "**Design Insight**: **'Winning' layouts** focus on **clear channel flow** and **no deadlocks**. **'Most Difficult' layouts** utilize **tight vertical pressure** and **maximal tile suppression** to create high-complexity decision points with minimal tile exposure."
        },
        {
          "value": "hint-undo-usage-limits",
          "question": "[Gameplay Tools] Are there restrictions on using the Hint or Undo features?",
          "answer": "**Official Guide**: While unrestricted, **advanced players** judiciously use **Hints** to save time during competitive runs. **Undo** should be used sparingly to avoid developing an over-reliance on backtracking, which stunts core problem-solving skills."
        },
        {
          "value": "beginner-common-mistakes",
          "question": "[Beginner Mistakes] What are the most common mistakes new players make?",
          "answer": "Common errors include: **Focusing only on surface-level visible tiles**, **over-relying on single-layer matches**, and **failing to observe the entire tile structure** (Global Awareness)."
        },
        {
          "value": "complexity-assessment",
          "question": "[Puzzle Strategy] How do I judge the complexity of a layout?",
          "answer": "**Training Tip**: Easily solvable layouts have **clear, predictable tile stacking rules**. Complex layouts are characterized by **multiple tight-pressed layers** and **narrow channels**, demanding early strategic planning."
        },
        {
          "value": "training-techniques",
          "question": "[Training Method] What is an effective training technique to improve spatial memory and vision?",
          "answer": "**Expert Practice**: Repeatedly practice the **'3D Quick-Scan'**: Perform a full 3D rotation, then immediately pause and try to **mentally recall all currently exposed, matchable tiles** before making a move. This enhances spatial memory and rapid global awareness."
        },
        {
          "value": "technical-lag-solutions",
          "question": "[Troubleshooting] What causes common lag issues, and what are the solutions?",
          "answer": "**Official Solution**: Lag is often due to high **3D rendering consumption**. We recommend **disabling high graphics effects** (if available) or **updating your browser** to the latest version for optimized rendering performance."
        },
        {
          "value": "custom-save-failure",
          "question": "[Technical Fix] Why do custom layout saves often fail?",
          "answer": "**Official Tip**: Save failures usually stem from **browser cache limitations**. Ensure you **regularly back up your layout files** and utilize the **official in-game sharing features** which rely on server synchronization, circumventing local cache issues."
        },
        {
          "value": "misclick-avoidance",
          "question": "[Control Fix] How can I avoid mouse misclicks due to perspective occlusion?",
          "answer": "**Control Optimization**: Get in the habit of clicking tiles from the **upper or lower visible edges** of the tile face, and always **adjust the 3D perspective** slightly before clicking any tile that appears to be partially occluded to ensure accurate selection."
        }
      ]
    }
  
  
};


