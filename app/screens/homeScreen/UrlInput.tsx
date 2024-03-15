import * as React from 'react'
import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
import { Header_Max_Height, useTabsNavigationContext } from './createTabsNavigationtContext'
import { colors } from 'app/theme'
import { View, TextInput, Keyboard } from 'react-native'
import { Icon } from 'app/components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'app/components'
import { bin } from 'react-native-redash'
import { Ref } from 'react'

interface Props {
  setIsSearching: (val: boolean) => void
  isSearchinh: boolean
  searchText: string
  setSearchText: (val: string) => void
}

export const UrlInput = React.forwardRef(
  ({ searchText, setSearchText, isSearchinh, setIsSearching }: Props, ref: Ref<TextInput>) => {
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

    const animSearch = useDerivedValue(() => {
      return withTiming(bin(isSearchinh))
    })

    const $animSearch = useAnimatedStyle(() => {
      return {
        width: animSearch.value * 80,
      }
    })

    return (
      <Animated.View style={[{ paddingHorizontal: 16 }, $animHeight]}>
        <Animated.View style={[$animInput, { flexDirection: 'row', alignItems: 'center' }]}>
          <View
            testID="searchBar.view"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.block,
              borderRadius: 6,
              paddingLeft: 12,
              paddingVertical: 2,
              flex: 1,
              paddingRight: 8,
            }}
          >
            <Icon icon="magnifying-glass" size={20} color={colors.label} />

            <TextInput
              ref={ref}
              testID="searchBar.textInput"
              value={searchText}
              selectionColor={colors.primary}
              placeholder={'Tìm kiếm DApp hoặc Nhập UR'}
              placeholderTextColor={colors.label}
              onFocus={() => {
                setIsSearching(true)
              }}
              onChangeText={setSearchText}
              style={{
                flex: 1,
                paddingVertical: 8,
                paddingHorizontal: 8,
                fontSize: 16,
                lineHeight: 20,
                color: colors.text,
              }}
            />

            {!!searchText && (
              <Icon
                icon="x-circle-fill"
                size={20}
                color={colors.label}
                onPress={() => {
                  setSearchText('')
                }}
              />
            )}
          </View>

          <Animated.View style={$animSearch}>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss()
                setIsSearching(false)
              }}
              style={{
                width: 80,
                paddingLeft: 16,
              }}
            >
              <Text text="Cancel" />
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    )
  }
)
