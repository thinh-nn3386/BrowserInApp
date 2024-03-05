import { DAppType } from './type'

export const bnbChainDApps: DAppType[] = [
  {
    dappId: 13,
    name: 'OpenSea',
    description: 'OpenSea is the first and largest peer-to-peer marketplace.',
    fullDescription:
      'OpenSea is the first and largest peer-to-peer marketplace for crypto collectibles, which include gaming items, digital art, and other virtual goods backed by a blockchain.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/13/opensea-dapp-marketplaces-ethereum-logo_a3421ac6e32d529db3c8293f4cfa9bcd.png',
    website: 'https://opensea.io',
    chains: [
      'eip155:421611',
      'eip155:43114',
      'eip155:10',
      'eip155:42161',
      'eip155:1',
      'eip155:8217',
      'eip155:250',
      'eip155:137',
      'eip155:501',
    ],
    categories: ['marketplaces'],
  },
  {
    dappId: 257,
    name: '0x Protocol',
    description:
      '0x is an open protocol that enables the peer-to-peer exchange of assets on the Ethereum blockchain.',
    fullDescription:
      '0x is an open protocol that enables the peer-to-peer exchange of assets on the Ethereum blockchain.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/257/0xprotocol-dapp-other-eth-logo_7e869e1e5fbe2b41499661ea503195bd.png',
    website: 'https://www.0x.org/',
    chains: [
      'eip155:421611',
      'eip155:43114',
      'eip155:42161',
      'eip155:42220',
      'eip155:1',
      'eip155:250',
      'eip155:8217',
      'eip155:137',
    ],
    categories: ['exchanges'],
  },
  {
    dappId: 328,
    name: 'AirSwap',
    description: 'AirSwap powers peer-to-peer trading.',
    fullDescription:
      'AirSwap powers peer-to-peer trading. Using a decentralized request-for-quote (RFQ) protocol, AirSwap traders are protected from front-running and price slippage. AirSwap uses an open development process called AIP that you can participate in as a token holder.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/328/airswap-dapp-exchanges-eth-logo_72b6f772a82b13d0daed44a91b8c2624.png',
    website: 'https://swap.eth.limo/',
    chains: ['eip155:421611', 'eip155:43114', 'eip155:42161', 'eip155:1', 'eip155:137'],
    categories: ['exchanges'],
  },
  {
    dappId: 764,
    name: 'Summer.fi',
    description:
      'DeFi made simple and secure: take advantage of powerful automation strategies and user-friendly UX across multiple protocols and layers.',
    fullDescription:
      'Summer.fi is a platform for decentralized finance. It can be used to borrow stablecoins against users’ favorite cryptocurrencies, increase exposure against them using Multiply, or Earn a competitive yield. This can be done across multiple protocols and Layers — all in one place. Summer.fi’s mission is to provide the most trusted entry point to deploy capital into DeFi. The team is made of passionate thinkers and builders driven to create a better user experience for all while being able to maximize returns.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/764/oasisapp-dapp-defi-764-logo_1e5311680e6fdd95205b13c77d6e2ff0.png',
    website: 'https://summer.fi/',
    chains: [
      'eip155:1313161554',
      'eip155:43114',
      'eip155:42161',
      'eip155:26625',
      'eip155:1',
      'eip155:250',
      'eip155:1287',
      'eip155:1285',
      'eip155:420',
    ],
    categories: ['defi'],
  },
  {
    dappId: 1254,
    name: 'RigoBlock',
    description: 'Swap, earn and interact with DeFi through Smart Pools.',
    fullDescription:
      'RigoBlock is a protocol for asset management, streamlining interaction with DEXes and DeFi applications. Users create Smart Pools, which are capable of holding tokens on behalf of multiple wallets, and allow their operators to swap and earn on DeFi with easier interaction, fewer transactions than regular Dapps, and increased security.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/1254/rigoblock-dapp-defi-1254-logo_80ec75102679c3782fc8649d4a8b246d.png',
    website: 'https://app.rigoblock.com',
    chains: ['eip155:421611', 'eip155:42161', 'eip155:1', 'eip155:43114', 'eip155:137'],
    categories: ['exchanges', 'defi'],
  },
  {
    dappId: 1528,
    name: '1inch Network',
    description: 'A distributed DeFi aggregator for various protocols on multiple chains.',
    fullDescription:
      'The 1inch Network seamlessly unites multiple decentralized protocols, empowering users to perform efficient, user-friendly and secure operations in the Web3 space. The 1inch Network provides access to hundreds of liquidity sources across multiple blockchains. Its main components are the 1inch Aggregation Protocol, the 1inch Liquidity Protocol, the 1inch Limit Order Protocol and the 1inch Wallet – a fast and secure mobile application for storing, receiving, sending and swapping crypto assets. The 1inch Swap Engine, built on top of 1inch’s Aggregation Protocol and Limit Order Protocol, is a decentralized trading and matching system that connects DEX users with practically limitless liquidity. The 1inch Swap Engine executes trade orders using the Dutch auction model, providing more efficiency, flexibility and tunability than regular swaps or limit orders. Powered by the 1inch Swap Engine, Fusion mode enables users to swap tokens without paying any network fees and at the most favorable rates. In addition, Fusion mode offers users extra MEV protection. All swaps in Fusion mode are executed by resolvers – professional traders, who use the most sophisticated and efficient ways of protecting users’ swaps from MEV.',
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
  },
  {
    dappId: 1627,
    name: 'PoolTogether',
    description:
      "Win by saving. PoolTogether is a crypto-powered savings protocol based on Premium Bonds. Save money and have a chance. The world's savings protocol, run by you.",
    fullDescription:
      "PoolTogether is a decentralized and open-source blockchain protocol for prize-linked savings. Replicating 'prize-linked savings accounts', all depositors are offered a chance to win prizes without needing to risk their deposited funds. This is possible because prizes are made up of the interest that accrues on all deposited funds. Users deposit into the network. Yield accrues on all deposits. The yield is randomly awarded as prizes to the users. The PoolTogether protocol has been live for over 3 years and distributed over $5 million in prizes to depositors. The luckiest winner so far deposited $74 and won over $40,000. PoolTogether is one of the first and most widely used decentralized finance applications. It helps people save money by giving them the chance to win prizes.",
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/1627/pooltogether-dapp-defi-ethereum-logo_c7c28edc82fc4ace1c008c97e9230bee.png',
    website: 'https://pooltogether.com',
    chains: [
      'eip155:43114',
      'eip155:42161',
      'eip155:42220',
      'eip155:1',
      'eip155:43114',
      'eip155:137',
    ],
    categories: ['defi'],
  },
  {
    dappId: 1699,
    name: 'ParaSwap',
    description: 'ParaSwap is the fastest DEX aggregator for traders.',
    fullDescription:
      'ParaSwap is the fastest DEX aggregator for traders and dApps. The software is made for dApps and traders who need swaps and payment capabilities while getting the best market rates and cheaper gas fees. Any dApp or trading software can plug into ParaSwap using our API or open-source SDK.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/1699/paraswapio-dapp-exchanges-ethereum-logo_dd922d8bafe2f8433bfff4b6721dc066.png',
    website: 'https://app.paraswap.io/#/',
    chains: [
      'eip155:421611',
      'eip155:43114',
      'eip155:42161',
      'eip155:1',
      'eip155:250',
      'eip155:43114',
      'eip155:137',
    ],
    categories: ['exchanges'],
  },
  {
    dappId: 3673,
    name: 'Actifit',
    description:
      'Actifit incentivizes healthy living by enabling you to track your everyday activity',
    fullDescription:
      'Actifit incentivizes healthy living by enabling you to track your everyday activity, and get rewarded with Actifit (AFIT) tokens, but also STEEM rewards via upvotes on your Steem posts.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/3673/actifit-dapp-other-hive-logo_30901f216ee766cd0766936af3a198ec.png',
    website: 'https://actifit.io',
    chains: ['eip155:42161'],
    categories: ['other'],
  },
  {
    dappId: 5591,
    name: 'Swirge',
    description:
      "Swirge's ecosystem embodies a decentralized social media, a decentralized financial system, and a marketplace built on Binance Smart Chain and Matic Network.",
    fullDescription:
      "Swirge in a Nutshell Swirge's ecosystem embodies a decentralized social media, a decentralized financial system, and a marketplace built on Binance Smart Chain and Matic Network. Swirge is a user-centric platform that is built with users in mind. First, to protect the user's data and information and give them total control over their data. secondly, to give users the power to create wealth by socializing and the opportunity to take charge of their finances. Swirge solutions offer a user-friendly platform, with no restrictions, fees, and completely free to use. It is built by and for the community on Binance Smart Chain and Matic Network. Current Key Features (all in one App) 1.) Fully Decentralized Swirge has seamlessly integrated a decentralized marketplace to enable secure and fast peer-to-peer buying and selling on the platform. Together with a decentralized payment platform to enable fast, cheap and secure transactions all within the platform. Swirge platform is fully decentralized, all your Swerves (Posts) are stored on a decentralized blockchain. 2.) Swirge Social Media Swirge social is a decentralized social media platform built on the blockchain, with all the features of most existing traditional social media platforms and new features unique to Swirge. Users are in Control Unlike traditional existing platforms, Swirge is built to give users complete control over their data, privacy, and finances. 3.) Swirge Pay SwirgePay is a decentralized financial protocol built on blockchain to completely decentralize all aspects of finance, from exchanges, buying and selling of digital assets, remittances, online purchases, and down to insurance. SwirgePay is giving users the power to control their finances without jurisdiction restrictions.",

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/5591/swirge-dapp-social-bsc-logo_d6483487b159a39cc731237ccb2c7b5c.png',
    website: 'https://app.swirge.com',
    chains: ['eip155:42161'],
    categories: ['social'],
  },
  {
    dappId: 9125,
    name: 'Formula E: High Voltage',
    description: 'Formula E: High Voltage” is an official Formula E licensed racing game.',
    fullDescription:
      'Formula E: High Voltage is an official Formula E licensed racing game, leveraging NFTs to introduce a Play & Earn experience as part of the REVV Motorsport ecosystem. Players take the role of a racing team manager, making strategic decisions that will critically affect the outcome of your championship journey, build your own racing empire & compete with players across the world!',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/9125/formulaehighvoltage-dapp-collectibles-9125-logo_428e1b5ac3c5101fd75c657fab36cdfe.png',
    website: 'https://formulaehighvoltage.com/',
    chains: ['eip155:42161'],
    categories: ['collectibles', 'marketplaces', 'games'],
  },
  {
    dappId: 5132,
    name: 'TokenBB Batch Transfer',
    description:
      'It has supported more than ten blockchains such as Ethereum, BSC, Polygon, Fantom, Arbitrum, xDai, Avalanche, Harmony, Celo, Moonriver, etc. Quickly and easily！',
    fullDescription:
      'The site has supported the batch transfer function of more than ten blockchains such as Ethereum, BSC, Polygon, Fantom, Arbitrum, xDai, Avalanche, Harmony, Celo, Moonriver, etc. You can quickly and easily transfer tokens in batches, and easily send tokens or airdrops to thousands of addresses. It makes transfers and airdrops easier and more efficient, and is your preferred transfer tool!',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/5132/tokenbbbulksender-dapp-other-ethereum-logo_5f8959336d9beae2adb1677a14960397.png',
    website: 'https://tokenbb.com/batch-transfer',
    chains: [
      'eip155:43114',
      'eip155:42161',
      'eip155:42220',
      'eip155:1',
      'eip155:250',
      'eip155:1285',
      'eip155:137',
    ],
    categories: ['other'],
  },
  {
    dappId: 8408,
    name: 'DeHero',
    description: 'DeHero is a blockchain game published by MixMarvel.',
    fullDescription:
      "DeHero is a decentralized GameFi application based on BSC. By staking NFT assets, users can unbox NFT card packs blind boxes, collect NFT roles, and do card mining with appropriate training strategies. As a result, users obtain DeHero's governance token HEROES. Users can trade NFT cards in the trading market. More application scenarios, such as NFT card battles and DAO community co-governance, will be opened soon.",
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/8408/dehero-dapp-games-bsc-logo_7c2c9b93b751d8d8dcf8192dd2847b01.png',
    website: 'https://dehero.co',
    chains: ['eip155:42161'],
    categories: ['games', 'collectibles'],
  },
]
