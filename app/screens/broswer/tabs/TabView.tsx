import { colors } from 'app/theme'
import React from 'react'
import { Dimensions, View, Image } from 'react-native'
import { Text, Icon } from 'app/components'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const NUMBER_OF_COLUMN = 2
const SPACE = 20
const ITEM_WIDTH = (Dimensions.get('screen').width - 60) / 2

interface Props {
  title: string
  localImage: string
  lastUpdate: number
  index: number
  onPress: () => void
  onClose: () => void
}

export const TabView = ({ title, localImage, lastUpdate, index, onPress, onClose }: Props) => {
  return (
    <View
      style={{
        width: ITEM_WIDTH,
        height: ITEM_WIDTH + 40,
        borderRadius: 12,
        marginLeft: index % NUMBER_OF_COLUMN !== 0 ? SPACE : 0,
        overflow: 'hidden',
      }}
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
        <Text
          text={title}
          numberOfLines={1}
          size={12}
          ellipsizeMode="tail"
          style={{
            marginLeft: 12,
            maxWidth: ITEM_WIDTH - 48,
          }}
        />
        <Icon
          icon="x"
          color={colors.label}
          size={18}
          containerStyle={{
            padding: 4,
          }}
          onPress={onClose}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: ITEM_WIDTH,
            height: ITEM_WIDTH,
            backgroundColor: colors.background,
          }}
        >
          {!!localImage && (
            <Image
              key={lastUpdate}
              source={{ uri: "file://" + localImage }}
              style={{ flex: 1, maxWidth: ITEM_WIDTH }}
              resizeMode="cover"
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}
