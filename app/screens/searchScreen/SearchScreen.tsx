import { Icon, Screen, TextInput } from 'app/components'
import React, { FC } from 'react'
import { FlatList, View, Image, Dimensions } from 'react-native'
import { Text } from 'app/components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { AppStackScreenProps } from 'app/navigators/navigator.types'
import { DATA } from '../homeScreen/sampleData/rankData'
import { colors } from 'app/theme'

const NUMBER_COLUMNS = 4
const ITEM_SPACE = (Dimensions.get('screen').width - 80 - 64 * 4) / 3

export const SearchScreen: FC<AppStackScreenProps<'search'>> = (props) => {
  return (
    <Screen
      useSafe
      header={
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
          }}
        >
          <Animated.View style={{ flex: 1, paddingLeft: 16 }}>
            <TextInput
              autoFocus
              inputWrapperStyle={{ borderRadius: 100 }}
              placeholder="Tìm kiếm DApp hoặc Nhập URL"
              LeftAccessory={(props) => <Icon icon="magnifying-glass" {...props} />}
            />
          </Animated.View>
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
            }}
            onPress={() => {
              props.navigation.navigate('home')
            }}
          >
            <Text text="Huỷ" />
          </TouchableOpacity>
        </View>
      }
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        numColumns={NUMBER_COLUMNS}
        style={{ maxHeight: Dimensions.get('screen').height / 2 }}
        contentContainerStyle={{
          paddingHorizontal: 40,
          paddingVertical: 6,
        }}
        ListHeaderComponent={() => (
          <Text text={'Nổi bật'} size={20} style={{ marginVertical: 12, marginLeft: -20 }} />
        )}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginVertical: 6,
              width: 64,
              marginRight: index % NUMBER_COLUMNS !== NUMBER_COLUMNS - 1 ? ITEM_SPACE : 0,
            }}
          >
            <View
              style={{
                borderRadius: 16,
                padding: 8,
                marginBottom: 8,
                backgroundColor: colors.background2,
              }}
            >
              <Image
                source={item.logo}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                }}
              />
            </View>

            <Text
              text={item.name}
              size={14}
              style={{ textAlign: 'center', maxWidth: 56 }}
              numberOfLines={2}
            />
          </View>
        )}
      />
    </Screen>
  )
}
