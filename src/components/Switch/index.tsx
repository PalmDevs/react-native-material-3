import { Pressable, StyleSheet, View } from 'react-native'
import { ShapeScale, State } from '../../constants'
import { useMemo, useState } from 'react'
import { createThumbStyle, createTrackStyle } from './styles'
import useMaterial3ColorScheme from '../../hooks/useMaterial3ColorScheme'
import { useStyle } from 'react-native-style-utilities'

export default function Switch(props: SwitchProps) {
    // The symbol is unique and will never change until a new set of colors are generated
    const [colors, symbol] = useMaterial3ColorScheme()

    // * Props
    const {
        toggled,
        setToggled,
        disabled = false,
        forceInteractivityState,
        variant = 'default',
    } = props

    const [interactivityState, setInteractivityState] = useState<
        NonNullable<SwitchProps['forceInteractivityState']>
    >(forceInteractivityState ?? State.InteractivityState.NoInteraction)

    // * Styles

    const styleOptions = useMemo(
        () => ({
            // ! ORDER IS IMPORTANT
            variant,
            toggled,
            [toggled ? 'interactivityStateToggled' : 'interactivityState']:
                interactivityState,
            [toggled ? 'disabledToggled' : 'disabled']: disabled,
        }),
        [variant, toggled, interactivityState, disabled]
    )

    const trackStyle = useMemo(
        () => createTrackStyle(colors)(styleOptions),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [symbol, toggled, disabled, interactivityState]
    )

    const thumbStyle = useMemo(
        () => createThumbStyle(colors)(styleOptions),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [symbol, variant, toggled, disabled, interactivityState]
    )

    const trackContainerStyle = useStyle(
        () => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }),
        []
    )

    const thumbContainerStyle = useStyle(
        () => ({
            position: 'absolute',
            display: 'flex',
            alignItems: toggled ? 'flex-end' : 'flex-start',
            justifyContent: 'center',
            width: 52,
            height: 32,
        }),
        [toggled]
    )

    const stateLayerStyle = useStyle(() => [styles.base, styles.stateLayer], [])
    const pressableStyle = useStyle(() => [styles.base, styles.pressable], [])

    const resetIntState = useMemo(
        () => () =>
            setInteractivityState(
                forceInteractivityState ??
                    State.InteractivityState.NoInteraction
            ),
        [forceInteractivityState]
    )

    const setIntState = useMemo(
        () =>
            (
                state: Exclude<keyof typeof State.InteractivityState, 'Dragged'>
            ) =>
                setInteractivityState(
                    forceInteractivityState ?? State.InteractivityState[state]
                ),
        [forceInteractivityState]
    )

    return (
        <View style={trackContainerStyle}>
            <View style={trackStyle} />
            <View style={thumbContainerStyle}>
                <View style={stateLayerStyle}>
                    <Pressable
                        style={pressableStyle}
                        // TODO: State layer colors
                        disabled={Boolean(disabled)}
                        android_ripple={{ color: 'rgba(0, 0, 0, 0.12)' }}
                        onPressIn={() => setIntState('Pressed')}
                        onPressOut={resetIntState}
                        onPress={() => !disabled && setToggled(tg => !tg)}
                        onHoverIn={() => setIntState('Hovered')}
                        onHoverOut={resetIntState}
                        onFocus={() => setIntState('Focused')}
                        onBlur={resetIntState}
                    >
                        <View style={thumbStyle} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...ShapeScale.Full,
    },
    // TODO: Fix this magic number
    // Some alignment issues happen when not using magic numbers...
    stateLayer: {
        width: 39.9999,
        height: 39.9999,
        overflow: 'hidden',
        marginHorizontal: -4.0001,
    },
    pressable: {
        width: 48,
        height: 48,
    },
})

export interface SwitchProps {
    /**
     * The variant of this switch
     * - `'default'`: Default switch
     * - `'icon'`: Switch with cross and check icon in the thumb when toggled
     * - `'enabledIcon'`: Same as `'icon'`, but only shows a check icon when enabled
     * @see https://m3.material.io/components/switch/specs#cec32bde-7569-4af3-96bf-ccbc7f4cbba3
     * @default 'default'
     */
    variant?: 'default' | 'icon' | 'enabledIcon'
    /**
     * Whether this switch is toggled
     */
    toggled: boolean | State.ToggleableState
    /**
     * `setState` callback to set the value of `toggled`
     */
    setToggled: React.Dispatch<React.SetStateAction<State.ToggleableState>>
    /**
     * Whether this switch is disabled
     */
    disabled?: boolean | State.UsabilityState
    /**
     * ## **Do NOT use unless you know what you're doing!**
     * Forces the interactivity state of this switch.
     */
    forceInteractivityState?: Exclude<
        State.InteractivityState,
        State.InteractivityState.Dragged
    >
}
