import React, { useState } from 'react'
import { Icon, Text } from 'app/components'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useStores } from 'app/models'
import { DAppType } from 'app/resources/type'
import { colors } from 'app/theme'

interface Props {
  closeBrowser: () => void
  title: string
  dapp: DAppType
}

export const Header = observer(({ closeBrowser, title, dapp }: Props) => {
  const store = useStores()

  // ------------------------ COMPUTED -----------------------------

  const isShowFavoriteButton = !!dapp
  const [isFavorite, setIsFavorite] = useState(
    isShowFavoriteButton ? store.isFavoriteDApp(dapp) : false
  )

  // ------------------------ METHODS -----------------------------

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    if (!isFavorite) {
      store.addFavoriteDApps(dapp)
    } else {
      store.removeFavoriteDApps(dapp)
    }
  }

  // ------------------------ RENDER -----------------------------

  return (
    <View>
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 4,
        }}
      >

        <Icon
          icon="arrow-left"
          containerStyle={{ paddingHorizontal: 16 }}
          size={24}
          onPress={closeBrowser}
        />
        <View
          style={{
            position: 'absolute',
            left: 92,
            right: 92,
          }}
        >
          <Text
            text={title}
            size={14}
            style={{ paddingHorizontal: 12, textAlign: 'center' }}
            numberOfLines={2}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: 2,
          }}
        >
          {isShowFavoriteButton && (
            <Icon
              icon={isFavorite ? 'star-fill' : 'star'}
              color={isFavorite ? colors.warning : colors.text}
              containerStyle={{ paddingHorizontal: 16 }}
              onPress={toggleFavorite}
            />
          )}
        </View>
      </View>
    </View>
  )
})
