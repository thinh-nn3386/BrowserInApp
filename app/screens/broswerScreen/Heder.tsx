import React from 'react'
import { Icon, Screen, Text } from 'app/components'
import { View } from 'react-native'
import { colors } from 'app/theme'

interface Props {
  closeBrowser: () => void
  cacheBrowser: () => void
  title: string
}

export const Header = ({ closeBrowser, cacheBrowser, title }: Props) => {
  const toggleFavorite = () => {}

  const changeWallet = () => {}
  return (
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
          onPress={closeBrowser}
        />
        <View style={{ marginVertical: 12, height: 16, width: 1, backgroundColor: colors.label }} />
        <Icon
          icon="minus-bold"
          containerStyle={{ paddingVertical: 2, paddingHorizontal: 12 }}
          size={16}
          onPress={cacheBrowser}
        />
      </View>
      <Text
        text={title}
        size={14}
        style={{ maxWidth: '55%', paddingHorizontal: 12, textAlign: 'center' }}
        numberOfLines={2}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Icon
          icon="star"
          containerStyle={{ paddingHorizontal: 16, paddingRight: 8 }}
          size={24}
          onPress={toggleFavorite}
        />
        <Icon
          icon="wallet"
          containerStyle={{ paddingLeft: 8, paddingRight: 16 }}
          size={24}
          onPress={changeWallet}
        />
      </View>
    </View>
  )
}
