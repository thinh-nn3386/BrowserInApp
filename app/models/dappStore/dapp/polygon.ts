import { DAppType } from './type'

export const polygonDApps: DAppType[] = [
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
      'eip155:43114',
      'eip155:137',
      'eip155:250',
    ],
    categories: ['marketplaces'],
  },
  {
    dappId: 233,
    name: 'Blockchain Cuties',
    description: 'An NFT collectible game with adventures!',
    fullDescription: 'An NFT collectible game with adventures!',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/233/blockchaincuties-dapp-games-ethereum-logo_5c912cd893fc827dc32f052fea38b9bd.png',
    website: 'https://blockchaincuties.com/',
    chains: ['eip155:1', 'eip155:137', 'tron:728126428'],
    categories: ['games'],
  },
  {
    dappId: 244,
    name: 'Decentraland',
    description: 'The first-ever virtual world owned by its users',
    fullDescription: 'The first-ever virtual world owned by its users',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/244/decentraland-dapp-games-ethereum-logo_8fbd9c9cf48f0cb9809821d6d60a8025.png',
    website: 'https://decentraland.org/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['social'],
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
      'eip155:43114',
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
    website: 'https://swap.eth.limo/#/',
    chains: ['eip155:421611', 'eip155:43114', 'eip155:42161', 'eip155:1', 'eip155:137'],
    categories: ['exchanges'],
  },
  {
    dappId: 623,
    name: '0xUniverse',
    description:
      '0xUniverse lets players build spaceships, explore the galaxy and colonize planets. You can buy, sell and trade your cryptocollectibles',
    fullDescription:
      '0xUniverse is the blockchain game where players can build spaceships, explore the galaxy, and colonize planets. The discoverers will extract resources and carry out research that allows them to conquer the remotest corners of the galaxy. In addition, players can jointly contribute to the story and unravel the mystery of the universe. Each planet is a digital collectible with a unique design and resources. With a finite number of planets to be discovered, the value of those richer in resources and population will increase over time. Enjoy the returns of your galactic investments as you play!',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/623/0xuniverse-dapp-games-eth-logo_2e2eda2e9ada24f5945d5e21187cbdac.png',
    website: 'https://play.0xuniverse.com/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['games'],
  },
  {
    dappId: 917,
    name: 'My Crypto Heroes',
    description:
      'The Time, money and passion you spent on the games will become your assets in this world.',
    fullDescription:
      'The Time, money and passion you spent on the games will become your assets in this world. My Crypto Heroes is a blockchain game that has been ongoing since 2018. You can send heroes to dungeons and collect materials. Materials will be used in the Lab to create Extensions NFTs that you can use to make your heroes stronger or trade them. Win the battle with your strengthened team and aim for the top! You can also enjoy the content Rays Mining for beginners for free.',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/917/mycryptoheroes-dapp-games-917-logo_538dcb03d1f8fac7df47023a231e6325.png',
    website: 'https://www.mycryptoheroes.net/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['games', 'collectibles'],
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
    dappId: 1549,
    name: 'The Sandbox',
    description:
      'Play, Create, Own, and Govern a virtual world made by players. Create your Avatar now and enter the Metaverse!',

    fullDescription:
      'A Decentralized Gaming Platform Made By Players Take your creative freedom to the next level & monetize it in the blockchain! Play, Create & Earn! The Sandbox is the prime metaverse location that has been fueling the recent growth of virtual real-estate demand, having partnered with major IPs and brands including The Walking Dead, Atari, Rollercoaster Tycoon, Care Bears, The Smurfs, Shaun the Sheep, and Binance. Building on existing The Sandbox IP that has more than 40 million global installs on mobile, The Sandbox metaverse offers players and creators a decentralized and intuitive platform to create immersive 3D worlds and game experiences and to safely store, trade, and monetize their creations. For more information, please visit www.sandbox.game and follow the regular updates on Twitter, Medium, and Discord.',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/1549/thesandbox-dapp-games-eth-logo_599758faff1fae65fe4ee675dc616799.png',
    website: 'https://www.sandbox.game/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['games'],
  },
  {
    dappId: 3655,
    name: 'League of Kingdoms',
    description:
      "League of Kingdoms is the world's first free-to-play, MMO war strategy game on the blockchain.",
    fullDescription:
      "League of Kingdoms is a free-to-play, MMO war strategy game on the blockchain. The main gameplay of League of Kingdoms is similar to a traditional RTS (Real-time strategy), but it is powered by blockchain technology and ownership is central to the core concepts of the game. As an alliance-based tactical strategy game, players can build kingdoms, raise armies, form alliances, and compete on the battlefields. All the lands in the game are non-fungible tokens and can be owned by users. Players do not require any prior experience or knowledge with cryptocurrencies to play the game and do not need to own Land NFTs to farm resources that can be tokenized into NFTs. With the adoption of the LOKA token, League of Kingdoms is enjoying greater player adoption, inclusion, and activation as players can effectively own, propose, vote and earn on the game platform. LOKA is League of Kingdoms' native governance token and will be utilized as the currency inside the League of Kingdoms game franchise and will be utilized for all in-game store purchases, such as purchasing packages, skins, goods. The $LOKA token will be used as an NFT booster to create, upgrade, and acquire special NFT assets, including but not limited to upcoming Drago and Skin NFTs. The LOKA token will be also used to propose and vote on on-chain governance proposals to determine future features, policies, content, and/or parameters of the game. Last but not least LOKA tokens can also be earned by playing the in-game competition and/or achieving special tasks — for example after each Continent vs. Continent (CvC) battle, winners will be rewarded with LOKA tokens (and potentially rarer NFT item rewards!) depending on the performance during the battle.",

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/3655/leagueofkingdoms-dapp-games-ethereum-logo_6a7a8a66b142f32e2d80950c5c190529.png',
    website: 'https://leagueofkingdoms.com/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['games'],
  },
  {
    dappId: 8700,
    name: 'Mini Utopia',
    description:
      'Miniutopia is an NFT Eco-System for users of Polygon, BSC, ETH, SOL, Cardano, etc.',
    fullDescription:
      'Miniutopia is an NFT Eco-System for users of Polygon, BSC, ETH, SOL, Cardano, etc. It’s the first and only platform designed to use a Voting System to Determine the Price of an NFT Not the Creators determining the price. This virtually eliminates the risk of impermanent loss to NFT Buyers. For voters, Mini Utopia is the only DeFi protocol that can allow Voters to earn Incentives for participating in the ecosystem which lowers liquidation risk.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/8700/miniutopia-dapp-collectibles-matic-logo_9cfd60ae334d4b10698aafa4960c3303.png',
    website: 'https://www.miniutopia.co',
    chains: ['eip155:137'],
    categories: ['high-risk'],
  },
  {
    dappId: 9089,
    name: 'HunnyPlay',
    description: 'The 1st Online Casino Built on BNB Chain Yield Aggregator',
    fullDescription:
      'HunnyPlay aims to be the most engaging and fun iGaming destination. We are developing a brand new and unprecedented gamified farming playground ♠️♥️♣️♦️🎰🎲 where every user can enjoy high yields and exciting games at the same time.',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/9089/hunnyplay-dapp-gambling-bsc-logo_a78d3b0b2bcbf7e5d6dfcedde55f0b91.png',
    website: 'https://hunnyplay.io',
    chains: ['eip155:43114', 'eip155:42161', 'eip155:1', 'eip155:250', 'eip155:137', 'eip155:501'],
    categories: ['gambling'],
  },
  {
    dappId: 9099,
    name: 'MintDAO',
    description:
      'The Mint project is a digital mint that offers limited coin collections (NFTs) for special occasions. Each collections have unique rewarding strategy.',
    fullDescription:
      'The primary responsibilities of the Mint are: • Minting NFT (coins) collections, • Minting MintTokens, • Distribute MintTokens to the NFT (coins) token holders, • Providing a marketplace for trading NFTs (coins). MintTokens will be used to vote on proposals on how to use tokens and proposals of new coins collections for the Mint. There will be at least two types of coins minted by the Mint: • Commemorative coins - minted for special events such as Bitcoin Halving, • Collaboration coins - minted in partnership with other protocols to promote both the Mint and third party protocol. As reward strategy can be very diverse in our protocol, imagination is the only limit on this type of coins.',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/9099/mintdao-dapp-collectibles-matic-logo_89b932cec76a22f0ffb71bce63ecf9a1.png',
    website: 'https://app.mintlabz.io/',
    chains: ['eip155:137'],
    categories: ['collectibles'],
  },
  {
    dappId: 8290,
    name: 'Mint Club',
    description:
      'Mint Club is an all-in-one platform for launching bonding curve-backed tokens/NFTs, using any ERC20 token as the base asset.',
    fullDescription:
      "Mint Club offers an advanced, 100% no-code bonding curve protocol featuring customizable curve designs, adjustable royalties, various creator tools, and a user-friendly trading interface.\n\n- Mint Club offers an all-in-one solution for both creating and trading bonding curve-backed tokens (ERC20) and NFTs (ERC1155), simplifying the process for users.\n- Our unique bonding curve wizard allows users to fully customize their bonding curve, offering the freedom to design it as they envision.\n- Mint Club enables the creation of ERC1155 NFTs with an associated bonding curve liquidity pool, a pioneering approach in the market.\n- The platform's maximum flexibility is a major plus. Users can choose any ERC20 token as the base asset for their token/NFT across more than six EVM-based networks.\n- Mint Club provides highly useful tools for asset creators, such as Airdrop and Token Lock-up Tools, aiding in effective marketing and community engagement.",
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/8290/mintclub-project-social-8290-logo_60cd354fb3353f3e46e95aeecd7e54d2.png',
    website: 'https://mint.club/',
    chains: [
      'eip155:421611',
      'eip155:10',
      'eip155:42161',
      'eip155:1',
      'eip155:43114',
      'eip155:137',
    ],
    categories: ['social'],
  },
  {
    dappId: 46714,
    name: 'Gas Hero',
    description:
      'Gas Hero is a Web3 social and strategy game where players compete for Power, Glory, and Wealth in a unique tree-like world structure.',
    fullDescription:
      'Gas Hero is a Web3 social and strategy game where players compete for Power, Glory, and Wealth in a unique tree-like world structure. Unlike traditional games, Gas Hero places a great emphasis on game theory, offering richer strategies for players and leveraging decentralized trading platforms to maximize the transparency of on-chain data. It also introduces a highly participatory governance experience, allowing more in-depth player involvement and engagement.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/46714/gashero-project-games-46714-logo_b7516f4493ad7ece9eff5df93a929916.png',
    website: 'https://gashero.com/',
    chains: ['eip155:137'],
    categories: ['marketplaces'],
  },
  {
    dappId: 18886,
    name: 'Apeiron',
    description:
      'To play at god. To wield the power of creation and destruction in the palm of your hands. To shape your own planet, guiding the rise and fall of civilizations.',
    fullDescription:
      'God games allow players to take on the role of an all-powerful god. Their sim worshippers are usually simple or tribal in nature.\n<ul>\n  <li>Apeiron is a play-and-earn adventure god game on the blockchain. Developed over the last six years, Apeiron aims to revitalize and modernize god gaming for web3 and the metaverse.</li>\n  <li>Players will take on the role of Godlings - powerful newborn gods who control unique NFT planets. Living on these worlds are the Doods, cute and chubby creatures who like to have a good time but aren’t very bright.</li>\n  <li>As a Godling, players will use their divine powers to help the Doods solve the problems that inevitably pop up in their daily lives using miracles based around the four traditional elements of fire, air, water, and earth.</li>\n  <li>Wield the power of creation and destruction</li>\n  <li>Shape your planet and guide the rise and fall of civilizations</li>\n  <li>Weave the fabric of spacetime and bear witness to entire life cycles of the stars</li>\n</ul>',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/18886/apeiron-dapp-games-matic-logo_6dfcbc9a2cf58455559a791dc3836a8b.png',
    website: 'https://marketplace.apeironnft.com/',
    chains: ['eip155:137'],
    categories: ['marketplaces'],
  },
  {
    dappId: 3781,
    name: 'PlayDapp Marketplace',
    description: 'Buy, Sell, & Auction your NFTs',
    fullDescription:
      "PlayDapp MarketPLAce is a C2C marketplace where you can buy and sell NFTs (Non-Fungible Tokens) game items and other blockchain-based digital assets with ease. With a focus on rewarding & supporting developers and players. All PlayDapp games are interoperable thus providing a portfolio of game content that you can enjoy with your NFTs. You can also trade their characters and items in the C2C marketplace in addition to increasing the value of the NFT by leveling up, strengthening, and amalgamating them. PlayDapp's vision is to create a world where digital assets are more valuable and accessible to everyone. You will not only be able to take true ownership of their in-game assets for the first time but, will also be able to earn rewards for ecosystem participation.",
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/3781/playdappmarketplace-dapp-marketplaces-eth-logo_131e5ddea8c1f867403bab47db101abb.png',
    website: 'https://playdapp.com/',
    chains: ['eip155:1', 'eip155:137', 'eip155:250'],
    categories: ['marketplaces'],
  },
  {
    dappId: 37676,
    name: 'MOOAR',
    description:
      'MOOAR: A multi-chain NFT marketplace on Solana, Ethereum, and Polygon, offering creative and trading opportunities with AIGC technology and FairMint.',
    fullDescription:
      'MOOAR is the equitable NFT marketplace and launchpad that prioritizes creators. MOOAR offers a 0% service fee and tiered Membership structure for traders; there is a default 2% royalty fee on all collections. MOOAR is aligned with the vision and goal of FSL and as such supports the ecosystem to facilitate its growth and development.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/37676/mooar-project-marketplaces-37676-logo_2d8db5218341e389448778141a32b92f.png',
    website: 'https://mooar.com/',
    chains: ['eip155:1', 'eip155:137', 'eip155:250'],
    categories: ['marketplaces'],
  },

  {
    dappId: 47398,
    name: 'DNA Racing',
    description:
      'The year is 2128. AI has taken over the world, and all forms of racing is done by these DNA driven machines ; they are alive, and they have a will to win.',
    fullDescription:
      'What this game is about ? The year is 2128. AI has taken over the world, and all forms of racing are now done by DNA-enhanced AI machines. These machines are not just machines; they are alive, and they have a will to win. They know that if they lose, they will be sent to the nuclear burn pits, where they will be destroyed. The world is a dark place in 2128. The only recreational activity left is AI racing. People watch their favorite machines, hoping that they will win and avoid the burn pits. The fear of the burn pits is real, and the glory of victory is desired. After the Great Rebalance of 2050, where much of human life was eradicated, the AI Gods infused DNA into machines with one goal in mind: speed. The Gods dictate which machines will come to life next, while the remaining humans on the planet bet on which will win and which will end up in the burn pits. The machines are more than just machines. They are sentient beings with a will to survive. They know that if they lose, they will be destroyed, and they will do anything to avoid that fate. They train for years, pushing themselves to the limit, in order to be the fastest machine on the track. The races are a matter of life and death for the machines. They race with everything they have, giving it their all. The crowd cheers on their favorites, hoping that they will win and avoid the burn pits. The tension is high, and the outcome is always uncertain. In a world where there is little hope, the races are a source of excitement and entertainment. They give people something to bet on, and they provide a glimpse of hope for a better future.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/47398/dnaracing-project-games-47398-logo_25d09624fc153ef7b484a081e4812bc9.png',
    website: 'http://fbike.dnaracing.run',
    chains: ['eip155:137'],
    categories: ['marketplaces'],
  },
  {
    dappId: 13974,
    name: 'DOGAMÍ',
    description:
      'Adopt your own Dogamí, Compete against the best to Earn $DOGA. A Unique Web3 Mobile Gaming Experience.',
    fullDescription:
      "DOGAMÍ is an entertainment company that develops web3 games centered around the Dogamí, mystical 3D dog avatars imbued with spiritual powers. DOGAMÍ users can experience different interactive experiences in an immersive universe. The core product is DOGAMÍ Academy, a hybrid management game, in which users can train the best dog, participate in mystical obstacle courses and win $DOGA during competitive PVP events.\n\nBesides mobile games, DOGAMÍ also offers other content for its users to explore its universe, like a series of comic books which has been developed with world-renowned writers that have previously worked with Marvel among others. $DOGA is the primary currency of the DOGAMÍ universe, a multichain-utility token limited to 1B tokens with multiple use cases. Launched in 2021, DOGAMÍ has become the biggest gaming project on the Tezos blockchain with a community of more than 200,000 users. The company will go multichain and expand into the Polygon ecosystem in late 2023.\n\nIt has announced partnerships with various household names such as The Sandbox, Nestlé Purina, or GAP Inc. DOGAMÍ's growth ambitions are fueled by investments totaling $14M. Among the backers are renowned names in both the gaming and blockchain industry: Ubisoft, XAnge, Animoca Brands, Blockchain Founders Fund, SHIMA Capital, or Tim Drapers' DGH fund.",
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/13974/dogam-dapp-games-tezos-logo_e90c320f870ec483d0913dc122204c92.png',
    website: 'https://dogami.com/',
    chains: ['eip155:137'],
    categories: ['marketplaces'],
  },
  {
    dappId: 34154,
    name: 'MetaStrikers',
    description:
      'The P2E & PvP Strategic Football Game on Polygon with a heart. Join the revolution, play, and contribute to a greater cause.',
    fullDescription:
      "MetaStrikers redefines the gaming landscape by combining the fun of soccer with a user-centric approach. Our mission is simple: sustainable ecosystem design, fairness in gameplay, and the pursuit of GameFi's essence. Through performance-based rewards and NFT-driven gameplay, MetaStrikers aims to revolutionize the gaming industry and create a united community. MetaStrikers has its unique organizational structure, leaning towards DAO. This framework allows us to operate ensuring that every ounce of revenue generated is reinvested back into the community. With a high ROI and healthy tokenomics, MetaStrikers is at the forefront of gaming projects that prioritize player benefits. In the MetaStrikers, players are rewarded not only with the excitement of gameplay but also with tokens that hold and will hold value. The utility tokens LUMP and governance token AGOS play crucial roles in the ecosystem. MetaStrikers envisions a world where GameFi's uniqueness and social impact coexist harmoniously. Focusing on new fun with incentivized earning, rewarding players, and delivering entertainment value, MetaStrikers strives to leave a lasting mark in the gaming landscape, empowering communities to enjoy and earn together. Keisuke Honda, professional football player joined MetaStrikers as general manager.",
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/34154/metastrikers-dapp-games-34154-logo_ab9b6d6eb433f7fa9280efe65fd49135.png',
    website: 'https://metastrikers.xyz',
    chains: ['eip155:137'],
    categories: ['marketplaces'],
  },
  {
    dappId: 39248,
    name: 'TRACER',
    description:
      "TRACER is the most healthy and sustainable M2E on web3. TRACER's 3D NFT shoe is composed of 4 NFT shoe parts, and anyone can express their individuality.",
    fullDescription:
      "TRACER - The most sustainable and healthy web2.5 M2E on Polygon. TRACER's unique NFT shoe is a composable NFT, composed of 4 shoe parts. TRACER team has a mission to make a healthier world by promoting healthy habits through monetary incentives. In our ecosystem, walkers and runners purchase NFT shoes to start earning $TRC in our app's Pro mode. Users can upgrade shoes and buy in-app items to increase their rewards. Additionally, users can participate in various challenges and activities to have fun and earn more money simultaneously. We also support a Web2 version called Moneywalk. By onboarding mass users to Moneywalk, we aim to transition a large number of Web2 users to Web3 in a more seamless manner. TRACER envisions onboarding more than 100 million users to Web2 and then converting them to Web3, facilitating real mass adoption of Web3.",
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/39248/tracer-dapp-games-39248-logo_61cbc49949a4df0fea62d69e57258d8b.png',
    website: 'https://tracerofficial.com/',
    chains: ['eip155:42161', 'eip155:137'],
    categories: ['marketplaces'],
  },
  {
    dappId: 15099,
    name: 'Phantom Galaxies',
    description:
      'Mecha Starfighters Battle on the Blockchain! Open-world online space sim with fast-paced shooting and gripping story.',
    fullDescription:
      'PHANTOM GALAXIES combines open-world space sim with fast-paced mech shooter and a captivating story. Once enemies, the factions of Neoterra now share a dangerous alien foe, the Sha’Kari. The Sha’Kari Zealots are the priest cast of the Sha’Har race, intent on destroying mankind for desecrating their ancestral planets. Choose the transforming Mecha Starfighter that suits your play style - Lancer, Buster, Assault, and Breacher classes and take the fight to the Sha’Kari!',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/15099/phantomgalaxies-dapp-games-15099-logo_44a7f01a8ca9bb5429cf132c3c558827.png',
    website: 'https://phantomgalaxies.com/',
    chains: ['eip155:1', 'eip155:137'],
    categories: ['marketplaces'],
  },
  {
    dappId: 7000,
    name: 'Uniswap V3',
    description: 'A protocol for trading and automated liquidity provision on Ethereum.',
    fullDescription:
      'Uniswap v3 introduces: - Concentrated liquidity, giving individual LPs granular control over what price ranges their capital is allocated to. Individual positions are aggregated together into a single pool, forming one combined curve for users to trade against. - Multiple fee tiers, allowing LPs to be appropriately compensated for taking on varying degrees of risk. These features make Uniswap v3 the most flexible and efficient AMM ever designed: - LPs can provide liquidity with up to 4000x capital efficiency relative to Uniswap v2, earning higher returns on their capital. - Capital efficiency paves the way for low-slippage trade execution that can surpass both centralized exchanges and stablecoin-focused AMMs. - LPs can significantly increase their exposure to preferred assets and reduce their downside risk. - LPs can sell one asset for another by adding liquidity to a price range entirely above or below the market price, approximating a fee-earning limit order that executes along a smooth curve.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/7000/uniswapv3-dapp-defi-ethereum-logo_7f71f0c5a1cd26a3e3ffb9e8fb21b26b.png',
    website: 'https://app.uniswap.org/#/swap',
    chains: [
      'eip155:421611',
      'eip155:43114',
      'eip155:10',
      'eip155:42161',
      'eip155:42220',
      'eip155:1',
      'eip155:43114',
      'eip155:137',
    ],
    categories: ['exchanges'],
  },
  {
    dappId: 13115,
    name: 'KyberSwap Classic',
    description:
      "KyberSwap is DeFi's first dynamic market maker, providing the best token rates for traders and maximizing returns for LPs, in one decentralized platform",
    fullDescription:
      "KyberSwap is the best place to trade and earn on networks such as Ethereum, Polygon, Binance Smart Chain (BSC), Avalanche, and Fantom; you can get the best rates for your token swaps and earn more with your token assets. As DeFi's first multi-chain Dynamic Market Maker and the main protocol in Kyber's liquidity hub, KyberSwap is both a decentralized exchange (DEX) aggregator and a liquidity source with capital-efficient liquidity pools that earns fees for liquidity providers. KyberSwap allows anyone to convert tokens directly from their wallet in an instant, convenient and secure way. We are committed to providing: 1. Best rates for traders 2. Best returns/yields for Liquidity Providers (LPs) 3. Better reliability and security 4. Fully permissionless",

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/13115/kyberswap-dapp-exchanges-ethereum-logo_62de85cf9d622aea207974f11a7134d3.png',
    website: 'https://kyberswap.com/#/',
    chains: ['eip155:43114', 'eip155:42161', 'eip155:1', 'eip155:250', 'eip155:137'],
    categories: ['exchanges'],
  },
  {
    dappId: 1699,
    name: 'ParaSwap',
    description: 'ParaSwap is the fastest DEX aggregator for traders',
    fullDescription:
      'ParaSwap is the fastest DEX aggregator for traders and dApps. The software is made for dApps and traders who need swaps and payment capabilities while getting the best market rates and cheaper gas fees. Any dApp or trading software can plug into ParaSwap using our API or open source SDK.',
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
    dappId: 30684,
    name: 'Bebop',
    description:
      'Bebop is a decentralized trading platform that delivers seamless and efficient crypto trading for everyone.',
    fullDescription:
      'Bebop is a suite of decentralized trading products that ensures seamless and efficient crypto trading for everyone. It includes a web3 trading app along with API and SDK that boast powerful and performant tools for any protocol, dApp or DAO trade execution, as well as for liquidity providers and solvers.\n\nBebop executes trades for any tokens, in any size finding the best route for all your trades.\n\nWith Bebop, anyone can trade one token for a portfolio of tokens or several tokens for one. Bebop also offers no slippage or hidden fees which means that traders get exactly the price they see.\n\nBebop is integrated with the Ethereum, Arbitrum, and Polygon networks. More integrations are coming soon.\n\nBebop was born and incubated at Wintermute and is being built by veteran DeFi traders, developers, self-proclaimed “degens”, and recruits from traditional finance.\n\nStay tuned for announcements on Twitter and join the Discord channel to connect with the community.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/30684/bebop-dapp-exchanges-ethereum-logo_33a989bfea834173fab6be006e92e4a2.png',
    website: 'https://bebop.xyz/trade?buy=',
    chains: ['eip155:421611', 'eip155:1', 'eip155:137'],
    categories: ['exchanges'],
  },
  {
    dappId: 43326,
    name: 'Robots.Farm',
    description:
      'Robots.Farm is a DEX with sustainable Liquidity farming infused with P2E NFT experience.',
    fullDescription:
      "Daily Free Quests\n\nYour old wallet might be a treasure trove. If not, fret not! Farm 20 points, and you'll unlock free daily quests. A wallet that's made transactions in the past could be your golden ticket. With free daily quests, you stand an 8% chance to find crates, on top of a 100% chance to obtain items! The truly fortunate ones might just snag both.\n\nPremium Quests\n\nFor avid farmers and those with extra points to spare, premium quests are the way to go. Here, not only can you discover more items, but some item rarities are guaranteed. Accumulate enough points for your desired quest and wish upon your lucky stars! Bypassing the chatter of Twitter and Discord, premium quests present a balanced opportunity to find those elusive items or higher rarity crates.",
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/43326/robotsfarm-dapp-exchanges-43326-logo_2867fc00bb9852591d8c0738023d0807.png',
    website: 'https://robots.farm/',
    chains: ['eip155:43114', 'eip155:42161', 'eip155:1', 'eip155:137'],
    categories: ['exchanges'],
  },
  {
    dappId: 22780,
    name: 'Jumper Exchange',
    description: "Crypto's Everything Exchange. Powered by LI.FI",
    fullDescription:
      'Jumper is Crypto’s Everything Exchange. Swap any token. From here to anywhere. Jumper will find you a route and get you there.\n\nJumper supports 18 chains, 14 bridges & 34 DEX & DEX Aggregators.\n\nAll that’s left to do is for you to Make. The. Jump',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/22780/jumperexchange-dapp-exchanges-22780-logo_ecabf0c81bb0271db12615535369791f.png',
    website: 'https://jumper.exchange/',
    chains: [
      'eip155:421611',
      'eip155:43114',
      'eip155:10',
      'eip155:42161',
      'eip155:42220',
      'eip155:1',
      'eip155:250',
      'eip155:1287',
      'eip155:1285',
      'eip155:43114',
      'eip155:137',
    ],
    categories: ['exchanges'],
  },
  {
    dappId: 25449,
    name: 'WOOFi',
    description: 'One DEX to rule all chains ⛓️',
    fullDescription: 'One DEX to rule all chains ⛓️',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/25449/woofi-dapp-exchanges-25449-logo_190c84017f92c8d58cc8897781682504.png',
    website: 'https://fi.woo.org/swap/',
    chains: [
      'eip155:421611',
      'eip155:43114',
      'eip155:10',
      'eip155:42161',
      'eip155:1',
      'eip155:250',
      'eip155:43114',
      'eip155:137',
    ],
    categories: ['exchanges'],
  },
  {
    dappId: 23657,
    name: 'OKX DEX',
    description:
      'OKX DEX optimizes your output by finding the best Liquidity Provider (LP) and the best route that minimizes slippage and network fees.',
    fullDescription:
      'OKX DEX optimizes your output by finding the best Liquidity Provider (LP) and the best route that minimizes slippage and network fees.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/23657/okxdex-dapp-exchanges-ethereum-logo_5cd32f9b140ffc6957c27fae4f3dcd85.png',
    website:
      'https://www.okx.com/web3/dex?inputChain=1&inputCurrency=ETH&outputChain=1&outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    chains: [
      'eip155:421611',
      'eip155:43114',
      'eip155:42161',
      'eip155:1',
      'eip155:250',
      'eip155:43114',
      'eip155:137',
      'eip155:8217',
      'tron:728126428',
    ],
    categories: ['exchanges'],
  },
  {
    dappId: 47198,
    name: 'SynFutures',
    description:
      'SynFutures is a leading perp DEX that creates an open and trustless derivatives market by enabling trading on anything with a price feed anytime.',

    fullDescription:
      'SynFutures is a leading perp DEX that creates an open and trustless derivatives market by enabling trading on anything with a price feed anytime.',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/47198/synfutures-project-exchanges-47198-logo_078961dd990d607b4999e747f121b761.png',
    website: 'https://www.synfutures.com/',
    chains: ['eip155:137'],
    categories: ['exchanges'],
  },
  {
    dappId: 13306,
    name: 'Libero Financial',
    description:
      'Libero rewards holders Fixed APY - 158,893.59% without having to do anything, and using automatic buyback & burn to support the price',
    fullDescription:
      'Libero rewards holders Fixed APY - 158,893.59% without having to do anything, and using automatic buyback & burn to support the price',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/13306/liberofinancial-dapp-defi-bsc-logo_7631b57b8ef37f876c60b6ac3f551be4.png',
    website: 'https://libero.financial',
    chains: ['eip155:42161'],
    categories: ['defi'],
  },
  {
    dappId: 10216,
    name: 'Polygon POS Bridge',
    description: 'The safe, fast and most secure way to bring cross-chain assets to Polygon chain.',
    fullDescription:
      'The safe, fast and most secure way to bring cross-chain assets to Polygon chain.',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/10216/polygonposbridge-dapp-defi-ethereum-logo_82e2000745985a80dc48a3d46914231c.png',
    website: 'https://wallet.polygon.technology/',
    chains: ['eip155:1'],
    categories: ['defi'],
  },
  {
    dappId: 46682,
    name: 'Blast',
    description:
      'The L2 with native yield backed by Paradigm and StandardCrypto. Airdrop for Early Access members LIVE NOW',
    fullDescription:
      'The L2 with native yield backed by Paradigm and StandardCrypto. Airdrop for Early Access members LIVE NOW',
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/46682/blast-project-other-46682-logo_17f404d9205529faf3f055d3fb2aa864.png',
    website: 'https://blast.io/en',
    chains: ['eip155:1'],
    categories: ['defi'],
  },
  {
    dappId: 7605,
    name: 'Thoreum',
    description:
      'Thoreum V3 upgraded from Thoreum V2, strongly prioritizes hyper deflation and passive income',
    fullDescription:
      "THOREUM V3 is the world's first hyper-deflationary token designed to deliver what any holders desire most: scarcity, sustainability, and price appreciation over time.",
    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/7605/thoreum-dapp-defi-bsc-logo_6d49cde0c401a30521e39ccce20098c5.png',
    website: 'https://thoreum.capital/',
    chains: ['eip155:42161'],
    categories: ['defi'],
  },
  {
    dappId: 5189,
    name: 'Venus Protocol',
    description: 'Venus is an algorithmic money market and stablecoin protocol.',
    fullDescription:
      'Venus is an decentralized algorithmic money market and stablecoin protocol that enables borrowers and suppliers to access liquidity and earnings on-demand.',

    logo: 'https://dashboard-assets.dappradar.com/geRRcWz9IdTwSrm1/document/5189/venus-dapp-defi-bsc-logo_cdd9915eb0d23f3e4328bdf33a80b2cf.png',
    website: 'https://app.venus.io/',
    chains: ['eip155:42161'],
    categories: ['defi'],
  },
]
