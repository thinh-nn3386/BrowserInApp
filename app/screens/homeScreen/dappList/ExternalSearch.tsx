import React from 'react'
import { Linking, TouchableOpacity, View } from 'react-native'
import { Text, Icon } from 'app/components'
import { useHelper } from 'app/hooks/useHelper'
import { useTabNavigation } from '../useTabNavigation'
import { colors } from 'app/theme'


interface Props {
  searchText: string
  isSearcByUrl: boolean
  isSearchByGoogle: boolean
}

export const ExternalSearch = ({ isSearcByUrl, searchText, isSearchByGoogle }: Props) => {
  const { getUuid } = useHelper()
  const { openUrl } = useTabNavigation()

  return (
    <View>
      {isSearcByUrl && (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingTop: 16,
            paddingHorizontal: 16,
          }}
          onPress={() => {
            Linking.canOpenURL(searchText).then((result) => {
              console.log(result, searchText)
              if (result) {
                openUrl({
                  title: searchText,
                  url: searchText,
                  id: getUuid(),
                })
              } else {
                openUrl({
                  title: searchText,
                  url: 'https://www.google.com/search?q=' + searchText.replace('https://', ''),
                  id: getUuid(),
                })
              }
            })
          }}
        >
          <Icon icon={'browser'} color={colors.label} />
          <Text preset="label" text={searchText} style={{ marginHorizontal: 8, flex: 1 }} />

          <Icon icon={'caret-right'} color={colors.label} />
        </TouchableOpacity>
      )}
      {!isSearcByUrl && isSearchByGoogle && !!searchText && (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 16,
            paddingTop: 16,
          }}
          onPress={() => {
            openUrl({
              title: searchText,
              url: 'https://www.google.com/search?q=' + searchText.replace('https://', ''),
              id: getUuid(),
            })
          }}
        >
          <Icon icon={'google-chrome-logo'} color={colors.label} />
          <Text
            preset="label"
            text={`Search by google '${searchText}'`}
            style={{ marginHorizontal: 8, flex: 1 }}
          />
          <Icon icon={'caret-right'} color={colors.label} />
        </TouchableOpacity>
      )}
    </View>
  )

}