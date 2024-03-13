import { Icon, Screen, Text } from 'app/components'
import { colors } from 'app/theme'
import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { TabView } from './TabView'
import { BrowserTabsScreenProps } from 'app/navigators/navigator.types'
import { observer } from 'mobx-react-lite'
import { useStores } from 'app/models'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { WebsiteType } from 'app/resources/type'

export const BrowserTabsScreen: FC<BrowserTabsScreenProps<'tabs'>> = observer((props) => {
  const navigation = props.navigation
  const store = useStores()

  const browserTabs = store.browserTabs.toJSON()

  const onPress = (data: WebsiteType) => {
    navigation.navigate('website' + data.id, data)
  }

  const onCloseTabs = (id: string) => {
    store.removeBrowserTabs(id)
  }

  const navigateToHome = () => {
    navigation.navigate('home')
  }

  return (
    <Screen
      useSafe
      header={
        <View style={{
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Icon icon="x" onPress={navigateToHome} />
          <Text preset='bold' text={"Tabs"} />
          <View style={{ width: 24 }} />
        </View>}
      footer={
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 12,
            height: 64,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              position: 'absolute',
              left: 0,
              top: 12,
              right: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity onPress={navigateToHome} >
              <Icon
                icon="plus"
                size={28}
                color={colors.background}
                containerStyle={{
                  width: 40,
                  height: 40,
                  padding: 12,
                  borderRadius: 8,
                  backgroundColor: colors.text,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              store.removeAllBrowserTabs()
              navigateToHome()
            }}
          >
            <Text
              preset="bold"
              text="Close All"
              style={{ textAlign: 'center', flexGrow: 0 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Text preset="bold" text="Done" style={{ textAlign: 'center', flexGrow: 0 }} />
          </TouchableOpacity>
        </View>
      }
      contentContainerStyle={{
        backgroundColor: colors.background2,
      }}
    >
      <FlatList
        data={browserTabs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: 20,
        }}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item, index }) => (
          <TabView
            localImage={item.localImage}
            lastUpdate={item.lastUpdaetImage}
            title={item.title}
            index={index}
            onPress={() => {
              onPress(item)
            }}
            onClose={() => {
              onCloseTabs(item.id)
            }}
          />
        )}
      />
    </Screen>
  )
})
