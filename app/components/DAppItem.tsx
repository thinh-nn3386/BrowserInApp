import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'app/components/Text'
import { Icon } from 'app/components/Icon'
import { DAppLogo } from './DAppLogo'
import { colorTransparency, colors } from 'app/theme'
import { DAppType } from 'app/resources/type'

interface Props {
  isShowFlag?: boolean
  isFavorite?: boolean
  dapp: DAppType
  openApp: () => void
  openUrl: () => void
}

export const DAppItem = ({ dapp, openApp, openUrl, isFavorite, isShowFlag }: Props) => {
  const description = dapp.description
  return (
    <TouchableOpacity onPress={openApp}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 72,
          paddingVertical: 8,
        }}
      >
        {isFavorite && <Icon icon="star-fill" color={colors.warning} style={{ marginRight: 12 }} />}
        <DAppLogo
          logo={dapp.logo}
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            marginRight: 12,
          }}
        />
        <View
          style={{
            flex: 1,
            paddingVertical: 8,
            maxWidth: '80%',
          }}
        >
          <Text
            text={dapp.name}
            style={{
              lineHeight: 22,
            }}
          />
          <Text
            preset="label"
            text={description}
            numberOfLines={1}
            style={{ paddingRight: 8, lineHeight: 18 }}
            size={12}
          />
        </View>
        {isShowFlag && (
          <View
            style={{
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderRadius: 100,
              backgroundColor: colorTransparency(colors.warning, 10),
            }}
          >
            <Text
              text={'#' + dapp.categories[0].toLocaleLowerCase()}
              color={colors.warning}
              size={12}
              style={{ lineHeight: 18 }}
            />
          </View>
        )}
        {!isShowFlag && (
          <TouchableOpacity
            style={{
              paddingVertical: 8,
              backgroundColor: colors.block,
              borderRadius: 6,
              paddingHorizontal: 16,
            }}
            onPress={openUrl}
          >
            <Text text="Open App" color={colors.link} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  )
}
