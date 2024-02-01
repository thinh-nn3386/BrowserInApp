import React from 'react'
import { ScrollView, View } from 'react-native'
import { Icon, Text } from 'app/components'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { colorTransparency, colors } from 'app/theme'
import { Header_Max_Height, useTabsNavigationContext } from './createTabsNavigationtContext'

interface Props {
  tabIndex: number
  setTabIndex: (val: number) => void
  onSearch: () => void
}

export const TabHeader = (props: Props) => {
  const { translationY } = useTabsNavigationContext()

  const $searchIconStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value, [Header_Max_Height / 2, Header_Max_Height], [0, 1]),
    }
  })

  return (
    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
      >
        <AnimatedLabel index={0} text={'Khám phá'} {...props} />
        <AnimatedLabel index={1} text={'Xếp hạng'} {...props} />
        <AnimatedLabel index={2} text={'Yêu thích'} {...props} />
      </ScrollView>

      <Animated.View
        style={[
          {
            position: 'absolute',
            right: 0,
            backgroundColor: colorTransparency(colors.background, 20),
            paddingLeft: 6,
          },
          $searchIconStyle,
        ]}
      >
        <View
          style={{
            marginTop: 4,
            backgroundColor: colorTransparency(colors.background, 40),
            paddingLeft: 6,
          }}
        >
          <View
            style={{
              backgroundColor: colorTransparency(colors.background, 80),
              paddingLeft: 6,
            }}
          >
            <Icon
              icon="magnifying-glass"
              containerStyle={{ paddingHorizontal: 16, backgroundColor: colors.background }}
              onPress={props.onSearch}
            />
          </View>
        </View>
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
    <Text
      style={{
        marginRight: 16,
      }}
      preset={tabIndex === index ? 'bold' : 'label'}
      size={20}
      onPress={() => {
        setTabIndex(index)
      }}
      text={text}
    />
  )
}
