import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { BrowserStore } from './browserStore/BrowserStore'
/**
 * A RootStore model.
 */
export const RootStoreModel = types.model('RootStore').props({
  browserStore: types.optional(BrowserStore, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
