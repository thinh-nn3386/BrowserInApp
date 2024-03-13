import { Instance, SnapshotOut, types, cast, IStateTreeNode, SnapshotIn } from 'mobx-state-tree'
import RNFS from 'react-native-fs'
import { dappsList } from 'app/resources/data'
import { DAppType, WebsiteType } from 'app/resources/type'

const withSetPropAction = <T extends IStateTreeNode>(mstInstance: T) => ({
  // generic setter for all properties
  setProp<K extends keyof SnapshotIn<T>, V extends SnapshotIn<T>[K]>(field: K, newValue: V) {
    // @ts-ignore - for some reason TS complains about this, but it still works fine
    mstInstance[field] = newValue
  },
})

export const RootStoreModel = types
  .model('RootStore')
  .props({
    dapps: types.optional(types.array(types.frozen<DAppType>()), dappsList),
    favoriteDApps: types.optional(types.array(types.frozen<DAppType>()), []),
    browserTabs: types.optional(types.array(types.frozen<WebsiteType>()), []),
    recentAccesshDapps: types.optional(types.array(types.frozen<DAppType>()), []),
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get tabsImageFolderPath() {
      return RNFS.DocumentDirectoryPath + `/ready/browsers`
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

    addRecentAccessDapps: (dapp: DAppType) => {
      if (self.recentAccesshDapps.some((app) => app.dappId === dapp.dappId)) {
        self.setProp('recentAccesshDapps', [
          ...self.recentAccesshDapps.sort((app) => (app.dappId !== dapp.dappId ? -1 : 1)),
        ])
      } else {
        self.setProp('recentAccesshDapps', [dapp, ...self.recentAccesshDapps])
      }
    },

    clearRecentAccessDapps: () => {
      self.setProp('recentAccesshDapps', [])
    },
    //------------------------------TABS------------------------------
    /**
     * Create new tab browser
     * @param url
     */
    addBrowserTabs: (tab: WebsiteType) => {
      self.setProp('browserTabs', [...self.browserTabs, tab])
    },

    removeBrowserTabs: async (id: string) => {
      const fileName = RNFS.DocumentDirectoryPath + `/ready/browsers/${id}.png`

      if (await RNFS.exists(fileName)) {
        await RNFS.unlink(fileName)
      }
      self.setProp('browserTabs', [...self.browserTabs.filter((item) => item.id !== id)])
    },

    removeAllBrowserTabs: () => {
      self.setProp('browserTabs', [])
    },

    updateBrowserTabs: (tab: WebsiteType) => {
      const temp = [...self.browserTabs]
      var index = temp.findIndex((e) => e.id === tab.id)
      if (index !== -1) {
        temp[index] = tab
      }
      self.setProp('browserTabs', temp)
    },
  }))
  .actions((self) => ({
    isFavoriteDApp: (dapp: DAppType) => {
      return self.favoriteDApps.some((e) => e.website === dapp.website)
    }
  }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> { }
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }
