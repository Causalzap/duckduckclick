export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "duck-duck-clicker": {
    id: "duck-duck-clicker",
    title: "Duck Duck Clicker",
    description: "The original free online 3D action game with explosive physics-based gameplay. Control crazy cattle and battle it out!",
    image: "/assets/duck-duck-clicker-howto.png",
    url: "/",
  },
  "snow-rider-3d": {
  id: "snow-rider-3d",
  title: "Snow Rider 3D",
  description: "Experience thrilling winter action with Snow Rider 3D! Ride through snowy tracks, avoid obstacles, and race to the finish line. Enjoy the snow-covered adventure online, no downloads required!",
  image: "/assets/snow-rider-3d/snow-rider-3d.jpeg",
  url: "/snow-rider-3d",
  },
  "speed-run-3d": {
  id: "speed-run-3d",
  title: "Speed Run 3D",
  description: "Play Speed Run 3D - a fast-paced free online parkour game! Dash, jump, and sprint through challenging 3D obstacle courses to reach the finish line. No downloads required.",
  image: "/assets/speed-run-3d/speed-run-3d-logo.jpg",
  url: "/speed-run-3d",
  },
  "summer-rider-3d": {
  id: "summer-rider-3d",
  title: "Summer Rider 3D",
  description: "Experience the thrill of summer riding in this fun 3D racing game! Race through sunny tracks, avoid obstacles, and collect power-ups. Play online for free, no download required!",
  image: "/assets/summer-rider-3d/summer-rider-3d-logo.jpg",
  url: "/summer-rider-3d",
  },
  "princess-run-3d": {
  id: "princess-run-3d",
  title: "Princess Run 3D",
  description: "Experience exciting endless running action with a stylish princess theme. Dodge obstacles, collect outfits, and enjoy the adventure. Play online for free, no download required!",
  image: "/assets/princess-run-3d/princess-run-3d-logo.jpg",
  url: "/princess-run-3d",
  },
  "traffic-cop-3d": {
  id: "traffic-cop-3d",
  title: "Traffic Cop 3D",
  description: "Step into the shoes of a traffic cop in this fast-paced action game! Manage traffic, direct vehicles, and prevent accidents in busy city streets. No downloads required – play instantly in your browser!",
  image: "/assets/traffic-cop-3d/traffic-cop-3d-logo.jpg",
  url: "/traffic-cop-3d",
  },
  "mahjong-3d-match": {
  id: "mahjong-3d-match",
  title: "Mahjong 3D Match",
  description: "Play Mahjong 3D Match, a fun and challenging 3D Mahjong game! Match tiles in a 3D environment, solve puzzles, and enjoy a relaxing yet engaging gameplay experience. Play online for free, no downloads required!",
  image: "/assets/mahjong-3d-match/mahjong-3d-match-logo.jpg",
  url: "/mahjong-3d-match",
  },
  "screw-sort-3d": {
    id: "screw-sort-3d",
    title: "Screw Sort 3D: Screw Puzzle",
    description: "Create amazing music beats with colorful characters in this fun interactive music game. Drag and drop to make music!",
    image: "/assets/screw-sort-3d/screw-sort-3d.webp",
    url: "/screw-sort-3d",
  },
  "moscow-metro-driver-3d": {
    id: "moscow-metro-driver-3d",
    title: "Moscow Metro Driver 3D",
    description: "Experience the thrill of driving a metro train in Moscow! Take control of the train, navigate through underground tunnels, and manage the station stops. Play online for free, no downloads required!",
    image: "/assets/moscow-metro-driver-3d/moscow-metro-driver-3d-logo.jpg",
    url: "/moscow-metro-driver-3d",
  },
  "merge-3d-match-3-balloons": {
  id: "merge-3d-match-3-balloons",
  title: "Merge 3D - Match 3 Balloons",
  description: "Merge and match 3D balloons in this fun and relaxing puzzle game! Pop balloons, solve puzzles, and enjoy the colorful and challenging gameplay. Play online for free, no downloads required!",
  image: "/assets/merge-3d-match-3-balloons/merge-3d-match-3-balloons-logo.jpg",
  url: "/merge-3d-match-3-balloons",
}
,
  "jelly-math-3d": {
  id: "jelly-math-3d",
  title: "Jelly Math 3D",
  description: "Test your math skills with Jelly Math 3D! Solve fun and challenging math puzzles in a colorful, jelly-themed 3D environment. Play online for free, no downloads required!",
  image: "/assets/jelly-math-3d/jelly-math-3d-logo.jpg",
  url: "/jelly-math-3d",
},
"drift-hunters": {
  id: "drift-hunters",
  title: "Drift Hunters",
  description: "Master the art of drifting in Drift Hunters! Customize your car, master various tracks, and perform skillful drifts in this exciting 3D racing simulation. Play online for free, no downloads required!",
  image: "/assets/drift-hunters/drift-hunters-logo.jpeg",
  url: "/drift-hunters",
},
"rolling-ball-3d": {
  id: "rolling-ball-3d",
  title: "Rolling Ball 3D",
  description: "Keep the ball rolling in Rolling Ball 3D! Steer across ramps, dodge obstacles, and collect diamonds in this addictive 3D endless runner. Unlock new balls and power-ups as you progress. Play free online, no downloads required!",
  image: "/assets/rolling-ball-3d/rolling-ball-3d-logo.jpeg",
  url: "/rolling-ball-3d"
}
,
"stickman-hook": {
  "id": "stickman-hook",
  "title": "Stickman Hook",
  "description": "Swing through levels and overcome obstacles in Stickman Hook! Control a stickman using a hook to swing across various challenging levels. Master the art of timing and physics in this fun and addictive game. Play free online, no downloads required!",
  "image": "/assets/stickman-hook/stickman-hook-logo.webp",
  "url": "/stickman-hook"
}
,
"hexa-sort-3d": {
  "id": "hexa-sort-3d",
  "title": "Hexa Sort 3D",
  "description": "Experience the ultimate color-matching puzzle game in Hexa Sort 3D! Sort and stack colorful hexagonal blocks to complete challenging levels. Use strategic thinking, power-ups, and smooth 3D visuals to clear the board. Play free online, no downloads required!",
  "image": "/assets/hexa-sort-3d/hexa-sort-3d-log.webp",
  "url": "/hexa-sort-3d"
}
,
"extreme-run-3d": {
  "id": "extreme-run-3d",
  "title": "Extreme Run 3D",
  "description": "Experience the thrill of parkour in Extreme Run 3D! Navigate neon-lit tracks, dodge obstacles, and master the art of speed and precision. Face challenging levels and test your reflexes. Play free online, no downloads required!",
  "image": "/assets/extreme-run-3d/extreme-run-3d-logo.webp",
  "url": "/extreme-run-3d"
},
"capybara-clicker": {
  "id": "capybara-clicker",
  "title": "Capybara Clicker",
  "description": "Play Capybara Clicker – an addictive idle clicker game where you generate capybaras, upgrade your click power, and unlock unique skins. Enjoy relaxing gameplay and no downloads required! Play free online.",
  "image": "/assets/capybara-clicker/capybara-clicker-logo.jpeg",
  "url": "/capybara-clicker"
},
"planet-clicker": {
  "id": "planet-clicker",
  "title": "Planet Clicker",
  "description": "Play Planet Clicker – an engaging idle clicker game where you generate energy by clicking on planets, unlock upgrades, and automate energy production. Explore new planets like Earth, Mars, and Venus, and enjoy relaxing gameplay. No downloads required! Play free online.",
  "image": "/assets/planet-clicker/planet-clicker-logo.jpeg",
  "url": "/planet-clicker"
},

};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



