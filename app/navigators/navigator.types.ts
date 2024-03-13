// import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { DAppType, WebsiteType } from 'app/resources/type'

/**
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  home: undefined
  detail: {
    dapp: DAppType
  }
  browser: NavigatorScreenParams<BrowserNavigatorParamsList>
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// -----------------APP NAVIGATOR---------------------------------


export type BrowserNavigatorParamsList = {
  tabs: undefined
  website: WebsiteType
} & Record<string, WebsiteType>

export type BrowserTabsScreenProps<T extends keyof BrowserNavigatorParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<BrowserNavigatorParamsList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >