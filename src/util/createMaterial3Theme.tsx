import {
    createMaterial3Theme as _createMaterial3Theme,
    Material3Theme as ColorSchemes,
} from '@pchmn/expo-material3-theme'
import { Material3Theme } from '../contexts/InternalThemeContext'

/**
 * Creates a new Material 3 theme from a source color
 * @param sourceColor Source color to use to generate the theme
 * @returns A `Material3Theme` object
 */
export default function createMaterial3Theme(
    sourceColor: string = '#6750A4'
): Material3Theme {
    const colorSchemes = _createMaterial3Theme(sourceColor)
    return fromColorSchemes(colorSchemes)
}

/**
 * Converts an object with color schemes to a `Material3Theme` object
 * @param colorSchemes Color schemes object
 * @returns A `Material3Theme` object
 */
export function fromColorSchemes(colorSchemes: ColorSchemes): Material3Theme {
    return {
        schemes: colorSchemes,
        symbols: Object.fromEntries(
            (Object.keys(colorSchemes) as Array<keyof ColorSchemes>).map(
                k => [k, Symbol(k)] as const
            )
        ) as Record<keyof ColorSchemes, symbol>,
    }
}
