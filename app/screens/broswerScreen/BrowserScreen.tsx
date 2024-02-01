import React from 'react'
import { Icon, Screen, Text } from 'app/components'
import { View } from 'react-native'
import { colors } from 'app/theme'

export const BrowserScreen = () => {
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
          <View
            style={{
              borderRadius: 100,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.background,
            }}
          >
            <Icon
              icon="x-bold"
              containerStyle={{ paddingVertical: 2, paddingHorizontal: 12 }}
              size={16}
            />
            <View
              style={{ marginVertical: 12, height: 16, width: 1, backgroundColor: colors.label }}
            />
            <Icon
              icon="minus-bold"
              containerStyle={{ paddingVertical: 2, paddingHorizontal: 12 }}
              size={16}
            />
          </View>
          <Text
            text={'asdasdasdasdasdasdasdasdasdasdasdasdasd'}
            style={{ maxWidth: '60%', paddingHorizontal: 12 }}
            numberOfLines={2}
          />
          <View style={{ width: 80 }}></View>
        </View>
      }
      footer={
        <View
          style={{
            paddingVertical: 12,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon icon="caret-left" />
          <Icon icon="caret-right" />
          <Icon icon="number-square-one" />
          <Icon icon="arrows-clockwise" />
          <Icon icon="dots-three-bold" />
        </View>
      }
      backgroundColor={colors.background2}
      contentContainerStyle={{ flex: 1, backgroundColor: colors.background }}
    ></Screen>
  )
}
