import React, { forwardRef, useContext, createContext, useMemo, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, Platform } from 'react-native'
import { SharedValue, clamp, useDerivedValue, useSharedValue } from 'react-native-reanimated'

export const Header_Max_Height = 52

const IS_ANDROID = Platform.OS === 'android'

export const TabsNavigationContext = createContext(
  null as {
    scrollOffsetY: SharedValue<number>
    translationY: SharedValue<number>
    isSearch: SharedValue<boolean>
  } | null
)

export const useTabsNavigationContext = () => useContext(TabsNavigationContext)

export function createTabsNavigationComponent<T>(Component: T): T {
  const TabsNavigationComponent = forwardRef((props, ref) => {
    const scrollOffsetY = useSharedValue(0)
    const isSearch = useSharedValue(false)

    // animated header height
    const translationY = useDerivedValue(() => {
      return isSearch.value ? 0 : scrollOffsetY.value
    })

    const contextValues = useMemo(
      () => ({
        scrollOffsetY,
        translationY,
        isSearch
      }),
      []
    )

    return (
      <TabsNavigationContext.Provider value={contextValues}>
        {/* @ts-ignore */}
        <Component ref={ref} {...props} />
      </TabsNavigationContext.Provider>
    )
  })

  return TabsNavigationComponent as unknown as T
}

export function useTabsAnimatedHeader(
  disableAnimated?: boolean
) {
  const { scrollOffsetY } = useTabsNavigationContext()
  const ref2 = useRef(null)
  const prevY = useSharedValue(0)
  const scrollDirection = useSharedValue<'down' | 'up'>('up')

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (IS_ANDROID || disableAnimated) return
    const offsetY = event.nativeEvent.contentOffset.y
    scrollDirection.value = offsetY - prevY.value > 0 ? 'down' : 'up'
    prevY.value = offsetY
    scrollOffsetY.value = clamp(offsetY, 0, Header_Max_Height)
  }

  const onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (IS_ANDROID || disableAnimated) return
    if (event.nativeEvent.contentOffset.y > Header_Max_Height) return

    if (ref2?.current?.scrollToLocation) {
      ref2?.current?.scrollToLocation({
        viewOffset: scrollDirection.value === 'down' ? Header_Max_Height : 0,
        itemIndex: 0,
        animated: true,
      })
    }

    if (ref2?.current?.scrollToOffset) {
      ref2?.current?.scrollToOffset({
        offset: scrollDirection.value === 'down' ? Header_Max_Height : 0,
        animated: true,
      })
    }
  }
  return {
    alwaysBounceVertical: false,
    flatListRef: ref2,
    scrollEventThrottle: 16,
    onScroll,
    onScrollEndDrag,
  }
}
