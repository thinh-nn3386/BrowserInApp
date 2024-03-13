import { useNavigation } from '@react-navigation/native'
import { useHelper } from 'app/hooks/useHelper'
import { useStores } from 'app/models'
import { DAppType, WebsiteType } from 'app/resources/type'

export const useTabNavigation = () => {
  const navigation = useNavigation() as any
  const store = useStores()
  const { getUuid } = useHelper()

  const openApp = (dapp: DAppType) => {
    navigation.navigate('dappStack', { screen: 'detail', params: { dapp } })
  }

  const openAppOrBrowser =
    (item: DAppType) => {
      const tabData: WebsiteType = {
        title: item.name,
        url: item.website,
        id: getUuid(),
        dapp: item,
      }
      // create new tab
      store.addBrowserTabs(tabData)
      store.addRecentAccessDapps(item)
      navigation.navigate('dappStack', {
        screen: 'browser',
        params: { screen: 'website' + tabData.id, params: tabData },
      })
    }

  const openUrl = (tab: WebsiteType) => {
    navigation.navigate('dappStack', {
      screen: 'browser',
      params: { screen: 'website' + tab.id, params: tab },
    })
  }

  return {
    openAppOrBrowser,
    openApp,
    openUrl,
  }
}
