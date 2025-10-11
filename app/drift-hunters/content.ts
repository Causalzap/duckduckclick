import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Drift Hunters",
    game: {
      url: 'https://drift-hunters.co/drift-hunters-games.embed',
      title: "Drift Hunters",
      externalUrl: '/game/drift-hunters/index.html'
    }
  },

  // 特性部分配置
  "features": {
    "title": "Drift Hunters: Core Drifting Mechanics & Expert Tuning",
    "items": [
      {
        "title": "High-Reward Drift Multiplier Mechanism",
        "description": "The **Drift Multiplier** is accumulated through continuous and precise drifting actions. Crucially, **colliding or stopping the drift** results in the multiplier being instantly reset, forcing players to restart accumulation. This mechanism strongly emphasizes perfect operation for maximal score reward."
      },
      {
        "title": "Fine-Tuning Impact & Brake Precision",
        "description": "Among the detailed tuning settings (Camber, Offset, Brake Pressure, etc.), **Brake Pressure** has the most significant impact on extending the drift angle and maintaining speed. **Optimizing brake application** is vital for achieving seamless, high-speed drifting fluidity."
      },
      {
        "title": "Ultimate Content Unlock Advantage",
        "description": "Top-tier vehicles, such as the **Porsche 911 GT**, boast superior base drifting performance and greater modification potential. Their higher unlock requirements establish them as the **ultimate goal and choice** for high-score chasers and expert players."
      }
    ]
  },
  
  "whatIs": {
    "title": "Drift Hunters — Master the Art of Drifting, Build Your Custom Performance Monster",
    "description": "Experience the ultimate 3D drifting thrill and challenge the highest score multipliers!\n\n**Drift Hunters** offers professional-grade tuning and performance upgrades, allowing you to feel the excitement of extreme-speed drifting in a realistic physics environment. **Customize 26 unique vehicles** to achieve your exclusive style and ultimate control. \n\nClick \"**Play Game**\" now to start your path to drifting royalty!\n\n**Competitive Advantage Analysis:**\n\n**1. Professional-Grade Tuning System**\n\nOur professional-grade tuning system (Camber, Offset, Brake Balance, etc.) surpasses the simplified settings of casual drifting games. It provides **authentic physical feedback** and **high degree of control freedom**, satisfying the hardcore player's pursuit of detail.\n\n**2. Extensive Customization and Roster**\n\nThe rich roster of **26 customizable cars** far exceeds the fixed models of competitors, giving players stronger **personalization expression** and long-term motivation for growth.",
  
      logo: {
      // Image path unchanged
      src: "/assets/drift-hunters/drift-hunters-logo.jpeg",
      // Alt text updated for the new game concept and keywords
      alt: "Drift Hunters - Free Online Drifting Simulation Game Logo"
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
      "title": "Drift Hunters: Ultimate Strategy & Frequently Asked Questions (FAQ)",
      "items": [
        {
          "value": "long-term-strategy-efficiency",
          "question": "[Long-Term Strategy] How to maximize the score multiplier and car purchase efficiency?",
          "answer": "**Expert Strategy**: Prioritize investing in **Engine & Turbo Upgrades** first for maximum power output and speed. Immediately follow this by adjusting **Weight Reduction & Brake Balance** to achieve the highest handling limits, ensuring drift fluidity."
        },
        {
          "value": "high-end-car-investment",
          "question": "[Investment Threshold] At what score should I start investing money into high-performance luxury cars?",
          "answer": "**Official Guidance**: Once you consistently achieve scores of approximately **8500 points (or higher)**, it signals your control technique is mature. At this point, invest funds into high-performance luxury cars, like the Porsche 911 GT, as they have higher base drift potential and a **higher score multiplier ceiling**."
        },
        {
          "value": "resource-allocation-midgame",
          "question": "[Resource Allocation] How should resources be split between upgrading existing cars and buying new cars in the mid-game?",
          "answer": "**Official Tip**: We recommend a split of $\\mathbf{60\\%}$ towards **upgrading your existing primary car** (Street to Pro level) and $\\mathbf{40\\%}$ towards **purchasing new lower-tier models**. This balances performance upgrades for your main car with expanding your vehicle selection for different tracks."
        },
        {
          "value": "track-selection-purpose",
          "question": "[Track Selection] Which tracks are best for maximizing the score multiplier, and which are best for skill training?",
          "answer": "**Track Analysis**: **Emashi and Forest Tracks** are best for **maximizing the score multiplier** due to their long, sweeping corners. **Tyshen and Stadium Tracks** feature more complex, tighter bends, making them ideal for **skill training and pushing handling limits**."
        },
        {
          "value": "advanced-drift-techniques",
          "question": "[Advanced Techniques] What advanced drifting techniques do top players use to maintain the multiplier and accumulate scores quickly?",
          "answer": "**Elite Techniques**: Top players master **'Inertia Drifting'** (using momentum to glide through long straights) and **'Consecutive Reverse Entry Drifting'** (quickly snapping the car from one direction to the opposite) to ensure the drift action never stops, maximizing multiplier accumulation."
        },
        {
          "value": "throttle-control",
          "question": "[Throttle Control] How to extend the drift duration through subtle accelerator adjustments?",
          "answer": "**Precision Control**: **Judicious use of the throttle** is key; do not hold the accelerator down constantly during the drift. By making **micro-adjustments to acceleration** (feathering the gas), you balance the drift angle and speed, preventing a spin-out from overspeeding or a loss of drift from being too slow, thereby extending the drift time."
        },
        {
          "value": "visual-mods-impact",
          "question": "[Modification Effect] Do visual modifications affect the car's physical performance?",
          "answer": "**Game Mechanics**: Visual modifications such as paint, rims, etc., **do not affect** the car's physical performance (power, handling, braking). Their only function is to **enhance the driving experience and personalized expression**, allowing you to create a unique drift monster."
        },
        {
          "value": "beginner-common-mistakes",
          "question": "[Beginner Mistakes] What are the common errors that lead to drift interruption for new players?",
          "answer": "Common errors include: **Improper drift initiation timing** (turning in too late), **over-steering leading to a spin-out** (excessive counter-steer angle), and **incorrect E-brake usage** (the E-brake should primarily be used for initiation, not held throughout the drift)."
        },
        {
          "value": "brake-vs-e-brake",
          "question": "[Braking Usage] What are the respective roles of the regular brake and E-brake in drifting?",
          "answer": "**Control Guide**: The **Regular Brake** is primarily used for **speed adjustment and pre-corner deceleration**. The **E-brake (Handbrake)** is specifically used for **initiating the drift** and **correcting extreme drift angles** mid-drift."
        },
        {
          "value": "side-to-side-training",
          "question": "[Training Method] How to practice 'Side-to-Side' consecutive drifting to maintain the multiplier?",
          "answer": "**Training Technique**: Practice on **wide straights or broad S-curves**. The key is **alternating control of the throttle and direction**: As the drift ends, quickly snap the wheel in the opposite direction and tap the E-brake to initiate the next reverse drift. Maintain this rhythmic switching to hold a stable multiplier."
        },
        {
          "value": "technical-lag-solutions",
          "question": "[Troubleshooting] What is the source of common lag issues, and how to resolve them?",
          "answer": "**Official Solution**: Lag mainly stems from **high physics calculation load**. It is recommended to **close unnecessary background programs** and **optimize graphics settings** within the game (e.g., lower shadow quality and resolution) to reduce GPU strain."
        },
        {
          "value": "tuning-save-issues",
          "question": "[Technical Fix] How to handle tuning setup save/load failures?",
          "answer": "**Official Guidance**: To prevent data loss, **always use the in-game backup tool** and regularly **export your tuning configuration files** to a local drive. If loading fails, try clearing the browser cache and re-importing your backup data."
        },
        {
          "value": "input-sensitivity-fix",
          "question": "[Control Optimization] How to optimize when the controller or keyboard operations feel unresponsive or imprecise?",
          "answer": "**Optimization Suggestion**: Adjust the **Control Sensitivity Settings**. It is recommended to use **medium sensitivity** (instead of the highest or lowest) to balance precision during the drift with rapid responsiveness when counter-steering. Ensure your device drivers are up to date."
        }
      ]
    }
  

};


