import useColorScheme from './useColorScheme'
import useMaterial3Theme from './useMaterial3Theme'
import { Material3Theme } from '@pchmn/expo-material3-theme'

/**
 * Returns a Material 3 color scheme for the current color scheme (`light` or `dark`) and the current Material 3 color scheme symbol.
 * If the current color scheme is not applicable, it defaults to `light`. This can be overriden.
 * @param preferredScheme The preferred color scheme, if the system scheme is nullable
 * @param prefersGivenSchemeThanSystemScheme If `true`, the preferred color scheme will overwrite the system color scheme
 * @returns An array with the current color scheme and the current theme symbol ordered accordingly
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

    return [theme.schemes[schemeName], theme.symbols[schemeName]] as const
}

type Scheme = keyof Material3Theme & {}
