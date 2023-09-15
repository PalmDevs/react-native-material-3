import { TextProps, TextStyle } from 'react-native'
import useMaterial3ColorScheme from '../../hooks/theming/useMaterial3ColorScheme'
import { useStyle } from 'react-native-style-utilities'
import { ComponentProps, ComponentType } from 'react'
import { Text } from 'react-native'

/**
 * Utility functions for text components
 */
export default {
    /**
     * Creates a `Text` component from a type scale.
     * @param typeScale The type scale to use
     * @returns A`Text` component with custom styles from the type scale applied
     */
    create(typeScale: TextStyle) {
        return this.createCustom(typeScale, Text)
    },
    /**
     * Styles a custom component with the type scale's styles.
     * @param typeScale The type scale to use
     * @param Component The component to style
     * @returns Specified component with custom styles from the type scale applied
     */
    createCustom(
        typeScale: TextStyle,
        Component: ComponentType<ComponentProps<typeof Text>>
    ) {
        return function Material3Text(props: TextProps) {
            const colors = useMaterial3ColorScheme()
            const style = useStyle(
                () => [
                    {
                        color: colors.onSurface,
                    },
                    typeScale,
                    props.style,
                ],
                // eslint-disable-next-line react-hooks/exhaustive-deps
                [colors, typeScale, props.style]
            )

            return (
                <Component {...props} style={style}>
                    {props.children}
                </Component>
            )
        }
    },
} as const
