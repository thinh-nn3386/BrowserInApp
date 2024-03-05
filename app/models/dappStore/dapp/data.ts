import { bnbChainDApps } from './bnb-chain'
import { ethereumDapps } from './ethereum'
import { polygonDApps } from './polygon'
import { tronDApps } from './tron'
import { uniqBy } from 'lodash'
import { DAppType } from './type'

export const dappsList: DAppType[] = uniqBy(
  [...bnbChainDApps, ...ethereumDapps, ...polygonDApps, ...tronDApps],
  'dappId'
)
