// app/blood-money/content.ts
export interface GameContent {
  metadata: {
    title: string;
    description: string;
    url: string;
  };
  introduction: {
    title: string;
    description: string;
    learningObjectives: string[];
  };
  endings: Ending[];
  features: {
    highROI: Feature[];
    lowROI: Feature[];
    moneyCap: {
      title: string;
      description: string;
      tip: string;
    };
  };
  faqs: FAQ[];
  conclusion: string;
}

export interface Ending {
  title: string;
  icon: string;
  requirements: string[];
  tip: string;
  type: 'good' | 'bad' | 'normal';
}

export interface Feature {
  title: string;
  cost: string;
  roi: string;
  description: string;
  type: 'high' | 'low';
  strategy?: string;
  issue?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const bloodMoneyContent: GameContent = {
  metadata: {
    title: "BLOODMONEY! Ultimate Guide: Unlock All Endings, Maximize Upgrades, and Navigate Moral Choices",
    description: "Complete guide to unlock all three endings, maximize ROI with strategic upgrades, and navigate moral choices in BLOODMONEY! dark clicker game",
    url: "/blood-money"
  },

  introduction: {
    title: "Introduction",
    description: "BLOODMONEY! is a dark and thrilling clicker game where your earnings and decisions are tightly tied to moral choices. Each path in the game offers a unique experience based on the upgrades you choose and the way you interact with Harvey, the central character. In this guide, we'll cover how to unlock all three endings, the best upgrades for maximizing return on investment (ROI), and the moral decisions that will impact your journey.",
    learningObjectives: [
      "Learn how to unlock the Good Ending, Bad Ending, and Normal Ending",
      "Discover the best upgrades for maximizing your profits and ROI",
      "Understand how moral choices affect the story and your ending"
    ]
  },

  endings: [
    {
      title: "Good Ending (Moral Path)",
      icon: "🥇",
      requirements: [
        "Total income must reach $25,000",
        "No cruel upgrades: Do not purchase or use scissors, knives, matches, or guns",
        "Only use harmless tools for upgrades, such as feathers and needles",
        "Harvey must not suffer deadly or moderate injuries",
        "At the end of the game, Harvey will bless the player and leave peacefully"
      ],
      tip: "The Good Ending is the hardest to unlock, requiring patience and ethical upgrades. It reflects a sense of morality and restraint, making it a rewarding but challenging path.",
      type: "good",
    },
    {
      title: "Bad Ending (Brutal Path)",
      icon: "💀",
      requirements: [
        "Purchase all cruel weapons, including the gun",
        "Use the gun to kill Harvey",
        "Total income must reach or exceed $25,000",
        "The ending reveals that the player earned money through violent means and ultimately escapes the scene"
      ],
      tip: "The Bad Ending provides quick profits but comes at the cost of humanity. It is the most straightforward and fastest path but leaves a sense of emptiness.",
      type: "bad",
    },
    {
      title: "Normal Ending (Balanced Path)",
      icon: "⚖️",
      requirements: [
        "Purchase scissors, but do not upgrade to knives or higher",
        "Cause non-lethal moderate harm to Harvey",
        "Reach or exceed $25,000 in total income",
        "The ending shows the player facing legal consequences but not killing Harvey"
      ],
      tip: "The Normal Ending offers a middle ground. While it involves some violence, it doesn't lead to the complete moral downfall seen in the Bad Ending. It provides a balanced yet flawed conclusion.",
      type: "normal",
    }
  ],

  features: {
    highROI: [
      {
        title: "Scissors",
        cost: "Investment: $500",
        roi: "ROI: 30%",
        description: "A strong early-game upgrade to maximize profits.",
        type: "high",
        strategy: "Returns approximately 10x more than feathers. A strong early-game upgrade to maximize profits."
      },
      {
        title: "Matches",
        cost: "Investment: $8,000",
        roi: "High ROI",
        description: "Mid-game investment for a noticeable boost in earnings.",
        type: "high",
        strategy: "Significant increase in income. Mid-game investment for a noticeable boost in earnings."
      },
      {
        title: "Gun",
        cost: "Investment: $30,000",
        roi: "Highest ROI",
        description: "Highest profits of all weapons, but unlocks the Bad Ending.",
        type: "high",
        strategy: "Highest profits but locks you into the Bad Ending. Best for those aiming for the Bad Ending due to its explosive income potential."
      }
    ],
    lowROI: [
      {
        title: "Feathers",
        cost: "Cost: $50",
        roi: "Low ROI",
        description: "Cheap but don't provide enough value for long-term investment.",
        type: "low",
        issue: "Very low returns, slow progression"
      },
      {
        title: "Early Automation Devices",
        cost: "Cost: Varies",
        roi: "Poor ROI",
        description: "Offer poor cost-to-benefit ratio in the early game.",
        type: "low",
        issue: "These upgrades offer a poor cost-to-benefit ratio in the early game, slowing down your progress.",
        strategy: "Avoid overinvesting in automation too early."
      },
      {
        title: "Knife and Matches",
        cost: "Cost: Varies",
        roi: "Risk: Bad Ending",
        description: "Purchasing these too early locks you into the Bad Ending path.",
        type: "low",
        issue: "Purchasing these too early locks you into the Bad Ending path.",
        strategy: "Avoid these upgrades unless aiming for the Bad Ending."
      }
    ],
    moneyCap: {
      title: "Money Cap and Diminishing Returns Mechanism",
      description: "After an investment of around $10,000, the returns from the same upgrades start to diminish significantly.",
      tip: "Diversify your upgrades across multiple tools to maintain steady income growth and avoid plateauing."
    }
  },

  faqs: [
    {
      question: "How to Reset the Game or Start a New Ending Path?",
      answer: "Manual Reset: The game does not have an automatic reset feature. To reset, manually clear your game save data. Multiple Saves: Players can use multiple save files to experiment with different endings without resetting their progress. Switching Paths: Different paths are locked based on which upgrades you purchase, so you can switch routes without starting over by simply altering your upgrade choices."
    },
    {
      question: "Is There a Cheat Code or Promo Code?",
      answer: "No Official Cheats: There are no official cheat codes or promo codes available for BLOODMONEY!. Player Community Feedback: The community has not discovered any working cheat codes."
    },
    {
      question: "Does BLOODMONEY! Support Offline Income?",
      answer: "No Offline Earnings: The game does not provide offline income. You must keep interacting with the game to progress, making it more suited for active players rather than idle gameplay."
    },
    {
      question: "How Does Harvey's Pain Level Affect the Ending?",
      answer: "Pain Level Impact: Harvey's pain level accumulates based on the weapons you use. Higher pain levels lead to the Bad Ending, while lower pain levels favor the Good Ending. Story and Dialogue: The pain level also affects the storyline, dialogue, and the final moments between you and Harvey."
    }
  ],

  conclusion: "Whether you choose the Good Ending for its ethical challenges, the Bad Ending for the fastest profits, or the Normal Ending for a balanced approach, BLOODMONEY! offers a deeply engaging experience that tests both your strategic thinking and moral compass. Maximize your ROI with smart upgrades, but remember that your decisions will shape the story. Will you choose the path of greed or the path of virtue?"
};