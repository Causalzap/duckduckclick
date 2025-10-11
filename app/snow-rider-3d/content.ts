import { content as globalContent } from "@/config/content";

export const snowRiderContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Snow Rider 3D",
    game: {
      url: 'https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/',
      title: "snowrider3d",
      externalUrl: '/game/snow-rider-3d/index.html',
      iframe: {
        // 确保 iframe 的 URL 指向正确的域名并且带有正确的 referrer URL
        src: "https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/", // 修改为你的实际域名
        width: 800,
        height: 600,
        scrolling: "none",
        frameborder: 0,
        sandbox: "allow-same-origin" // 允许访问同源资源
      }
    }
  },

  // 特性部分配置
  "features": {
    "title": "Snow Rider 3D: Thrilling Features You Can’t Miss!",
    "items": [
      {
        "title": "Dynamic Multiplier Chain",
        "description": "Rack up insane scores with a continuous chain of perfect dodges and extreme close calls! Every successful move fuels your adrenaline, as your score skyrockets with each near-miss."
      },
      {
        "title": "3D High-Speed Environment Generation",
        "description": "Goodbye boring, repetitive tracks! Real-time, dynamic obstacles create a completely unique challenge every time. Your skills will never stop evolving in this unpredictable, action-packed ride."
      },
      {
        "title": "Customizable Sleds with Advanced Attributes",
        "description": "Unlock and upgrade powerful sleds with unique abilities and hidden bonuses. Choose from speed or defense-based sleds, perfectly suited to your playstyle, and maximize your potential to dominate the slopes and crush the leaderboards!"
      }
    ]
  },

  whatIs: {
    title: "Snow Rider 3D: The Most Thrilling Infinite Snowboarding Adventure Ever!",
    description: "Tired of slow-paced casual games? Dive into the world of Snow Rider 3D and experience the adrenaline rush of 3D high-speed sliding and precise dodging!\n\n" +
      "Challenge your skills with precision gameplay, rack up score multipliers, and aim for the top of the global leaderboard. \n\n" +
      "💥 Click Play now and start your snowboarding adventure!\n\n"+ 

      "**How Does Snow Rider 3D Surpass Traditional Endless Runner Games?**\n\n" +
      "Snow Rider 3D takes the fast-paced essence of classic endless runners and enhances it with advanced 3D environment dynamics and an upgraded sled customization system.\n\n Unlike Temple Run and Subway Surfers, our unique precision control system allows players to earn extra score multipliers through \"edge brushing\" and \"perfect jumps,\" making every micro-move critical, rather than just simple left-right swipes. \n\nAdditionally, a variety of high-tier sleds offer permanent speed boosts and collision protection, making the game's challenge and replayability increase exponentially. \n\nHere, speed and precision are the keys to victory.",

    logo: {
      src: "/assets/snow-rider-3d/snow-rider-3d.jpeg",
      alt: "Snow Rider 3D Free Online Unblocked Game Logo"
    }
  },
  

  howToPlay: {
    title: "How to Play Snow Rider 3D Online Free: Master the Snowy Slopes!",
    description: "Playing Snow Rider 3D online is simple yet thrilling! Use your keyboard's left and right arrow keys to control your sled’s movement and avoid obstacles like trees, rocks, and huts. Use the up arrow key or spacebar to jump over obstacles and continue your high-speed run!\n\n" +
      "Collect colorful gifts along the path to increase your score and unlock new sleds, adding variety to your gameplay. Snow Rider 3D is an endless runner, so there is no finish line – keep sliding until you crash!\n\n" +
      "Stay focused and use your agility to dodge various obstacles while enjoying the excitement of breaking through wooden barriers. Some versions even allow you to perform jump tricks, so timing your jumps is crucial for added fun.\n\n" +
      "For the best experience, we recommend using a stable device and high-speed internet to ensure smooth gameplay in this addictive free browser game!",
    image: "/assets/snow-rider-3d/snow-rider-3d.jpg",
    imageAlt: "Snow Rider 3D Gameplay Guide - Controls for Free Online Unblocked Fun"
  },
  
  faq: {
    "title": "Snow Rider 3D: Ultimate Strategy Guide & Frequently Asked Questions (FAQ)",
    "items": [
      {
        "value": "High Score",
        "question": "What is the Best Long-Term Upgrade Path to Break Personal Records?",
        "answer": "**Deep Player Insight**: The long-term goal is to maximize the score multiplier cap. In the early game (0-1000 points), focus on upgrading initial distance to increase starting momentum. In the mid-game (1000-3000 points), prioritize upgrading the **'Coin Magnet'** to accelerate sled unlocking. In the late game (3000+ points), heavily invest in unlocking and enhancing the **'Final Score Multiplier'** cap, as this will directly influence your final ranking on the leaderboard. **Official Guide**: These targeted upgrades will optimize your snowboarding speed and rewards, helping you push beyond your limits."
      },
      {
        "value": "Mid-Game",
        "question": "Should I Buy a Speed Sled (e.g., Aurora) or a Control Sled (e.g., Pathfinder) First?",
        "answer": "**Official Strategy**: Adopt a 'save and leap' strategy. For beginners or conservative players, control sleds like the **'Pathfinder'** offer higher collision tolerance and more forgiving gameplay. Once you've crossed **2000 points** and feel confident, switch to speed-based sleds like **'Aurora,'** which allow you to trigger high-score multipliers faster and dominate the leaderboard with extreme velocity."
      },
      {
        "value": "Elite Secrets",
        "question": "What are the Top 3 Advanced Tricks Only Expert Snow Rider 3D Players Know?",
        "answer": "**1. Perfect Shave: Deep Player Insight:** This technique involves skimming along the edge of non-lethal obstacles to trigger a hidden 'shave bonus' that temporarily boosts your score multiplier. **(Requires close proximity to trees/rocks without collision.)**.\n\n 2.** Rhythm Jumps: Official Tip:** Jump in a consistent rhythm while speeding through the course. This helps you avoid making errors due to the overwhelming visual speed, giving you better control over timing and precision.\n\n 3. **Item Delay Release: Deep Player Insight:** Save your protection and acceleration items until **after reaching 3000 points.** Using them later will give you the greatest boost and maximize score multipliers for ultimate high scores."
      },
      {
        "value": "Beginner Tips",
        "question": "What are the Top 3 Mistakes New Players Make and How to Stop Crashing?",
        "answer": "1. **Focusing Only on Obstacles Right Below**: **Official Guide**: Train yourself to scan the horizon and plan ahead. Anticipate at least three upcoming moves, so you can react faster and avoid hesitation at high speeds. \n\n2. **Slowing Down in Acceleration Zones**: **Deep Player Insight**:Embrace the speed boost as a key to pushing higher scores. Use acceleration zones to safely increase your score, as they provide a crucial opportunity to trigger multipliers. \n\n3. **Using High-End Items Too Early**: **Official Strategy**:Save advanced protective items **(like the Shield Power-up)** until you are near your personal best score. Using them strategically at the right time will help you break your records and push past your limits more effectively."
      },
      {
        "value": "Fix Lag",
        "question": "How to Solve Common Technical Issues like Lagging Controls or Lost Progress?",
        "answer": "1. **Lag or Stuttering Controls**: **Official Solution**: Activate 'Low Graphics Mode' within the game settings to reduce lag. Additionally, use the latest versions of Chrome or Safari browsers for optimal performance.\n\n2. **Lost Progress or Saved Data**: **Official Tip**: Avoid clearing browser cookies and cache. Regularly back up your game progress to prevent loss. We recommend using cloud save options if available.\n\n3. **High Score Sharing Button Not Responding**: **Official Guide**: If the share button isn't working, try refreshing the page. Alternatively, manually screenshot your score and share it on social media to showcase your high score."
      }
    ]
  }
  
};
