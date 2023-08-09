import { getMaterial3Theme } from '@pchmn/expo-material3-theme'
import { Material3Theme } from '../contexts/InternalThemeContext'
import InternalThemeContext from '../contexts/InternalThemeContext'
import useMaterial3Theme from '../hooks/useMaterial3Theme'
import { fromColorSchemes } from '../util/createMaterial3Theme'

/**
 * Provides access to additional configuration options for Material 3 components. Extra configurations include custom theming, and more to come.
 * @param props Optional props to override the options provided by internal contexts
 * @returns Children wrapped in a Material 3 context providers
 */
export default function Material3Provider(props: Material3ProviderProps) {
    const defaultTheme = useMaterial3Theme()
    const theme =
        props.theming?.theme === 'dynamic'
            ? fromColorSchemes(
                  getMaterial3Theme(props.theming.fallbackThemeSourceColor)
              )
            : props.theming?.theme ?? defaultTheme

    return (
        <InternalThemeContext.Provider value={theme}>
            {props.children}
        </InternalThemeContext.Provider>
    )
}

export type Material3ProviderProps = {
    /**
     * Theming options for Material 3 components
     */
    theming?: {
        /**
         * The theme to use for Material 3 components. If set to `'dynamic'`, the theme will be determined by the system.
         * ### Dynamic mode requires [Expo modules](https://docs.expo.dev/bare/installing-expo-modules/) to be set up. If you already have Expo in your project, this isn't needed.
         */
        theme?: 'dynamic' | Material3Theme
        /**
         * The fallback theme source color to use for Material 3 components. If the system does not support dynamic theming, a new theme will be generated from this color.
         * This is only used if `theming.theme` is set to `'dynamic'`. If this isn't set, a default fallback theme source color will be used.
         */
        fallbackThemeSourceColor?: string
    }
    /**
     * The children to render
     */
    children?: React.ReactNode | React.ReactNode[]
}
