import { View } from 'react-native'
import { StateEnum } from '../../constants'
import { useMemo, useState } from 'react'
import useMaterial3ColorScheme from '../../hooks/theming/useMaterial3ColorScheme'
import StateLayer from '../StateLayer'
import {
    createThumbContainerStyle,
    createThumbStyle,
    createTrackStyle,
    styles,
} from './styles'

export default function Switch(props: SwitchProps) {
    const { activated, setActivated, disabled = false } = props

    const colors = useMaterial3ColorScheme()
    const [state, setState] = useState(StateEnum.Default)

    const scopedStyles = useMemo(
        () =>
            ({
                track: createTrackStyle(props, state, colors),
                thumb: createThumbStyle(props, state, colors),
                thumbContainer: createThumbContainerStyle(props, state, colors),
            }) as const,
        [props, state, colors]
    )

    const stateLayerRippleColor = useMemo(
        () => (activated ? colors.primary : colors.onSurface),
        [activated, colors]
    )

    // Extreme performance optimization

    const toggleListener = useMemo(
        () => () => setActivated(a => !a),
        [setActivated]
    )

    const resetStateListener = useMemo(
        () => () => setState(StateEnum.Default),
        []
    )

    return (
        <View style={styles.trackContainer}>
            <View style={scopedStyles.track} />
            <View style={scopedStyles.thumbContainer}>
                <StateLayer
                    disabled={disabled}
                    rippleEffectColor={stateLayerRippleColor}
                    state={state}
                    // Enter listeners
                    onPress={toggleListener}
                    onAccessibilityTap={toggleListener}
                    onMagicTap={toggleListener}
                    onPressIn={() => setState(StateEnum.Pressed)}
                    onHoverIn={() => setState(StateEnum.Hovered)}
                    onFocus={() => setState(StateEnum.Focused)}
                    // Exit listeners
                    onPressOut={resetStateListener}
                    onHoverOut={resetStateListener}
                    onBlur={resetStateListener}
                >
                    <View style={scopedStyles.thumb} />
                </StateLayer>
            </View>
        </View>
    )
}

export interface SwitchProps {
    /**
     * The variant of this switch
     * - `'default'`: Default switch
     * - `'icon'`: Both activated and deactivated states show an icon
     * - `'enabledIcon'`: Only activated state shows an icon
     * @see https://m3.material.io/components/switch/specs#cec32bde-7569-4af3-96bf-ccbc7f4cbba3
     * @default 'default'
     */
    variant?: 'default' | 'icon' | 'enabledIcon'
    /**
     * Whether this switch is activated
     */
    activated: boolean
    /**
     * `setState` callback to set the value of `activated`
     */
    setActivated: React.Dispatch<React.SetStateAction<boolean>>
    /**
     * Whether this switch is disabled
     */
    disabled?: boolean
}
