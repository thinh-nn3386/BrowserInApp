import React from 'react'
import { View, ViewStyle } from 'react-native'
import { CryptoIcon } from 'app/components/wallet'
import { SUPPORTED_CHAINS } from 'app/services/blockchain/chain'
import { SDKToken } from 'app/services/blockchain/token'
import { Text } from 'app/components/cores'
import { useTheme } from 'app/services/context/Theme'

interface Props {
  style?: ViewStyle
  chainIds?: SDKToken['chainId'][]
  limit?: number
  size?: number
  gap?: number
}
export const SuportedChainIcon = ({ style, chainIds, limit, size, gap }: Props) => {
  const { colors } = useTheme()
  const chains: { chainId: SDKToken['chainId']; currency: string }[] = SUPPORTED_CHAINS.filter(
    (c) => chainIds?.includes(c.chainId)
  )
  const extraChainCount =
    limit && limit > 0 && chains.length - limit > 0 ? chains.length - limit + 1 : 0
  const renderedChains = extraChainCount ? chains.slice(0, limit - 1) : chains

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: chains.length ? -4 : 0,
        },
        style,
      ]}
    >
      {renderedChains.map((chain) => (
        <View key={chain.chainId} style={{ margin: gap ? gap / 2 : 2 }}>
          <CryptoIcon symbol={chain.currency} chainId={chain.chainId} size={size || 20} />
        </View>
      ))}
      {extraChainCount > 0 && (
        <View
          style={{
            margin: gap ? gap / 2 : 2,
            backgroundColor: colors.disable,
            height: size || 20,
            width: size || 20,
            borderRadius: size || 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text weight="bold" size="sm" text={`+${extraChainCount}`} color={colors.background} />
        </View>
      )}
    </View>
  )
}
