
export type WebsiteType = {
  localImage?: string
  // rerender image when user go to list tabs screen
  lastUpdaetImage?: number
  title: string
  url: string
  dapp?: DAppType
  id: string
}

export type DAppType = {
  dappId: number
  name: string
  description: string
  fullDescription: string
  logo: string
  website: string
  chains: string[]
  categories: string[] | DAppCategories[]
  socialLinks: {
    title: string
    url: string
    type: string | SocialType
  }[]

}
export enum SocialType {
  DISCORD = 'discord',
  FACEBOOK = 'facebook',
  MEDIUM = 'medium',
  REDDIT = 'reddit',
  TWITTER = 'twitter',
  GITHUB = 'github',
  INSTAGRAM = 'instagram',
  TELEGRAM = 'telegram',
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
