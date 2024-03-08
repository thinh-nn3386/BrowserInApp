import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'app/components'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { colors } from 'app/theme'
import { Header_Max_Height, useTabsNavigationContext } from './createTabsNavigationtContext'

interface Props {
  tabIndex: number
  setTabIndex: (val: number) => void
  onSearch: () => void
  routes: { key: string }[]
}

export const TabHeader = (props: Props) => {
  const { translationY } = useTabsNavigationContext()

  const $searchIconStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value, [Header_Max_Height / 2, Header_Max_Height], [0, 1]),
    }
  })

  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      }}
    >
      <View
        style={{
          paddingVertical: 12,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {props.routes.map((e, index) => (
          <AnimatedLabel key={e.key} index={index} text={e.key} {...props} />
        ))}
      </View>

      <Animated.View
        style={[
          {
            position: 'absolute',
            right: 0,
          },
          $searchIconStyle,
        ]}
      >
        <Icon
          icon="magnifying-glass"
          containerStyle={{ paddingHorizontal: 16 }}
          onPress={props.onSearch}
        />
      </Animated.View>
    </View>
  )
}

const AnimatedLabel = ({
  index,
  text,
  tabIndex,
  setTabIndex,
}: {
  index: number
  text: string
  tabIndex: number
  setTabIndex: (val: number) => void
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        borderBottomWidth: 2,
        height: 50,
        justifyContent: 'center',
        borderBottomColor: tabIndex === index ? colors.link : colors.transparent,
      }}
    >
      <Text
        preset={tabIndex === index ? 'bold' : 'label'}
        size={20}
        onPress={() => {
          setTabIndex(index)
        }}
        text={text}
        color={tabIndex === index ? colors.link : colors.label}
      />
    </View>
  )
}
