import React from 'react'
import { ColorValue, View } from 'react-native'
import { Text } from 'app/components'
import { DATA } from '../sampleData/data'
import { TabsNavigationFlatlist } from '../createTabsNavigationtContext'
import { colors } from 'app/theme'

export const ExploreTab = () => {
  return <TabData backgroundColor={colors.background} />
}

export const FavoritesTab = () => {
  return <TabData backgroundColor={colors.block} />
}

export const RankTab = () => {
  return <TabData backgroundColor={'#673ab7'} />
}

const TabData = ({ backgroundColor }: { backgroundColor: ColorValue }) => {
  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <TabsNavigationFlatlist
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginVertical: 8,
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 19,
                textAlign: 'center',
                padding: 20,
                color: '#fff',
              }}
            >
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  )
}
