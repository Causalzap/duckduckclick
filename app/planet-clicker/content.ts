import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Planet Clicker",
    game: {
      url: 'https://planetclicker.io/planet-clicker.embed',
      title: "Planet Clicker",
      externalUrl: '/game/planet-clicker/index.html'
    }
  },

  // 特性部分配置
"features": {
    "title": "Planet Clicker: Core Energy Mechanics and Cross-Planetary Strategy",
    "items": [
      {
        "title": "Core Mechanism: Manual to Automated Production Thresholds",
        "description": "The crucial strategic decision in the Earth phase is the transition from manual clicking to fully automated production. The game features **critical investment thresholds** designed to force players to identify the precise moment when automation upgrades yield an **exponential leap in efficiency** over continued manual clicking."
      },
      {
        "title": "Planetary Unlock Efficiency and Strategic Transfer",
        "description": "The cost of unlocking planets (e.g., Mars to Venus) is designed to be substantial (hundreds of millions of energy). Players must strategize the transfer: should they **fully maximize the current planet's tech tree** or **transfer prematurely** to leverage the new planet's higher base efficiency, optimizing cross-galactic energy transfer?"
      },
      {
        "title": "Deep Tech Tree: Alien vs. Future Technology",
        "description": "The 'Alien Technology' of Mars and the 'Future Technology' of Venus possess **fundamentally different productivity efficiencies and upgrade cost structures**. These differences profoundly influence strategic layout, requiring players to adapt their economic models (e.g., prioritizing low-cost/high-yield on Mars vs. high-cost/ultra-efficiency on Venus)."
      }
    ]
  },
  
"whatIs": {
    "title": "Planet Clicker — The Journey to Build a Cross-Galactic Energy Empire",
    "description": "Establish your future technology and planetary colonization empire, unlocking infinite cosmic energy!\n\n**Planet Clicker** sets you on an energy development journey spanning Earth, Mars, and Venus, offering a unique technology tree upgrade path and deep strategic gameplay.\n\n Click \"**Play Game**\" now to embark on your cosmic energy quest.\n\n**Competitive Advantage Analysis:**\n\n**1. Multi-Planet Tech Trees and Layered Strategy**\n\nOur **multi-planet unlock and independent technology tree mechanism** breaks through the traditional single-resource loop, delivering layered strategic depth and the enjoyment of long-term planning. This ensures complex, meaningful progression across the game.\n\n**2. Diverse Energy Systems for Unique Gameplay**\n\nThe distinct energy systems of Earth, Mars, and Venus (such as Solar Oil, Lava Energy, and Future Tech) ensure that each planet offers a **unique and varied gameplay experience and challenge**, greatly enhancing content richness and replayability.",
   
  logo: {
    // Image path (can be updated with the actual game logo)
    src: "/assets/planet-clicker/planet-clicker-logo.jpeg",
    // Alt text updated for the new game concept and keywords
    alt: "Planet Clicker - Free Idle Clicker and Strategy Game Logo"
  }
},
  
howToPlay: {
  // Title reflecting the idle clicker and strategy gameplay
  title: "How to Play Planet Clicker: Master Energy Generation and Upgrades!",
  
  // Description focusing on the core gameplay mechanics
  description: "Playing Planet Clicker is all about generating energy by clicking on planets! Start by clicking Earth to accumulate energy and use it to unlock powerful upgrades in the shop. The more energy you generate, the faster you can progress!\n\n" +
    "As you gather energy, invest in upgrades that boost your click rewards and automate energy production. Switch between planets like Mars and Venus to unlock even more efficient energy gathering methods and advanced upgrades.\n\n" +
    "Focus on upgrading your click multiplier early to accumulate resources quickly, and don't forget to unlock automation buildings to reduce the need for manual clicks.\n\n" +
    "Pay attention to events that can impact your resources, and adjust your strategy accordingly to maximize your energy production. Keep the game tab open to accumulate energy even when you're offline!\n\n" +
    "Planet Clicker is easy to play with both mouse clicks and touchscreen controls, making it accessible for all players. Whether you're using a desktop or mobile device, enjoy this simple yet engaging idle clicker game at your own pace!",
  
  // Image path unchanged
  image: "/assets/planet-clicker/planet-clicker.png",
  
  // Alt text updated
  imageAlt: "Planet Clicker - How to Play and Controls Guide"
},
  
  "faq": {
    "title": "Planet Clicker: Ultimate Strategy & Frequently Asked Questions (FAQ)",
    "items": [
      {
        "value": "long-term-strategy-efficiency",
        "question": "[Long-Term Strategy] To maximize cross-planetary energy transfer efficiency, should priority investment go to the current planet's highest-tier building or mass-stacking basic buildings?",
        "answer": "**Expert Strategy**: Prioritize the **highest-tier building** until its cost becomes prohibitive. High-tier buildings offer a much better **Cost-per-Energy** ratio. Mass-stacking basic buildings is only efficient in the initial moments of a new planet or when funding the next high-tier purchase."
      },
      {
        "value": "mars-unlock-threshold",
        "question": "[Pacing] At what cumulative energy unit count in the Earth stage is it most optimal to purchase Mars?",
        "answer": "**Optimal Threshold**: The most efficient transfer occurs when you can purchase Mars and immediately afford the **first two tiers of automated production** on Mars. This prevents a slowdown (bottleneck) on the new planet. The exact number varies, but it's typically just **above the minimum unlock cost** for maximal efficiency."
      },
      {
        "value": "mars-resource-priority",
        "question": "[Resource Allocation] In the Mars phase, should players prioritize upgrading the unique 'Solar Oil' buildings or foundational technologies like Coal/Nuclear?",
        "answer": "**Priority Guidance**: Immediately prioritize the **unique 'Solar Oil' feature buildings**. Unique planetary features are designed to be **exponentially more efficient** than generic technologies (Coal/Nuclear) and are the key to unlocking the planet's full energy potential."
      },
      {
        "value": "upgrade-cost-analysis",
        "question": "[Investment Analysis] How to determine if an upgrade is 'high-cost/high-return' or 'low-cost/low-return'?",
        "answer": "**Analysis Tip**: Calculate the **Energy-Per-Cost ratio** for each upgrade. A **'high-cost/high-return'** upgrade offers a significant jump in the ratio (e.g., doubling production for less than doubling the cost). A low-return upgrade maintains a static or decreasing ratio."
      },
      {
        "value": "hidden-click-burst",
        "question": "[Advanced Technique] Do top players utilize hidden energy transfer techniques, such as click bursts, to shorten unlock times?",
        "answer": "**Elite Secret**: Yes, the **'Click Burst'** technique involves saving up accumulated click bonuses and activating them just before an expensive unlock. This synchronized, massive manual output is used to **bridge the gap** between automated income and the target cost, significantly shortening the waiting time."
      },
      {
        "value": "synergy-strategy",
        "question": "[Synergy Strategy] Is there a synergy strategy to achieve excess production through specific building combinations?",
        "answer": "**Synergy Insight**: Look for upgrades that offer a **global production bonus** (affecting all buildings on the planet) or a **multiplier to another building type**. Synergistic combinations (e.g., Building A boosts Building B, and Building B boosts the base click rate) are critical for achieving super-linear production."
      },
      {
        "value": "old-planet-resource-management",
        "question": "[Resource Management] How to balance resource allocation to avoid wasting resources on old planets after unlocking a new one?",
        "answer": "**Balance Rule**: Only continue upgrading older planets if the **total energy gained per second (EPS)** from that investment contributes meaningfully (e.g., >10%) to your overall EPS. Otherwise, **cease all investment** on the old planet and dedicate resources entirely to the new, higher-efficiency planet."
      },
      {
        "value": "newbie-common-errors",
        "question": "[Newbie Pain Points] What are the common errors that lead to low production efficiency, and how can they be avoided?",
        "answer": "Common errors include **over-investing in manual click upgrades** beyond the early game, **neglecting the highest-tier automated building** due to its high initial cost, and **failing to upgrade the click rate multiplier** on the new planet."
      },
      {
        "value": "cost-prediction",
        "question": "[Planning] How to predict the energy cost needed for the next major unlock and plan upgrades accordingly?",
        "answer": "**Prediction Method**: Always keep a target: the next planet unlock or the next major technology tier. Calculate your **time-to-target** using your current Energy Per Second (EPS). Prioritize upgrades that reduce this time the most, maintaining focus on the target cost."
      },
      {
        "value": "unit-design-exponential-growth",
        "question": "[UI/UX] How is the energy unit design structured to help players understand exponential growth?",
        "answer": "**Design Insight**: The game uses a **tiered, condensed unit system** (e.g., Thousands, Millions, Billions, Trillions) that visually and numerically communicates the rapidly increasing scale. Seeing the unit change reinforces the feeling of massive, exponential growth achieved through automation."
      },
      {
        "value": "technical-lag-solutions",
        "question": "[Troubleshooting] What are the common solutions for lag and calculation delay?",
        "answer": "**Official Solution**: Lag often results from intensive background calculations. The solution is to **close unnecessary background applications/tabs** and ensure you are running the **latest version of the game** to utilize optimized calculation libraries."
      },
      {
        "value": "save-data-loss-prevention",
        "question": "[Data Integrity] How to prevent save data loss during planetary unlocks or data synchronization?",
        "answer": "**Prevention Guide**: Regularly **back up your game data** using the official save export function. Ensure your **network connection is stable** before initiating a planetary unlock, as this is a critical synchronization point."
      },
      {
        "value": "ui-strategy-optimization",
        "question": "[UI/UX] How should the UI be designed to allow players to clearly see each planet's contribution for strategic optimization?",
        "answer": "**Optimal UI Design**: The UI should feature a **Master Dashboard** that clearly displays the **EPS contribution of each unlocked planet** as a percentage of total EPS. This allows players to instantly identify and focus investment on the most underperforming or highest potential planets."
      }
    ]
  }



};


