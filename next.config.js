/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/snow-rider-3d',
        destination: '/game/snowrider3d/index.html',
      },
      {
        source: '/speed-run-3d',
        destination: '/game/speedrun3d/index.html',
      },
      {
        source: '/summer-rider-3d',
        destination: '/game/summer-rider-3d/index.html',
      },
      {
        source: '/princess-run-3d',
        destination: '/game/princess-run-3d/index.html',
      },
      {
        source: '/traffic-cop-3d',
        destination: '/game/traffic-cop-3d/index.html',
      },
      {
        source: '/mahjong-3d-match',
        destination: '/game/mahjong-3d-match/index.html',
      },
      {
        source: '/screw-sort-3d',
        destination: '/game/screw-sort-3d/index.html',
      },
      {
        source: '/moscow-metro-driver-3d',
        destination: '/game/moscow-metro-driver-3d/index.html',
      },
      {
        source: '/merge-3d-match-3-balloons',
        destination: '/game/merge-3d-match-3-balloons/index.html',
      },
      {
        source: '/jelly-math-3d',
        destination: '/game/jelly-math-3d/index.html',
      },
      {
        source: '/drift-hunters',
        destination: '/game/drift-hunters/index.html',
      },
      {
        source: '/rolling-ball-3d',
        destination: '/game/rolling-ball-3d/index.html',
      },
      {
        source: '/stickman-hook',
        destination: '/game/stickman-hook/index.html',
      },
      {
        source: '/hexa-sort-3d',
        destination: '/game/hexa-sort-3d/index.html',
      },
      {
        source: '/extreme-run-3d',
        destination: '/game/extreme-run-3d/index.html',
      },
      {
        source: '/capybara-clicker',
        destination: '/game/capybara-clicker/index.html',
      },
      {
        source: '/blood-money',
        destination: '/game/blood-money/index.html',
      },
      {
        source: '/traffic-jam-3d',
        destination: '/game/traffic-jam-3d/index.html',
      },
      {
        source: '/death-run-3d',
        destination: '/game/death-run-3d/index.html',
      },
      {
        source: '/candy-clicker-2',
        destination: '/game/candy-clicker-2/index.html',
      },
      {
        source: '/bubble-woods',
        destination: '/game/bubble-woods/index.html',
      },
    ]
  }
};

module.exports = nextConfig;


