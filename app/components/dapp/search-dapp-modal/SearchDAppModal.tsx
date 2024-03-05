import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { Screen, Text } from 'app/components/cores'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { SearchBar } from 'app/components/utils'
import { useTheme } from 'app/services/context/Theme'
import { DAppsList } from '../dapp-list/DAppsList'
import { DAppType } from 'app/common/types/dapp'
import { IS_IOS } from 'app/common/constants'

interface Props {
  isOpen: boolean
  onClose: () => void
  openApp?: (app: DAppType) => void
  openUrl?: (params: { url?: string; dapp?: DAppType }) => void
}

export const SearchDAppModal = ({ isOpen, onClose, openApp, openUrl }: Props) => {
  const { colors } = useTheme()

  // ---------------------------- PARAMS -----------------------------

  const [searchText, setSearchText] = useState('')

  // ---------------------------- METHOD -----------------------------

  const onReset = () => {
    setSearchText('')
  }

  // ---------------------------- RENDER -----------------------------

  return (
    <Modal
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      isVisible={isOpen}
      style={{
        margin: 0,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: colors.background2,
      }}
      onModalHide={onReset}
    >
      <Screen
        safeAreaEdges={IS_IOS ? ['top', 'bottom'] : []}
        backgroundColor={colors.background2}
        header={
          <View
            style={{
              height: 56,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Animated.View style={{ flex: 1, paddingLeft: 16 }}>
              <SearchBar
                autoCapitalize="none"
                onSearch={setSearchText}
                value={searchText}
                placeholderTx="dapp.search"
                autoFocus
              />
            </Animated.View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 16,
              }}
              onPress={onClose}
            >
              <Text tx="common.cancel" />
            </TouchableOpacity>
          </View>
        }
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <DAppsList searchText={searchText} openApp={openApp} openUrl={openUrl} />
      </Screen>
    </Modal>
  )
}
