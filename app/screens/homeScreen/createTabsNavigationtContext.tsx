import React, { forwardRef, useContext, createContext, useMemo, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, Platform } from 'react-native'
import { SharedValue, clamp, useSharedValue } from 'react-native-reanimated'

export const Header_Max_Height = 52
export const Header_Min_Height = 0

const IS_ANDROID = Platform.OS === 'android'

export const TabsNavigationContext = createContext(
  null as {
    translationY: SharedValue<number>
  } | null
)

export const useTabsNavigationContext = () => useContext(TabsNavigationContext)

export function createTabsNavigationComponent<T>(Component: T): T {
  const TabsNavigationComponent = forwardRef((props, ref) => {
    // Show and Hide  tabs bottom bar navigator
    const translationY = useSharedValue(0)

    const contextValues = useMemo(
      () => ({
        translationY,
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
  const { translationY } = useTabsNavigationContext()
  const ref2 = useRef(null)
  const prevY = useSharedValue(0)
  const scrollDirection = useSharedValue<'down' | 'up'>('up')

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (IS_ANDROID || disableAnimated) return
    const offsetY = event.nativeEvent.contentOffset.y
    scrollDirection.value = offsetY - prevY.value > 0 ? 'down' : 'up'
    prevY.value = offsetY
    translationY.value = clamp(offsetY, Header_Min_Height, Header_Max_Height)
  }

  const onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (IS_ANDROID || disableAnimated) return
    if (event.nativeEvent.contentOffset.y > Header_Max_Height) return

    if (ref2?.current?.scrollToLocation) {
      ref2?.current?.scrollToLocation({
        viewOffset: scrollDirection.value === 'down' ? Header_Max_Height : Header_Min_Height,
        itemIndex: 0,
        animated: true,
      })
    }

    if (ref2?.current?.scrollToOffset) {
      ref2?.current?.scrollToOffset({
        offset: scrollDirection.value === 'down' ? Header_Max_Height : Header_Min_Height,
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
