import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Icon, IconTypes } from 'app/components'
import Modal from 'react-native-modal'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Share from 'react-native-share'
import Clipboard from '@react-native-clipboard/clipboard'
import { colors } from 'app/theme'

interface Props {
  url: string
  isOpen: boolean
  onClose: () => void
  clearCache: () => void
  goHome: () => void
}

export const Menu = ({ url, isOpen, onClose, clearCache, goHome }: Props) => {
  const insets = useSafeAreaInsets()

  const actions: ActionItemProps[] = [
    {
      text: 'Share',
      icon: 'share',
      onPress: async () => {
        onClose()
        try {
          const shareContent = {
            title: 'URL',
            url: url,
            failOnCancel: false,
          }
          await Share.open(shareContent)
        } catch (err) {
          console.log(err)
        }
      },
    },
    {
      text: 'Copy URL',
      icon: 'copy',
      onPress: () => {
        onClose()
        setTimeout(() => {
          Clipboard.setString(url)
        }, 200)
      },
    },
    {
      text: 'Clear cache',
      icon: 'trash',
      onPress: () => {
        onClose()
        clearCache()
      },
    },
    {
      text: 'Home',
      icon: 'house-line',
      onPress: () => {
        onClose()
        goHome()
      },
    },
  ]
  return (
    <Modal
      isVisible={isOpen}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={onClose}
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}
    >
      <View
        style={{
          borderTopLeftRadius: 12,
          borderTopEndRadius: 12,
          backgroundColor: colors.background,
          paddingBottom: insets.bottom,
        }}
      >
        <View
          style={{
            padding: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 4,
              borderRadius: 2,
              width: 50,
              backgroundColor: colors.border,
            }}
          ></View>
        </View>

        <View
          style={{
            marginTop: 8,
          }}
        >
          {actions.map((action) => (
            <MenuAionIten key={action.text} {...action} />
          ))}
        </View>
      </View>
    </Modal>
  )
}

interface ActionItemProps {
  text: string
  icon: IconTypes
  onPress: () => void
}
const MenuAionIten = ({ text, icon, onPress }: ActionItemProps) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
      onPress={onPress}
    >
      <Icon
        size={20}
        icon={icon}
        containerStyle={{
          width: 40,
          height: 40,
          backgroundColor: colors.background2,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 16,
        }}
      />
      <Text text={text} size={14} />
    </TouchableOpacity>
  )
}
