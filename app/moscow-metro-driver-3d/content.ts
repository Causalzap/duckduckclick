import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Moscow Metro Driver 3D",
    game: {
      url: 'https://html5.gamedistribution.com/92024a65afee401793188351ae69f54f/?gd_sdk_referrer_url=https://gamedistribution.com/games/moscow-metro-driver-3d/',
      title: "Moscow Metro Driver 3D",
      externalUrl: '/game/moscow-metro-driver-3d/index.html'
    }
  },

  // 特性部分配置
  "features": {
    "title": "Moscow Metro Driver 3D: Core Simulation Features & Realism",
    "items": [
      {
        "title": "Authentic Driving Physics Depth & Gear Control",
        "description": "Master realistic train dynamics with detailed gear settings (X1 to X4 for acceleration, T1 to T3 for braking). Each setting features authentic differences in **energy consumption, acceleration/deceleration rate, and crucial braking distance**. Players must precisely control the gears for smooth stops and efficient cruising."
      },
      {
        "title": "Immersive Moscow Metro Atmosphere",
        "description": "Experience unparalleled submersion. The game includes **iconic stations** like Circle Line and Red Square, featuring **classic carriage announcements** and detailed ambient environmental soundscapes. This combination recreates the authentic, bustling atmosphere of the Moscow Metro."
      },
      {
        "title": "Station Exploration & Interactive Elements",
        "description": "Go beyond the cab: The game supports **driver disembarkation** for walking exploration. Beyond mere sightseeing, stations hide **side missions and collectible elements**, enriching game content and adding a layer of unique exploration and discovery."
      }
    ]
  }
,
  
whatIs: {
  // Title clearly defines the game type
  "title": "Moscow Metro Driver 3D — Professional Driving, Immersive Underground World",
  "description": "Master authentic subway driving skills and explore the extreme detail of Moscow's underground city!\n\nLeaping beyond typical simulations, experience the perfect combination of **precise dispatch and driving control**. Command classic trains, witness iconic stations, and hear authentic broadcasts, immersing yourself in every moment of the Moscow Metro.\n\n Click \"**Play Game**\" now to start your professional driver journey!\n\n**Competitive Advantage Analysis:**\n\n**1. Unmatched Realism and Physics Engine**\n\nOur **authentic subway models and detailed routes** surpass ordinary simulations. We feature an advanced physics engine that accurately reflects **real train dynamics and visual details**, recreating the most lifelike driving experience.\n\n**2. Clear Skill Progression Path**\n\nGain practical skills through **'Driver Mode'** and solidify fundamental operations in **'Training Mode'**. This provides a clear path for growth, helping players progressively enhance their driving proficiency and professionalism.",

  logo: {
    // Image path unchanged
    src: "/assets/moscow-metro-driver-3d/moscow-metro-driver-3d-logo.jpg",
    // Alt text updated for the new game concept and keywords
    alt: "Moscow Metro Driver 3D - Realistic Subway Train Simulation Game Logo"
  }
}
,
  
howToPlay: {
  // Title reflecting the gameplay
  title: "How to Play Moscow Metro Driver 3D: Master Subway Train Simulation!",

  // Description focused on the simulation gameplay
  description: "Playing Moscow Metro Driver 3D is all about precision and timing in this subway train simulation game! Use the on-screen controls to accelerate (X1 to X4) and brake (T1 to T3) to manage the train's speed. Open and close the train doors at each platform, ensuring smooth operations and a realistic metro experience.\n\n" +
    "Switch camera views, use headlights, and honk the horn when necessary to navigate through stations. In Driver Mode, carefully manage your speed and stops to avoid accidents and ensure passenger safety. Learn the basics in Training Mode and then dive into the full experience by successfully transporting passengers across multiple stations.\n\n" +
    "Complete each journey with precision and make sure you stick to schedules in this immersive 3D subway train simulator. Perfect for train enthusiasts and simulation fans, Moscow Metro Driver 3D offers hours of engaging gameplay with every ride!",

  // Image path unchanged - update with the appropriate image
  image: "/assets/moscow-metro-driver-3d/moscow-metro-driver-3d.png",

  // Alt text updated
  imageAlt: "Moscow Metro Driver 3D Online Game Guide - Subway Train Simulation Controls & Strategy"
}
,
  

  "faq": {
    "title": "Moscow Metro Driver 3D: Ultimate Strategy & Frequently Asked Questions (FAQ)",
    "items": [
      {
        "value": "long-term-strategy-efficiency",
        "question": "[Long-Term Strategy] How to maximize punctuality and passenger satisfaction?",
        "answer": "**Official Strategy**: Prioritize **precise station stops** (Perfect Stop) and maintain a **consistent, reasonable cruising speed** between stations. Punctuality and smooth driving are the dual keys to high passenger satisfaction."
      },
      {
        "value": "perfect-stop-criteria",
        "question": "[Driving Goal] How is a 'Perfect Stop' determined?",
        "answer": "**Expert Standard**: A 'Perfect Stop' is achieved when the train stops **within 3 meters of the designated platform marker**. The system rewards this precision with a high rating score and a bonus multiplier."
      },
      {
        "value": "resource-allocation-training",
        "question": "[Resource Allocation] How to allocate time between 'Driver Mode' and 'Training Mode'?",
        "answer": "**Official Tip**: In the **early game**, heavily emphasize **Training Mode** to build fundamental operational skills (braking, acceleration). Gradually transition to **Driver Mode** for real-world application and challenging scenario practice as your proficiency increases."
      },
      {
        "value": "speed-brake-management",
        "question": "[Driving Skill] How to manage speed and braking for long-distance runs?",
        "answer": "**Advanced Technique**: Use **phased deceleration**. Begin braking early and use **T1/T2 gears** for a sustained, steady reduction in speed, avoiding abrupt stops. This technique saves time and energy while ensuring a smooth ride."
      },
      {
        "value": "hidden-control-tricks",
        "question": "[Advanced Control] What are the hidden train control techniques?",
        "answer": "**Elite Secret**: Master **gear anticipation**. Use the neutral (N) or low acceleration gears (X1) to predict overspeed and use **gliding/coasting** to correct minor speed errors without engaging the main brake, maximizing energy efficiency."
      },
      {
        "value": "announcement-siren-reward",
        "question": "[Interaction] Do announcements and horn usage provide rewards or penalties?",
        "answer": "**Game Mechanics**: **Judicious use** of announcements at key moments improves passenger responsiveness (e.g., getting them to hurry), potentially leading to a small score bonus. **Abuse** of the horn or excessive announcements may result in a penalty for noise pollution."
      },
      {
        "value": "precise-stop-aids",
        "question": "[Stopping Aid] What visual/audio aids assist with precise stops?",
        "answer": "**Training Tip**: Combine **visual markers** on the platform wall (which indicate your cabin position) with the **in-cab auditory cue** that triggers a few seconds before the ideal braking point. Anticipate these two signals simultaneously to brake accurately."
      },
      {
        "value": "beginner-common-mistakes",
        "question": "[Beginner Mistakes] What are the common mistakes made by new drivers?",
        "answer": "Typical errors include: **Incorrect gear usage** (e.g., accelerating too aggressively), **excessive speed on approach to the station**, and **neglecting the door/announcement buttons** after stopping, causing delays."
      },
      {
        "value": "multi-task-training",
        "question": "[Skill Training] How to simultaneously manage speed, door operation, and announcements?",
        "answer": "**Training Method**: Use **phased practice**. First, master the speed control. Second, integrate the **door/announcement sequence** (open doors, announce, close doors) *only* after achieving a perfect stop. Build multi-tasking habits step-by-step."
      },
      {
        "value": "deceleration-markers",
        "question": "[Route Awareness] How to accurately identify the station entry markers for deceleration?",
        "answer": "**Expert Practice**: **Path Memorization**. Repeatedly run the same route, focusing less on the speedometer and more on the **unique environmental landmarks** (e.g., tunnels, lights, track side objects) that signal the start of the required deceleration zone. This builds reliable route memory."
      },
      {
        "value": "technical-lag-solutions",
        "question": "[Troubleshooting] How to resolve lag and physics delay issues?",
        "answer": "**Official Solution**: Immediately **lower the graphics quality** in settings, ensure you are running the **latest version of your browser**, and **close any unnecessary background programs** to dedicate maximum resources to the simulation."
      },
      {
        "value": "save-progress-fix",
        "question": "[Technical Fix] What causes progress save issues?",
        "answer": "**Official Tip**: Progress saving issues are often linked to **unstable network connection** or **browser cache failure**. Regularly **backup your save file** and utilize the official in-game save export/import tools if available to ensure data integrity."
      },
      {
        "value": "input-sensitivity-fix",
        "question": "[Control Fix] What causes unresponsiveness when disembarking or returning to the cab?",
        "answer": "**Optimization Tip**: Unresponsiveness is often due to low **Control Sensitivity** settings or minor game pathing errors. Adjust the **control sensitivity** to a higher level and ensure the **driver's path is completely clear** before attempting to exit or re-enter the cab."
      }
    ]
  }


};


