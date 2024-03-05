export type DAppType = {
  dappId: number
  name: string
  description: string
  fullDescription: string
  logo: string
  website: string
  chains: string[]
  categories: string[] | DAppCategories[]
}

export enum DAppCategories {
  GAME = 'games',
  DEFI = 'defi',
  COLLECTIBLES = 'collectibles',
  MARKETPLACES = 'marketplaces',
  HIGH_RISK = 'high-risk',
  GAMBLING = 'gambling',
  EXCHANGES = 'exchanges',
  SOCIAL = 'social',
  OTHER = 'other',
}
