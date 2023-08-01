import { ViewStyle } from 'react-native'

const createShapeScale = (
    topLeft: number,
    topRight: number,
    bottomRight: number,
    bottomLeft: number
): ViewStyle => {
    return {
        borderTopLeftRadius: topLeft,
        borderTopRightRadius: topRight,
        borderBottomRightRadius: bottomRight,
        borderBottomLeftRadius: bottomLeft,
    }
}

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const None = createShapeScale(0, 0, 0, 0)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const ExtraSmall = createShapeScale(4, 4, 4, 4)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const ExtraSmallTop = createShapeScale(4, 4, 0, 0)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const Small = createShapeScale(8, 8, 8, 8)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const Medium = createShapeScale(12, 12, 12, 12)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const Large = createShapeScale(16, 16, 16, 16)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const LargeEnd = createShapeScale(0, 16, 16, 0)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const LargeTop = createShapeScale(16, 16, 0, 0)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const ExtraLarge = createShapeScale(28, 28, 28, 28)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const ExtraLargeTop = createShapeScale(28, 28, 0, 0)

/**
 * **A shape scale** is a range of seven corner shape styles defining the amount of cut or roundedness: None, extra small, small, medium, large, extra large, and full.
 * @see https://m3.material.io/styles/shape/shape-scale-tokens
 */
export const Full = createShapeScale(1000, 1000, 1000, 1000)
