import React, {
  ComponentType,
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Icon } from './Icon'
import { colors, colorTransparency } from 'app/theme'

export interface TextFieldAccessoryProps {
  style: StyleProp<any>
  multiline: boolean
  editable: boolean
}

export interface TextFieldProps extends Omit<RNTextInputProps, 'ref'> {
  /**
   * focus input or blur
   */
  isFocus?: boolean
  /**
   * The placeholder text to display if not using .
   */
  placeholder?: string
  /**
   * Optional input style override.
   */
  style?: StyleProp<TextStyle>
  /**
   * Style overrides for the container
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * Style overrides for the input wrapper
   */
  inputWrapperStyle?: StyleProp<ViewStyle>
  /**
   * An optional component to render on the right side of the input.
   * Example: `RightAccessory={(props) => <Icona icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  RightAccessory?: ComponentType<TextFieldAccessoryProps>
  /**
   * An optional component to render on the left side of the input.
   * Example: `LeftAccessory={(props) => <Icona icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  LeftAccessory?: ComponentType<TextFieldAccessoryProps>
}

/**
 * A component that allows for the entering and editing of text.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-TextField.md)
 */
export const TextInput = forwardRef((props: TextFieldProps, ref: Ref<RNTextInput>) => {
  const {
    isFocus: isFocusProps,
    placeholder,
    RightAccessory,
    LeftAccessory,
    style: $inputStyleOverride,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    onFocus: propsFocus,
    onBlur: propsBlur,
    ...TextInputProps
  } = props

  // ------------------------PARAMS-------------------------

  const [isFocus, setIsFocus] = useState(false)
  const [isCleared, setIsCleared] = useState(false)
  const input = useRef<RNTextInput>()

  // ------------------------COMPUTED-----------------------

  const disabled = TextInputProps.editable === false

  const placeholderContent = placeholder

  const $containerStyles = [$containerStyleOverride]

  const $inputWrapperStyles: StyleProp<ViewStyle> = [
    $inputWrapperStyle,
    {
      borderColor: isFocus && !disabled ? colors.borderLight : colors.block,
      backgroundColor:
        isFocus && !disabled ? colors.background2 : colorTransparency(colors.background2, 50),
    },
    TextInputProps.multiline && { minHeight: 112 },
    LeftAccessory && { paddingStart: 0 },
    RightAccessory && { paddingEnd: 0 },
    $inputWrapperStyleOverride,
  ]

  const $inputStyles = [
    $inputStyle,
    { color: colors.text },
    disabled && { color: colors.disable },
    TextInputProps.multiline && { height: 'auto' },
    $inputStyleOverride,
  ]

  // ------------------------METHODS------------------------

  const focusInput = () => {
    if (disabled) return

    input.current?.focus()
  }

  useImperativeHandle(ref, () => input.current)

  const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(true)
    propsFocus && propsFocus(e)
  }

  const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(false)
    if (propsBlur) {
      propsFocus && propsBlur(e)
    }
  }

  // ------------------------EFFECTS------------------------

  useEffect(() => {
    if (isFocusProps) {
      input.current?.focus()
    } else {
      input.current?.blur()
    }
  }, [isFocusProps])

  useEffect(() => {
    if (isCleared && TextInputProps.value) {
      setIsCleared(false)
    }
  }, [TextInputProps.value])

  // ------------------------RENDER-------------------------

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={$containerStyles}
      onPress={focusInput}
      accessibilityState={{ disabled }}
    >
      <View style={$inputWrapperStyles}>
        {!!LeftAccessory && (
          <LeftAccessory
            style={$leftAccessoryStyle}
            editable={!disabled}
            multiline={TextInputProps.multiline}
          />
        )}

        <RNTextInput
          ref={input}
          underlineColorAndroid={colors.transparent}
          textAlignVertical="top"
          placeholder={placeholderContent}
          placeholderTextColor={colors.label}
          {...TextInputProps}
          onFocus={onFocus}
          onBlur={onBlur}
          editable={!disabled}
          style={$inputStyles}
        />

        {TextInputProps.value && !isCleared && isFocus && (
          <Icon
            icon="x-circle-fill"
            size={20}
            containerStyle={$rightAccessoryStyle}
            onPress={() => {
              setIsCleared(true)
              input.current.clear()
              TextInputProps.onChangeText('')
            }}
          />
        )}

        {!!RightAccessory && (
          <RightAccessory
            style={$rightAccessoryStyle}
            editable={!disabled}
            multiline={TextInputProps.multiline}
          />
        )}
      </View>
    </TouchableOpacity>
  )
})

const $inputWrapperStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-start',
  borderWidth: 1,
  borderRadius: 12,
  overflow: 'hidden',
}

const $inputStyle: TextStyle = {
  flex: 1,
  alignSelf: 'stretch',
  fontSize: 16,
  height: 24,
  paddingVertical: 0,
  paddingHorizontal: 0,
  margin: 8,
}

const $rightAccessoryStyle: ViewStyle = {
  paddingEnd: 12,
  height: 40,
  paddingLeft: 4,
  justifyContent: 'center',
  alignItems: 'center',
}
const $leftAccessoryStyle: ViewStyle = {
  height: 40,
  marginLeft: 12,
  paddingRight: 4,
  justifyContent: 'center',
  alignItems: 'center',
}
