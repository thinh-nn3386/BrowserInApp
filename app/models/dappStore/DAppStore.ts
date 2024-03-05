import { DAppType } from 'app/common/types/dapp'
import { Instance, SnapshotOut, cast, types } from 'mobx-state-tree'
import { withSetPropAction } from '../helpers/withSetPropAction'
import { dappsList } from 'app/services/dapp/data'

/**
 * Model description here for TypeScript hints.
 */
export const DAppStoreModel = types
  .model('DAppStore')
  .props({
    dapps: types.optional(types.array(types.frozen<DAppType>()), []),
    favoriteDApps: types.optional(types.array(types.frozen<DAppType>()), []),
    disableWarningUrl: types.optional(types.array(types.string), []),
    lastUpdateDApps: 0,
    browserTabs: types.optional(types.array(types.string), []),
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get isNeedUpdateDapps() {
      return self.lastUpdateDApps + 86400000 < Date.now()
    },
    get isDisableOpenMoreTabs() {
      return self.browserTabs.length > 9
    },
  }))
  .actions((self) => ({
    setDApps: (dapps: DAppType[]) => {
      self.setProp('dapps', dapps)
    },

    addFavoriteDApps: (dapp: DAppType) => {
      self.setProp('favoriteDApps', [...self.favoriteDApps, dapp])
    },

    removeFavoriteDApps: (dapp: DAppType) => {
      self.setProp('favoriteDApps', [
        ...self.favoriteDApps.filter((e) => e.website !== dapp.website),
      ])
    },

    /**
     * Create new tab browser
     * @param url
     */
    addBrowserTabs: (url: string) => {
      // self.setProp('browserTabs', [...self.browserTabs, url])
    },

    removeBrowserTabs: (urlIndex: number) => {
      // self.setProp('browserTabs', [...self.browserTabs.filter((_, index) => index !== urlIndex)])
    },

    removeAllBrowserTabs: () => {
      // self.setProp('browserTabs', [])
    },

    addDisableWarningUrl: (url: string) => {
      self.setProp('disableWarningUrl', [...self.disableWarningUrl, url])
      self.disableWarningUrl = cast([...self.disableWarningUrl, url])
    },

    setLastUpdateDApps: () => {
      self.lastUpdateDApps = Date.now()
    },
  }))
  .actions((self) => ({
    fetchDApps: () => {
      self.setDApps(dappsList)
      self.setLastUpdateDApps()
      return dappsList
    },
    isFavoriteDApp: (dapp: DAppType) => {
      return self.favoriteDApps.some((e) => e.website === dapp.website)
    },
    isDisableWarning: (dapp: DAppType) => {
      return self.disableWarningUrl.includes(dapp.website)
    },
    getDAppByLink: (url: string) => {
      return self.dapps.find((app) => app.website === url)
    },
  }))
// .postProcessSnapshot(omit(['browserTabs']))

type UiStoreType = Instance<typeof DAppStoreModel>
export interface UiStore extends UiStoreType {}
type UiStoreSnapshotType = SnapshotOut<typeof DAppStoreModel>
export interface UiStoreSnapshot extends UiStoreSnapshotType {}
export const createUiStoreDefaultModel = () => types.optional(DAppStoreModel, {})
