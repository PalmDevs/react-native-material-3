import useColorScheme from './useColorScheme'
import useMaterial3ColorTheme from './useMaterial3ColorTheme'
import { Material3Theme } from '@pchmn/expo-material3-theme'

/**
 * Returns the `Material3Scheme` for the current color scheme (`light` or `dark`) and the current theme symbol. If none are defined, defaults to `light`.
 * @param preferredScheme The preferred color scheme, if the system scheme is undefined or null
 * @param prefersGivenSchemeThanSystemScheme If `true`, the preferred color scheme will overwrite the system color scheme
 * @returns The current color scheme and the current theme symbol
 */
export default function useMaterial3ColorScheme(
    preferredScheme?: Scheme,
    prefersGivenSchemeThanSystemScheme: boolean = false
) {
    const systemSchemeName = useColorScheme()
    const theme = useMaterial3ColorTheme()
    const schemeName = prefersGivenSchemeThanSystemScheme
        ? preferredScheme ?? systemSchemeName
        : systemSchemeName ?? preferredScheme

    const scheme = theme[schemeName ?? 'light']

    return [scheme, scheme.__symbol] as const
}

type Scheme = keyof Material3Theme & {}
