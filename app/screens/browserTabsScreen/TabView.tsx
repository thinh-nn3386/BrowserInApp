import { colors } from 'app/theme'
import React from 'react'
import { Dimensions, View } from 'react-native'
import { Text, Icon } from 'app/components'
import WebView from 'react-native-webview'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const NUMBER_OF_COLUMN = 2
const SPACE = 20
const ITEM_WIDTH = (Dimensions.get('screen').width - 60) / 2

interface Props {
  item: any
  index: number
  onPress: () => void
}

export const TabView = ({ item, index, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={{
        width: ITEM_WIDTH,
        height: ITEM_WIDTH + 40,
        borderRadius: 12,
        marginLeft: index % NUMBER_OF_COLUMN !== 0 ? SPACE : 0,
        overflow: 'hidden',
      }}
      onPress={onPress}
    >
      <View
        style={{
          height: 40,
          padding: 4,
          backgroundColor: colors.background,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 100,
            backgroundColor: colors.background2,
            marginRight: 4,
          }}
        />
        <Text
          text="asdasd asdasdasd"
          numberOfLines={1}
          size={14}
          ellipsizeMode="tail"
          style={{
            maxWidth: ITEM_WIDTH - 60,
          }}
        />
        <Icon
          icon="x"
          color={colors.label}
          size={18}
          containerStyle={{
            padding: 4,
          }}
        />
      </View>
      <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ backgroundColor: colors.background2, flex: 1 }}
        pointerEvents="none"
      />
    </TouchableOpacity>
  )
}
