import { Icon, Screen, Text } from 'app/components'
import { colors } from 'app/theme'
import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { TabView } from './TabView'
import { AppStackScreenProps } from 'app/navigators/navigator.types'

export const BrowserTabsScreen: FC<AppStackScreenProps<'browserTab'>> = (props) => {
  const navigation = props.navigation
  const onPress = () => {
    navigation.navigate('browser')
  }
  return (
    <Screen
      useSafe
      header={
        <View
          style={{
            height: 54,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 4,
          }}
        >
          <Icon icon="x-bold" onPress={() => {}} />
          <Text preset="bold" text="Tab" style={{ textAlign: 'center' }} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 24,
            }}
          />
        </View>
      }
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
          <Text preset="bold" text="Đóng tất cả" style={{ textAlign: 'center', flexGrow: 0 }} />
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
            <Icon
              icon="plus-bold"
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
          </View>

          <Text preset="bold" text="Xong" style={{ textAlign: 'center', flexGrow: 0 }} />
        </View>
      }
      contentContainerStyle={{
        backgroundColor: colors.background2,
      }}
    >
      <FlatList
        data={[
          {
            title: 'Infinite',
            url: 'https://infinite.red',
          },
          {
            title: 'Infinite',
            url: 'https://infinite.red',
          },
        ]}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          padding: 20,
        }}
        numColumns={2}
        renderItem={(data) => <TabView {...data} onPress={onPress} />}
      />
    </Screen>
  )
}
