import { useNavigation } from '@react-navigation/native'
import { useHelper } from 'app/hooks/useHelper'
import { useStores } from 'app/models'
import { DAppType, WebsiteType } from 'app/resources/type'

export const useTabNavigation = () => {
  const navigation = useNavigation() as any
  const store = useStores()
  const { getUuid } = useHelper()

  const openApp = (dapp: DAppType) => {
    navigation.navigate('detail', { dapp })
  }

  const openAppOrBrowser = (item: DAppType) => {
    const tabData: WebsiteType = {
      title: item.name,
      url: item.website,
      id: getUuid(),
      dapp: item,
    }
    // create new tab
    store.addBrowserTabs(tabData)
    store.addRecentAccessDapps(item)
    navigation.navigate('browser', { screen: 'website' + tabData.id, params: tabData })
  }

  const openUrl = (tab: WebsiteType) => {
    navigation.navigate('browser', { screen: 'website' + tab.id, params: tab })
  }

  const openBrowserTabs = () => {
    navigation.navigate('browser', { screen: 'tabs' })
  }

  return {
    openAppOrBrowser,
    openApp,
    openUrl,
    openBrowserTabs,
  }
}
