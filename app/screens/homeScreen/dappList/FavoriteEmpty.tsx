import React from 'react'
import { View, Image } from 'react-native'
import { Text } from 'app/components'

const EMPTY_IMAGE = require('assets/images/empty-favorite.png')

export const FavoriteEmpty = () => {
  return (
    <View
      style={{
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image source={EMPTY_IMAGE} style={{ width: 180, height: 180 }} resizeMode="center" />
      <Text preset="label" text="No Favorite" style={{ maxWidth: '80%', textAlign: 'center' }} />
    </View>
  )
}
