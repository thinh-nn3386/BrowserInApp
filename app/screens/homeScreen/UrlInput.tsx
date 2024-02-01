import { Icon, TextInput } from 'app/components'
import * as React from 'react'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { Header_Max_Height, useTabsNavigationContext } from './createTabsNavigationtContext'

interface Props {
  onSearch: () => void
}

export const UrlInput = ({ onSearch }: Props) => {
  const { translationY } = useTabsNavigationContext()

  const $animHeight = useAnimatedStyle(() => {
    return {
      height: 52 - translationY.value,
    }
  })

  const $animInput = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: -translationY.value,
        },
      ],
      opacity: (Header_Max_Height - translationY.value) / Header_Max_Height,
    }
  })
  return (
    <Animated.View style={[{ paddingHorizontal: 16 }, $animHeight]}>
      <Animated.View style={$animInput}>
        <TextInput
          onPressIn={onSearch}
          editable={false}
          inputWrapperStyle={{ borderRadius: 100 }}
          placeholder="Tìm kiếm DApp hoặc Nhập URL"
          LeftAccessory={(props) => <Icon icon="magnifying-glass" {...props} />}
        />
      </Animated.View>
    </Animated.View>
  )
}
