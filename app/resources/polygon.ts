import { DAppType } from "./type";

export const polygonDApps: DAppType[] = [
  {
    dappId: 13,
    name: 'OpenSea',
    description: 'OpenSea is the first and largest peer-to-peer marketplace.',
    fullDescription: 'OpenSea is the first and largest peer-to-peer marketplace for crypto collectibles, which include gaming items, digital art, and other virtual goods backed by a blockchain.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/13/opensea-dapp-marketplaces-ethereum-logo_a3421ac6e32d529db3c8293f4cfa9bcd.png',
    website: 'https://opensea.io',
    chains: [
      'eip155:421611',
      'eip155:43114',
      'eip155:10',
      'eip155:42161',
      'eip155:1',
      'eip155:8217',
      'eip155:43114',
      'eip155:137',
      'eip155:250',
    ],
    categories: ['marketplaces'],
    socialLinks: [
      {
        title: 'discord',
        url: 'https://discord.gg/zAHt7Tb',
        type: 'discord',
      },
      {
        title: 'facebook',
        url: 'https://facebook.com/projectopensea',
        type: 'facebook',
      },
      {
        title: 'medium',
        url: 'https://medium.com/@opensea',
        type: 'medium',
      },
      {
        title: 'reddit',
        url: 'https://reddit.com/r/opensea',
        type: 'reddit',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/projectopensea',
        type: 'twitter',
      },
    ],
  },
  {
    dappId: 233,
    name: 'Blockchain Cuties',
    description: 'An NFT collectible game with adventures!',
    fullDescription: 'Cutest collectible game with adventures on 7 blockchains where you get to play with puppies, dragons, bear cubs, cats, and other real and fantasy creatures alike!',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/233/blockchaincuties-dapp-games-ethereum-logo_5c912cd893fc827dc32f052fea38b9bd.png',
    website: 'https://blockchaincuties.com/',
    chains: ['eip155:1', 'eip155:137', 'tron:728126428'],
    categories: ['games'],
    socialLinks: [
      {
        title: 'discord',
        url: 'https://discord.gg/C6KCEU7',
        type: 'discord',
      },
      {
        title: 'facebook',
        url: 'https://www.facebook.com/blockchaincuties/',
        type: 'facebook',
      },
      {
        title: 'instagram',
        url: 'https://www.instagram.com/blockchain_cuties/',
        type: 'instagram',
      },
      {
        title: 'medium',
        url: 'https://medium.com/@blockchaincutie',
        type: 'medium',
      },
      {
        title: 'other',
        url: 'https://t.me/blockchaincuties_en',
        type: 'other',
      },
      {
        title: 'reddit',
        url: 'https://www.reddit.com/user/blockchaincuties/',
        type: 'reddit',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/bcuties_jp',
        type: 'twitter',
      },
      {
        title: 'youtube',
        url: 'https://www.youtube.com/blockchaincuties',
        type: 'youtube',
      },
    ],

  },
  {
    dappId: 244,
    name: 'Decentraland',
    description: 'The first-ever virtual world owned by its users',
    fullDescription: 'Decentraland is a decentralized virtual reality platform powered by blockchain technology. Within the Decentraland platform, users can create, experience, and monetize their content and applications.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/244/decentraland-dapp-games-ethereum-logo_8fbd9c9cf48f0cb9809821d6d60a8025.png',
    website: 'https://decentraland.org/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['social'],
    socialLinks: [
      {
        title: 'blog',
        url: 'https://decentraland.org/blog',
        type: 'blog',
      },
      {
        title: 'discord',
        url: 'https://decentraland.org/discord',
        type: 'discord',
      },
      {
        title: 'github',
        url: 'https://github.com/decentraland',
        type: 'github',
      },
      {
        title: 'instagram',
        url: 'https://www.instagram.com/decentraland_foundation',
        type: 'instagram',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/decentraland',
        type: 'twitter',
      },
    ],

  },
  {
    dappId: 257,
    name: '0x Protocol',
    description: '0x is an open protocol that enables the peer-to-peer exchange of assets on the Ethereum blockchain.',
    fullDescription: '0x is an open protocol that enables the peer-to-peer exchange of assets on the Ethereum blockchain.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/257/0xprotocol-dapp-other-eth-logo_7e869e1e5fbe2b41499661ea503195bd.png',
    website: 'https://www.0x.org/',
    chains: [
      'eip155:421611',
      'eip155:43114',
      'eip155:42161',
      'eip155:42220',
      'eip155:1',
      'eip155:250',
      'eip155:43114',
      'eip155:137',
    ],
    categories: ['exchanges'],
    socialLinks: [
      {
        title: 'twitter',
        url: 'https://twitter.com/0xProject',
        type: 'twitter',
      },
    ],

  },
  {
    dappId: 328,
    name: 'AirSwap',
    description: 'AirSwap powers peer-to-peer trading.',
    fullDescription: 'AirSwap powers peer-to-peer trading. Using a decentralized request-for-quote (RFQ) protocol, AirSwap traders are protected from front-running and price slippage. AirSwap uses an open development process called AIP that you can participate in as a token holder.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/328/airswap-dapp-exchanges-eth-logo_72b6f772a82b13d0daed44a91b8c2624.png',
    website: 'https://www.airswap.io/',
    chains: ['eip155:421611', 'eip155:43114', 'eip155:42161', 'eip155:1', 'eip155:137'],
    categories: ['exchanges'],
    socialLinks: [
      {
        title: 'discord',
        url: 'https://chat.airswap.io/',
        type: 'discord',
      },
      {
        title: 'facebook',
        url: 'https://www.facebook.com/airswapio/',
        type: 'facebook',
      },
      {
        title: 'github',
        url: 'https://github.com/airswap',
        type: 'github',
      },
      {
        title: 'instagram',
        url: 'https://www.instagram.com/airswap',
        type: 'instagram',
      },
      {
        title: 'medium',
        url: 'https://medium.com/@airswap',
        type: 'medium',
      },
      {
        title: 'reddit',
        url: 'https://www.reddit.com/r/AirSwap/',
        type: 'reddit',
      },
      {
        title: 'telegram',
        url: 'https://t.me/airswap',
        type: 'telegram',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/airswap',
        type: 'twitter',
      },
    ],
  },
  {
    dappId: 623,
    name: '0xUniverse',
    description: '0xUniverse lets players build spaceships, explore the galaxy and colonize planets. You can buy, sell and trade your cryptocollectibles',
    fullDescription: '0xUniverse is the blockchain game where players can build spaceships, explore the galaxy, and colonize planets. The discoverers will extract resources and carry out research that allows them to conquer the remotest corners of the galaxy. In addition, players can jointly contribute to the story and unravel the mystery of the universe. Each planet is a digital collectible with a unique design and resources. With a finite number of planets to be discovered, the value of those richer in resources and population will increase over time. Enjoy the returns of your galactic investments as you play!',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/623/0xuniverse-dapp-games-eth-logo_2e2eda2e9ada24f5945d5e21187cbdac.png',
    website: 'https://0xuniverse.com',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['games'],
    socialLinks: [
      {
        title: 'discord',
        url: 'https://discord.gg/R8fwEPC',
        type: 'discord',
      },
      {
        title: 'facebook',
        url: 'https://www.facebook.com/0xUniverse',
        type: 'facebook',
      },
      {
        title: 'other',
        url: 'https://bitcointalk.org/index.php?topic=4436242',
        type: 'other',
      },
      {
        title: 'reddit',
        url: 'https://www.reddit.com/r/0xUniverse',
        type: 'reddit',
      },
      {
        title: 'telegram',
        url: 'https://t.me/OxUniverse',
        type: 'telegram',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/0xUniverse',
        type: 'twitter',
      },
    ],
  },
  {
    dappId: 917,
    name: 'My Crypto Heroes',
    description: 'The Time, money and passion you spent on the games will become your assets in this world.',

    fullDescription: 'The Time, money and passion you spent on the games will become your assets in this world. My Crypto Heroes is a blockchain game that has been ongoing since 2018. You can send heroes to dungeons and collect materials. Materials will be used in the Lab to create Extensions NFTs that you can use to make your heroes stronger or trade them. Win the battle with your strengthened team and aim for the top! You can also enjoy the content Rays Mining for beginners for free.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/917/mycryptoheroes-dapp-games-917-logo_538dcb03d1f8fac7df47023a231e6325.png',
    website: 'https://www.mycryptoheroes.net/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['games', 'collectibles'],
    socialLinks: [
      {
        title: 'discord',
        url: 'https://discord.gg/3z7QQCF',
        type: 'discord',
      },
      {
        title: 'medium',
        url: 'https://medium.com/mycryptoheroes',
        type: 'medium',
      },
      {
        title: 'telegram',
        url: 'https://t.me/MyCryptoHeroesOfficial',
        type: 'telegram',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/mycryptoheroes_',
        type: 'twitter',
      },
      {
        title: 'youtube',
        url: 'https://www.youtube.com/channel/UCAssoOQkhjparWM11EZGFLw',
        type: 'youtube',
      },
    ],

  },
  {
    dappId: 1254,
    name: 'RigoBlock',
    description: 'Swap, earn and interact with DeFi through Smart Pools.',
    fullDescription: 'RigoBlock is a protocol for asset management, streamlining interaction with DEXes and DeFi applications. Users create Smart Pools, which are capable of holding tokens on behalf of multiple wallets, and allow their operators to swap and earn on DeFi with easier interaction, fewer transactions than regular Dapps, and increased security.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/1254/rigoblock-dapp-defi-1254-logo_80ec75102679c3782fc8649d4a8b246d.png',
    website: 'https://app.rigoblock.com',
    chains: ['eip155:421611', 'eip155:42161', 'eip155:1', 'eip155:43114', 'eip155:137'],
    categories: ['exchanges', 'defi'],
    socialLinks: [
      {
        title: 'cmc',
        url: 'https://coinmarketcap.com/currencies/rigoblock/',
        type: 'cmc',
      },
      {
        title: 'coingecko',
        url: 'https://www.coingecko.com/en/coins/rigoblock',
        type: 'coingecko',
      },
      {
        title: 'discord',
        url: 'https://discord.gg/FXd8EU8',
        type: 'discord',
      },
      {
        title: 'github',
        url: 'https://github.com/RigoBlock',
        type: 'github',
      },
      {
        title: 'twitter',
        url: 'https://t.me/rigoblockprotocol',
        type: 'twitter',
      },
    ],

  },
  {
    dappId: 1528,
    name: '1inch Network',
    description: 'A distributed DeFi aggregator for various protocols on multiple chains.',

    fullDescription: 'The 1inch Network seamlessly unites multiple decentralized protocols, empowering users to perform efficient, user-friendly and secure operations in the Web3 space. The 1inch Network provides access to hundreds of liquidity sources across multiple blockchains. Its main components are the 1inch Aggregation Protocol, the 1inch Liquidity Protocol, the 1inch Limit Order Protocol and the 1inch Wallet – a fast and secure mobile application for storing, receiving, sending and swapping crypto assets. The 1inch Swap Engine, built on top of 1inch’s Aggregation Protocol and Limit Order Protocol, is a decentralized trading and matching system that connects DEX users with practically limitless liquidity. The 1inch Swap Engine executes trade orders using the Dutch auction model, providing more efficiency, flexibility and tunability than regular swaps or limit orders. Powered by the 1inch Swap Engine, Fusion mode enables users to swap tokens without paying any network fees and at the most favorable rates. In addition, Fusion mode offers users extra MEV protection. All swaps in Fusion mode are executed by resolvers – professional traders, who use the most sophisticated and efficient ways of protecting users’ swaps from MEV.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/1528/1inchexchange-dapp-exchanges-ethereum-logo_855963bbf18d4c089e92160b47b43342.png',
    website: 'https://app.1inch.io',
    chains: [
      'eip155:421611',
      'eip155:1313161554',
      'eip155:43114',
      'eip155:42161',
      'eip155:1',
      'eip155:250',
      'eip155:8217',
      'eip155:43114',
      'eip155:137',
      'eip155:42161',
    ],
    categories: ['exchanges', 'defi'],
    socialLinks: [
      {
        title: 'discord',
        url: 'https://discord.com/invite/1inch',
        type: 'discord',
      },
      {
        title: 'facebook',
        url: 'https://www.facebook.com/1inchNetwork',
        type: 'facebook',
      },
      {
        title: 'github',
        url: 'https://github.com/1inch',
        type: 'github',
      },
      {
        title: 'medium',
        url: 'https://blog.1inch.io',
        type: 'medium',
      },
      {
        title: 'other',
        url: 'https://t.me/OneInchNetwork',
        type: 'other',
      },
      {
        title: 'reddit',
        url: 'https://www.reddit.com/r/1inch/',
        type: 'reddit',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/1inch',
        type: 'twitter',
      },
      {
        title: 'youtube',
        url: 'https://www.youtube.com/c/1inch-network',
        type: 'youtube',
      },
    ],

  },
  {
    dappId: 1549,
    name: 'The Sandbox',
    description: 'Play, Create, Own, and Govern a virtual world made by players. Create your Avatar now and enter the Metaverse!',

    fullDescription: 'A Decentralized Gaming Platform Made By Players Take your creative freedom to the next level & monetize it in the blockchain! Play, Create & Earn! The Sandbox is the prime metaverse location that has been fueling the recent growth of virtual real-estate demand, having partnered with major IPs and brands including The Walking Dead, Atari, Rollercoaster Tycoon, Care Bears, The Smurfs, Shaun the Sheep, and Binance. Building on existing The Sandbox IP that has more than 40 million global installs on mobile, The Sandbox metaverse offers players and creators a decentralized and intuitive platform to create immersive 3D worlds and game experiences and to safely store, trade, and monetize their creations. For more information, please visit www.sandbox.game and follow the regular updates on Twitter, Medium, and Discord.',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/1549/thesandbox-dapp-games-eth-logo_599758faff1fae65fe4ee675dc616799.png',
    website: 'https://www.sandbox.game/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['games'],
    socialLinks: [
      {
        title: 'discord',
        url: 'https://discordapp.com/invite/vAe4zvY',
        type: 'discord',
      },
      {
        title: 'facebook',
        url: 'https://www.facebook.com/TheSandboxGame/',
        type: 'facebook',
      },
      {
        title: 'instagram',
        url: 'https://www.instagram.com/thesandboxgame/',
        type: 'instagram',
      },
      {
        title: 'medium',
        url: 'https://medium.com/sandbox-game',
        type: 'medium',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/thesandboxgame',
        type: 'twitter',
      },
      {
        title: 'youtube',
        url: 'https://youtu.be/XRnUXQyVANE',
        type: 'youtube',
      },
    ],

  },
  {
    dappId: 3655,
    name: 'League of Kingdoms',
    description: "League of Kingdoms is the world's first free-to-play, MMO war strategy game on the blockchain.",

    fullDescription: "League of Kingdoms is a free-to-play, MMO war strategy game on the blockchain. The main gameplay of League of Kingdoms is similar to a traditional RTS (Real-time strategy), but it is powered by blockchain technology and ownership is central to the core concepts of the game. As an alliance-based tactical strategy game, players can build kingdoms, raise armies, form alliances, and compete on the battlefields. All the lands in the game are non-fungible tokens and can be owned by users. Players do not require any prior experience or knowledge with cryptocurrencies to play the game and do not need to own Land NFTs to farm resources that can be tokenized into NFTs. With the adoption of the LOKA token, League of Kingdoms is enjoying greater player adoption, inclusion, and activation as players can effectively own, propose, vote and earn on the game platform. LOKA is League of Kingdoms' native governance token and will be utilized as the currency inside the League of Kingdoms game franchise and will be utilized for all in-game store purchases, such as purchasing packages, skins, goods. The $LOKA token will be used as an NFT booster to create, upgrade, and acquire special NFT assets, including but not limited to upcoming Drago and Skin NFTs. The LOKA token will be also used to propose and vote on on-chain governance proposals to determine future features, policies, content, and/or parameters of the game. Last but not least LOKA tokens can also be earned by playing the in-game competition and/or achieving special tasks — for example after each Continent vs. Continent (CvC) battle, winners will be rewarded with LOKA tokens (and potentially rarer NFT item rewards!) depending on the performance during the battle.",

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/3655/leagueofkingdoms-dapp-games-ethereum-logo_6a7a8a66b142f32e2d80950c5c190529.png',
    website: 'https://leagueofkingdoms.com/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['games'],
    socialLinks: [
      {
        title: 'discord',
        url: 'https://discord.gg/leagueofkingdoms',
        type: 'discord',
      },
      {
        title: 'facebook',
        url: 'https://www.facebook.com/LofK.Official',
        type: 'facebook',
      },
      {
        title: 'medium',
        url: 'https://medium.com/league-of-kingdoms-eng',
        type: 'medium',
      },
      {
        title: 'telegram',
        url: 'https://t.me/LoK_global',
        type: 'telegram',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/LeagueKingdoms',
        type: 'twitter',
      },
      {
        title: 'youtube',
        url: 'https://www.youtube.com/channel/UCmZ3aXg0v5-LTk9yRd81y2A',
        type: 'youtube',
      },
    ],

  },
  {
    dappId: 8700,
    name: 'Mini Utopia',
    description: 'Miniutopia is an NFT Eco-System for users of Polygon, BSC, ETH, SOL, Cardano, etc.',

    fullDescription: 'Miniutopia is an NFT Eco-System for users of Polygon, BSC, ETH, SOL, Cardano, etc. It’s the first and only platform designed to use a Voting System to Determine the Price of an NFT Not the Creators determining the price. This virtually eliminates the risk of impermanent loss to NFT Buyers. For voters, Mini Utopia is the only DeFi protocol that can allow Voters to earn Incentives for participating in the ecosystem which lowers liquidation risk.',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/8700/miniutopia-dapp-collectibles-matic-logo_9cfd60ae334d4b10698aafa4960c3303.png',
    website: 'https://www.miniutopia.co',
    chains: ['eip155:137'],
    categories: ['high-risk'],
    socialLinks: [
      {
        title: 'telegram',
        url: 'https://t.me/miniutopiatoken',
        type: 'telegram',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/miniutopiatoken',
        type: 'twitter',
      },
    ],
  },
  {
    dappId: 9089,
    name: 'HunnyPlay',
    description: 'The 1st Online Casino Built on BNB Chain Yield Aggregator',

    fullDescription: 'HunnyPlay aims to be the most engaging and fun iGaming destination. We are developing a brand new and unprecedented gamified farming playground ♠️♥️♣️♦️🎰🎲 where every user can enjoy high yields and exciting games at the same time.',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/9089/hunnyplay-dapp-gambling-bsc-logo_a78d3b0b2bcbf7e5d6dfcedde55f0b91.png',
    website: 'https://hunnyplay.io',
    chains: ['eip155:43114', 'eip155:42161', 'eip155:1', 'eip155:250', 'eip155:137', 'eip155:501'],
    categories: ['gambling'],
    socialLinks: [
      {
        title: 'blog',
        url: 'https://blog.hunny.finance/',
        type: 'blog',
      },
      {
        title: 'instagram',
        url: 'https://www.instagram.com/hunnyfinance/',
        type: 'instagram',
      },
      {
        title: 'medium',
        url: 'https://medium.com/hunnyfinance',
        type: 'medium',
      },
      {
        title: 'reddit',
        url: 'https://www.reddit.com/r/HunnyFinance/',
        type: 'reddit',
      },
      {
        title: 'telegram',
        url: 'https://t.me/HunnyPlay',
        type: 'telegram',
      },
      {
        title: 'tiktok',
        url: 'https://www.tiktok.com/@hunnyfinance',
        type: 'tiktok',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/HunnyPlay_',
        type: 'twitter',
      },
      {
        title: 'youtube',
        url: 'https://www.youtube.com/@hunnyplay',
        type: 'youtube',
      },
    ],

  }
]
