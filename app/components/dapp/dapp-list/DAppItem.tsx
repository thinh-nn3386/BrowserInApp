import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { DAppType } from 'app/common/types/dapp'
import { Icon, Text } from 'app/components/cores'
import { useTheme } from 'app/services/context/Theme'
import { DAppLogo } from '../logo/DAppLogo'

interface Props {
  isFavorite?: boolean
  dapp: DAppType
  openApp: () => void
  openUrl: () => void
}

export const DAppItem = ({ dapp, openApp, openUrl, isFavorite }: Props) => {
  const { colors, lang } = useTheme()
  const description = dapp.description || { vi: '', en: '' }
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
          <Text text={dapp.name} />
          <Text
            preset="label"
            text={description[lang]}
            numberOfLines={1}
            style={{ paddingRight: 8, marginTop: 4 }}
            size="sm"
          />
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            backgroundColor: colors.block,
            borderRadius: 6,
            paddingHorizontal: 16,
          }}
          onPress={openUrl}
        >
          <Text tx="dapp.openApp.action" color={colors.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
