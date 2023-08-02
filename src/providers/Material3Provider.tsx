import { Material3Theme } from '../contexts/InternalThemeContext'
import InternalThemeContext from '../contexts/InternalThemeContext'
import useMaterial3ColorTheme from '../hooks/useMaterial3ColorTheme'

/**
 * Provides access to additional configuration options for Material 3 components. Extra configurations include custom theming, and more to come.
 * @param props Optional props to override the options provided by internal contexts
 * @returns Context provider for Material 3 components
 */
export default function Material3Provider(props: Material3ProviderProps) {
    const defaultTheme = useMaterial3ColorTheme()
    const theme = props.theme ?? defaultTheme

    return (
        <InternalThemeContext.Provider value={theme}>
            {props.children}
        </InternalThemeContext.Provider>
    )
}

export type Material3ProviderProps = {
    /**
     * Theming options
     */
    theme?: Material3Theme
    children?: React.ReactNode | React.ReactNode[]
}
