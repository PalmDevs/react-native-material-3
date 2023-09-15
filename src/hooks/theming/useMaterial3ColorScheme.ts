import useColorScheme from './useColorScheme'
import useMaterial3Theme from './useMaterial3Theme'
import { Material3Theme } from '@pchmn/expo-material3-theme'

/**
 * Returns the currently using Material 3 color scheme.
 * If the system color scheme is not applicable, it defaults to `light`. This can be overriden.
 * @param preferredScheme The preferred color scheme, if the system color scheme is nullable
 * @param prefersGivenSchemeThanSystemScheme If `true`, the preferred color scheme will overwrite the system color scheme
 * @returns An object with colors
 */
export default function useMaterial3ColorScheme(
    preferredScheme?: Scheme,
    prefersGivenSchemeThanSystemScheme: boolean = false
) {
    const systemSchemeName = useColorScheme()
    const theme = useMaterial3Theme()
    const schemeName =
        (prefersGivenSchemeThanSystemScheme
            ? preferredScheme ?? systemSchemeName
            : systemSchemeName ?? preferredScheme) ?? 'light'

    return theme[schemeName]
}

type Scheme = keyof Material3Theme & {}
