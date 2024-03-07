import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { DAppsList } from 'app/components/dapp'
import { DAppType, WebsiteType } from 'app/resources/type'

export const ExploreTab = observer(() => {

  return (
    <View style={{ flex: 1 }}>
      <DAppsList
        showHeader
        // openAllApps={(category: DAppCategories) => {
        //   navigation.navigate('dappStack', { screen: 'dappList', params: { category } })
        // }}
        openApp={(dapp: DAppType) => {
          // navigation.navigate('dappStack', { screen: 'detail', params: { dapp } })
        }}
        openUrl={(params: WebsiteType) => {
          // navigation.navigate('dappStack', {
          //   screen: 'browser',
          //   params: {
          //     screen: 'website' + params.id,
          //     params,
          //   },
          // })
        }}
      />
    </View>
  )
})
