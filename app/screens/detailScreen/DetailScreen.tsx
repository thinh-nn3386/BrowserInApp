import { Icon, Screen, Text } from 'app/components'
import { DAppLogo } from 'app/components'
import { useHelper } from 'app/hooks/useHelper'
import { useStores } from 'app/models'
import { AppStackScreenProps } from 'app/navigators/navigator.types'
import { WebsiteType } from 'app/resources/type'
import { colorTransparency, colors } from 'app/theme'
import { observer } from 'mobx-react-lite'
import React, { FC, useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native'

export const DetailScreen: FC<AppStackScreenProps<'detail'>> = observer((props) => {
  const store = useStores()
  const { getUuid } = useHelper()
  const navigation = props.navigation
  const { dapp } = props.route.params || {}

  const isFavorite = useMemo(
    () => store.isFavoriteDApp(dapp),
    [store.favoriteDApps.toJSON()]
  )

  // ------------------- METHODS -------------------

  const openApp = () => {
    const tabData: WebsiteType = {
      title: dapp.name,
      url: dapp.website,
      id: getUuid(),
      dapp: dapp,
    }
    store.addBrowserTabs(tabData)
    store.addRecentAccessDapps(dapp)
    navigation.navigate('browser', { screen: 'website' + tabData.id, params: tabData })
  }

  const toggleFavorite = () => {
    if (!isFavorite) {
      store.addFavoriteDApps(dapp)
    } else {
      store.removeFavoriteDApps(dapp)
    }
  }

  // ------------------- RENDER -------------------

  return (
    <Screen
      useSafe
      backgroundColor={colors.background2}
      header={
        <View style={{
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Icon icon="arrow-left" onPress={navigation.goBack} />
          <Text preset='bold' text={dapp.name} />
          <Icon icon={isFavorite ? 'star-fill' : 'star'}
            color={isFavorite ? colors.warning : colors.text} onPress={toggleFavorite} />
        </View>
      }
      footer={
        <View
          style={{
            paddingTop: 12,
            marginBottom: 16,
            paddingHorizontal: 16
          }}
        >
          <TouchableOpacity onPress={openApp}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
              backgroundColor: colors.primary
            }}>
            <Text text="Open App" color={colors.text} />
          </TouchableOpacity>

        </View>
      }
    >
      <View
        style={{
          marginTop: 16,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <DAppLogo
          logo={dapp.logo}
          style={{
            width: 64,
            height: 64,
            borderRadius: 12,
            marginRight: 16,
          }}
        />

        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 4,
            }}
          >
            <Text preset="bold" size={20} text={dapp.name} style={{ maxWidth: '75%' }} />
            <View
              style={{
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderRadius: 100,
                backgroundColor: colorTransparency(colors.warning, 10),
              }}
            >
              <Text
                text={'#' + dapp.categories[0].toLocaleLowerCase()}
                color={colors.warning}
                size={12}
                style={{ lineHeight: 18 }}
              />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginVertical: 16,
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginHorizontal: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: colors.border,
          backgroundColor: colorTransparency(colors.block, 40),
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Icon icon="link" color={colors.borderLight} />
        <Text
          text={dapp.website}
          color={colors.borderLight}
          size={14}
          style={{ marginLeft: 8, lineHeight: 20, maxWidth: '90%' }}
        />
      </View>

      <Text
        text={dapp.fullDescription}
        color={colors.label}
        style={{ marginBottom: 12, lineHeight: 20, paddingHorizontal: 16, }}
        size={14}
      />
    </Screen>
  )
})
