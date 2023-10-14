import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { SwitchProps } from '.'
import { Material3ColorScheme } from '../..'
import { StateEnum, ShapeScale } from '../../constants'

export const createThumbStyle = (
    { activated, disabled, variant }: SwitchProps,
    state: StateEnum,
    colors: Material3ColorScheme
): StyleProp<ViewStyle> => [
    styles.thumbBase,

    // Conditional

    activated
        ? {
              width: 22,
              height: 22,
              margin: 4,
              backgroundColor: colors.onPrimary,
              transform: [],
          }
        : { backgroundColor: colors.outline },

    disabled &&
        (activated
            ? { backgroundColor: colors.onSurface }
            : {
                  backgroundColor: colors.onSurface,
                  opacity: 0.38,
              }),

    // State

    state !== StateEnum.Default &&
        (activated
            ? { backgroundColor: colors.primaryContainer }
            : { backgroundColor: colors.onSurfaceVariant }),

    // Sizing and transforms
    // This should and will overwrite the size and margin or transforms of the styles applied above. Similar to how !important works in CSS.

    variant === 'icon' && { width: 24, height: 24, margin: 2 },
    variant === 'enabledIcon' &&
        !activated && {
            transform: [{ rotateZ: '-90deg' }],
        },

    state === StateEnum.Pressed && {
        width: 28,
        height: 28,
    },
]

export const createTrackStyle = (
    { activated, disabled }: SwitchProps,
    _state: StateEnum,
    colors: Material3ColorScheme
): StyleProp<ViewStyle> => [
    // Base

    styles.trackBase,
    {
        borderColor: colors.outline,
    },

    // Conditional

    activated
        ? {
              backgroundColor: colors.primary,
              borderWidth: 0,
          }
        : {
              backgroundColor: colors.surfaceContainerHighest,
          },

    disabled &&
        (activated
            ? {
                  opacity: 0.12,
                  backgroundColor: colors.onSurface,
              }
            : {
                  opacity: 0.12,
                  backgroundColor: colors.surfaceContainerHighest,
                  borderColor: colors.onSurface,
              }),
]

export const createThumbContainerStyle = (
    { activated }: SwitchProps,
    _state: StateEnum,
    _colors: Material3ColorScheme
): StyleProp<ViewStyle> => [
    styles.thumbContainerBase,
    {
        // Aligns the thumb to the left when not activated and right when activated
        alignItems: activated ? 'flex-end' : 'flex-start',

        // The thumb when in default and deactivated state should visually look to be exactly 6dp away from the track's border.
        // However, the math also applies to the activated state.

        // When in pressed state, it should be 0dp away from the track's border.
        // x = (stateLayerEffectContainerWidth - trackWidth) / 2 = (40 - 16) / 2 = 12
        // x - borderWidth = x - 2 = 10; We are 10px away.
        // 10 - 6 = 4; We need to move the thumb 4px to the direction.
        marginHorizontal: activated ? 4 : -4,
    },
]

export const styles = StyleSheet.create({
    thumbBase: {
        ...ShapeScale.Full,
        width: 16,
        height: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbContainerBase: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Deal with it, it's an overlay on top of the track
        position: 'absolute',
        // The thumb container should fill the space of the track container
        width: 52,
        height: 32,
    },
    trackBase: {
        ...ShapeScale.Full,
        width: 52,
        height: 32,
        borderStyle: 'solid',
        borderWidth: 2,
    },
    trackContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
})
