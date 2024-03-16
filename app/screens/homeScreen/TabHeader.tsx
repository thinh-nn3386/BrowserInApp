import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'app/components'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { colors } from 'app/theme'
import { Header_Max_Height, useTabsNavigationContext } from './createTabsNavigationtContext'
import { useTabNavigation } from './useTabNavigation'

interface Props {
  isSearching: boolean
  isShowTabsIcon: boolean
  tabIndex: number
  setTabIndex: (val: number) => void
  onSearch: () => void
  routes: { key: string }[]
}

export const TabHeader = (props: Props) => {
  const { translationY } = useTabsNavigationContext()
  const { openBrowserTabs } = useTabNavigation()

  const $searchIconStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value, [Header_Max_Height / 2, Header_Max_Height], [0, 1]),
    }
  })

  return (
    <View
      style={{
        opacity: props.isSearching ? 0 : 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Animated.View style={$searchIconStyle}>
          <Icon
            icon="magnifying-glass"
            containerStyle={{ paddingLeft: 16, paddingRight: props.isShowTabsIcon ? 8 : 16 }}
            onPress={props.onSearch}
          />
        </Animated.View>
        {props.isShowTabsIcon && (
          <Icon
            icon="browsers"
            containerStyle={{ paddingRight: 16, paddingLeft: 8 }}
            onPress={openBrowserTabs}
          />
        )}
      </View>
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
