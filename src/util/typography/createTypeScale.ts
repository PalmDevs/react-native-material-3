import { TextStyle } from 'react-native'

/**
 * Creates a type scale from custom configurations
 * @param lineHeight Line height for the type scale
 * @param size Font size for the type scale
 * @param spacing Letter spacing for the type scale
 * @param weight Font weight for the type scale
 * @returns A `TypeScale` (`TextStyle`) object
 */
export default function createTypeScale(
    lineHeight: number,
    size: number,
    spacing: number,
    weight: TextStyle['fontWeight']
): TextStyle {
    return {
        fontSize: size,
        fontWeight: weight,
        lineHeight: lineHeight,
        letterSpacing: spacing,
    }
}
