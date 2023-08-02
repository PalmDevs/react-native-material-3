import { View } from 'react-native'
import { useMemo } from 'react'
import Text from '../Text'
import { shapeStyles, createColorStyles } from './styles'
import useMaterial3ColorScheme from '../../hooks/useMaterial3ColorScheme'

export default function Badge(props: BadgeProps) {
    const { size = 'small' } = props
    const [colors, symbol] = useMaterial3ColorScheme()

    const colorStyles = useMemo(
        () => createColorStyles(colors),
        // The symbol is unique and will never change until a new set of colors are generated
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [symbol]
    )

    return (
        <View
            style={[shapeStyles.container[size], colorStyles.container.shared]}
        >
            {size === 'large' && (
                <Text.Label.Small style={colorStyles.label}>
                    {/** @ts-expect-error Uh, we're already checking if size === 'large' */}
                    {props.truncateFunction?.(props.content) || props.content}
                </Text.Label.Small>
            )}
        </View>
    )
}

export type BadgeProps =
    | {
          /**
           * The size of the badge
           * @see https://m3.material.io/components/badges/overview
           * @default 'small' // (badge with no content)
           */
          size?: 'small'
      }
    | {
          /**
           * The size of the badge
           * @see https://m3.material.io/components/badges/overview#4818f20f-aab7-4f4c-bd44-d213cf9ee28c
           * @default 'small' // (badge with no content)
           */
          size: 'large'
          /**
           * The content (count) of this badge
           */
          content: string | number
          /**
           * Allows the customization of truncation of the badge content
           * @param content The content (count) of the badge
           * @returns The truncated content of the badge
           * @example truncateFunction={(content) => content.toString()}
           */
          truncateFunction?: (
              content: Extract<BadgeProps, { size: 'large' }>['content']
          ) => string
      }
