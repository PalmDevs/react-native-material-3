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
export default {
    None: createShapeScale(0, 0, 0, 0),
    ExtraSmall: createShapeScale(4, 4, 4, 4),
    ExtraSmallTop: createShapeScale(4, 4, 0, 0),
    Small: createShapeScale(8, 8, 8, 8),
    Medium: createShapeScale(12, 12, 12, 12),
    Large: createShapeScale(16, 16, 16, 16),
    LargeEnd: createShapeScale(0, 16, 16, 0),
    LargeTop: createShapeScale(16, 16, 0, 0),
    ExtraLarge: createShapeScale(28, 28, 28, 28),
    ExtraLargeTop: createShapeScale(28, 28, 0, 0),
    Full: createShapeScale(1000, 1000, 1000, 1000),
} as const
