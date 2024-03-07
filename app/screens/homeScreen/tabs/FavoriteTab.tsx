import React from 'react'
import { FlatList, View, Image } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useStores } from 'app/models'
import { DAppItem } from 'app/components/dapp'
import { Text } from 'app/components'
import { useTabNavigation } from './useTabNavigation'

const EMPTY_IMAGE = require('assets/images/empty-favorite.png')

export const FavoritesTab = observer(() => {
  const { favoriteDApps } = useStores()
  const { openAppOrBrowser, openApp } = useTabNavigation()
  const dApps = favoriteDApps.toJSON()

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dApps}
        keyExtractor={(item, index) => item.name + index}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 12,
          flex: 1,
        }}
        getItemLayout={(data, index) => ({ length: 72, offset: 72 * index, index })}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image source={EMPTY_IMAGE} style={{ width: 180, height: 180 }} resizeMode="center" />
            <Text
              preset="label"
              text="Favorite"
              style={{ maxWidth: '80%', textAlign: 'center' }}
            />
          </View>
        }
        renderItem={({ item }) => (
          <DAppItem
            isFavorite
            dapp={item}
            openApp={() => {
              openApp && openApp(item)
            }}
            openUrl={() => {
              openAppOrBrowser(item)
            }}
          />
        )}
      />
    </View>
  )
})
