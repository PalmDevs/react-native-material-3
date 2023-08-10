import { StyleSheet } from 'react-native'
import { ShapeScale } from '../../constants'
import { Material3ColorScheme } from '../../contexts/InternalThemeContext'
import { InteractivityState } from '../../constants/State'
import sv from 'style-variants'

export const shapeStyle = StyleSheet.create({
    stateLayer: {
        ...ShapeScale.Full,
        overflow: 'hidden',
    },
    thumb: {
        width: 16,
        height: 16,
    },
    iconThumb: {
        width: 24,
        height: 24,
    },
    icon: {
        width: 16,
        height: 16,
    },
})

export const createTrackStyle = (colors: Material3ColorScheme) =>
    sv({
        base: {
            ...ShapeScale.Full,
            height: 32,
            width: 52,
            borderStyle: 'solid',
            borderWidth: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.outline,
        },
        variants: {
            toggled: {
                true: {
                    height: 32,
                    width: 52,
                    backgroundColor: colors.primary,
                    alignItems: 'flex-end',
                    borderWidth: 0,
                },
                false: {
                    backgroundColor: colors.surfaceContainerHighest,
                    alignItems: 'flex-start',
                },
            },
            interactivityStateToggled: {
                [InteractivityState.NoInteraction]: {},
                [InteractivityState.Pressed]: {},
                [InteractivityState.Focused]: {},
                [InteractivityState.Hovered]: {},
            },
            interactivityState: {
                [InteractivityState.NoInteraction]: {},
                [InteractivityState.Pressed]: {},
                [InteractivityState.Focused]: {},
                [InteractivityState.Hovered]: {},
            },
            disabledToggled: {
                true: {
                    opacity: 0.12,
                    backgroundColor: colors.onSurface,
                },
                false: {},
            },
            disabled: {
                true: {
                    opacity: 0.12,
                    backgroundColor: colors.surfaceContainerHighest,
                    borderColor: colors.onSurface,
                },
                false: {},
            },
        },
    })

export const createThumbStyle = (colors: Material3ColorScheme) =>
    sv({
        base: {
            ...ShapeScale.Full,
            // ! Account for borderWidth (which is 2), 6 + 2 = 8
            margin: 8,
        },
        variants: {
            variant: {
                default: {
                    width: 16,
                    height: 16,
                },
                icon: {
                    margin: 2,
                    width: 24,
                    height: 24,
                },
                enabledIcon: {
                    width: 16,
                    height: 16,
                },
            },
            toggled: {
                true: {
                    width: 22,
                    height: 22,
                    margin: 4,
                    backgroundColor: colors.onPrimary,
                },
                false: {
                    width: 16,
                    height: 16,
                    backgroundColor: colors.outline,
                },
            },
            interactivityStateToggled: {
                [InteractivityState.NoInteraction]: {},
                [InteractivityState.Pressed]: {
                    backgroundColor: colors.primaryContainer,
                    width: 28,
                    height: 28,
                },
                [InteractivityState.Focused]: {
                    backgroundColor: colors.primaryContainer,
                },
                [InteractivityState.Hovered]: {
                    backgroundColor: colors.primaryContainer,
                },
            },
            interactivityState: {
                [InteractivityState.NoInteraction]: {},
                [InteractivityState.Pressed]: {
                    backgroundColor: colors.onSurfaceVariant,
                    width: 28,
                    height: 28,
                },
                [InteractivityState.Focused]: {
                    backgroundColor: colors.onSurfaceVariant,
                },
                [InteractivityState.Hovered]: {
                    backgroundColor: colors.onSurfaceVariant,
                },
            },
            disabledToggled: {
                true: {
                    backgroundColor: colors.surface,
                },
                false: {},
            },
            disabled: {
                true: {
                    opacity: 0.38,
                    backgroundColor: colors.onSurface,
                },
                false: {},
            },
        },
    })

// export const createStateLayerColors =
//     (colors: Material3ColorScheme) =>
//     ({
//         disabled,
//         toggled,
//         interactivityState,
//     }: {
//         disabled: boolean
//         toggled: boolean
//     }) => {
//         // a
//     }

// export const createColorStyle = (colors: Material3ColorScheme) => StyleSheet.create({

// })

// export const stateStyle = (colors: Material3ColorScheme) =>
