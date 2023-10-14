import { useMemo, useRef } from 'react'
// prettier-ignore
import { Pressable, PressableProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import color from 'tinycolor2'
import { ShapeScale, StateEnum, StateLayerOverlayOpacity } from '../constants'

/**
 * A state layer is a semi-transparent covering on an element that indicates its state. State layers provide a systematic approach to visualizing states by using opacity. A layer can be applied to an entire element or in a circular shape and only one state layer can be applied at a given time.
 * ### This does not need to be passed to a component.
 * @see https://m3.material.io/foundations/interaction/states/state-layers
 */
export default function StateLayer(props: StateLayerProps) {
    const {
        state,
        rippleEffectColor: rippleColor,
        interactiveTargetStyle: targetStyle,
        effectContainerStyle,
        containInsideParent = false,
        children,
    } = props

    // Avoid calculating the same colors every now and then
    const rippleColorCache = useRef(
        {} as Record<
            keyof typeof StateLayerOverlayOpacity,
            Record<string, string>
        >
    )

    if (!rippleColorCache.current[state]) rippleColorCache.current[state] = {}
    if (!rippleColorCache.current[state][rippleColor])
        rippleColorCache.current[state][rippleColor] = color(rippleColor)
            .setAlpha(StateLayerOverlayOpacity[state])
            .toString('hex8')

    const containInsideParentStyles: StyleProp<ViewStyle> = useMemo(
        () =>
            containInsideParent &&
            ({
                width: '100%',
                height: '100%',
            } as ViewStyle),
        [containInsideParent]
    )

    return (
        <View
            style={[
                styles.effectContainerDefault,
                containInsideParentStyles,
                effectContainerStyle,
            ]}
        >
            <Pressable
                {...props}
                android_ripple={{
                    color: rippleColorCache.current[state][rippleColor],
                }}
                style={[
                    styles.interactiveTargetDefault,
                    containInsideParentStyles,
                    targetStyle,
                ]}
            >
                {children}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    effectContainerDefault: {
        ...ShapeScale.Full,
        // Screw RN's centering bug
        width: 39.9999,
        height: 39.9999,
        margin: -0.0001,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    interactiveTargetDefault: {
        ...ShapeScale.Full,
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export type StateLayerProps = Omit<
    PressableProps & {
        /**
         * The current state of the component
         */
        state: StateEnum
        disabled: boolean
        /**
         * The color of the ripple effect. Only works on Android.
         */
        rippleEffectColor: string

        /**
         * Whether to contain the state layer inside the parent element
         *  - Some components (like buttons, FABs) may require this option to be enabled
         *  - Some other components (like switches, *whose state layer are larger than and placed over the thumb*) may require this option to be disabled
         * @default false
         */
        containInsideParent?: boolean

        /**
         * If **absolutely needed**, you can overwrite the styles of the effect container.\
         * By default, the effect container is a `<Pressable>` with the following styles applied:
         * ```js
         * {
         *    ...ShapeScale.Full,
         *    width: 40,
         *    height: 40,
         *    overflow: 'hidden',
         * }
         * ```
         */
        effectContainerStyle?: StyleProp<ViewStyle>
        /**
         * If **absolutely needed**, you can overwrite the styles of the interactive target.\
         * By default, the interactive target is a `<Pressable>` with the following styles applied:
         * ```js
         * {
         *    ...ShapeScale.Full,
         *    width: 48,
         *    height: 48,
         * }
         * ```
         */
        interactiveTargetStyle?: StyleProp<ViewStyle>

        children?: React.ReactNode | React.ReactNode[]
    },
    'style'
>
