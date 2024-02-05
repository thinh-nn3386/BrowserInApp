import { Instance, SnapshotOut, types } from 'mobx-state-tree'

/**
 * A RootStore model.
 */
export const BrowserStore = types
  .model('BrowserStore')
  .props({})
  .views((self) => ({}))
  // Direct update
  .actions((self) => ({}))
