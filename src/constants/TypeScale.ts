import { TextStyle } from 'react-native'

const createTypeScale = (
    lineHeight: number,
    size: number,
    spacing: number,
    weight: TextStyle['fontWeight']
): TextStyle => {
    return {
        fontFamily: 'Roboto',
        fontSize: size,
        fontWeight: weight,
        lineHeight: lineHeight,
        letterSpacing: spacing,
    }
}

/**
 * **A type scale** is a selection of font styles that can be used across an app, ensuring a flexible, yet consistent, style that accommodates a range of purposes.
 * @see https://m3.material.io/styles/typography/type-scale-tokens
 */
export const Display = {
    Large: createTypeScale(64, 57, -0.25, '400'),
    Medium: createTypeScale(52, 45, 0, '400'),
    Small: createTypeScale(44, 36, 0, '400'),
}

/**
 * **A type scale** is a selection of font styles that can be used across an app, ensuring a flexible, yet consistent, style that accommodates a range of purposes.
 * @see https://m3.material.io/styles/typography/type-scale-tokens
 */
export const Headline = {
    Large: createTypeScale(40, 32, 0, '400'),
    Medium: createTypeScale(36, 28, 0, '400'),
    Small: createTypeScale(32, 24, 0, '400'),
}

/**
 * **A type scale** is a selection of font styles that can be used across an app, ensuring a flexible, yet consistent, style that accommodates a range of purposes.
 * @see https://m3.material.io/styles/typography/type-scale-tokens
 */
export const Title = {
    Large: createTypeScale(28, 22, 0, '400'),
    Medium: createTypeScale(24, 16, 0.15, '500'),
    Small: createTypeScale(20, 14, 0.1, '500'),
}

/**
 * **A type scale** is a selection of font styles that can be used across an app, ensuring a flexible, yet consistent, style that accommodates a range of purposes.
 * @see https://m3.material.io/styles/typography/type-scale-tokens
 */
export const Label = {
    Large: createTypeScale(20, 14, 0.1, '500'),
    Medium: createTypeScale(16, 12, 0.5, '500'),
    Small: createTypeScale(16, 11, 0.5, '500'),
}

/**
 * **A type scale** is a selection of font styles that can be used across an app, ensuring a flexible, yet consistent, style that accommodates a range of purposes.
 * @see https://m3.material.io/styles/typography/type-scale-tokens
 */
export const Body = {
    Large: createTypeScale(24, 16, 0.5, '400'),
    Medium: createTypeScale(20, 14, 0.25, '400'),
    Small: createTypeScale(16, 12, 0.4, '400'),
}
