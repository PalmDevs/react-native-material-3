import { View } from 'react-native'
import { useMemo } from 'react'
import Text from '../Text'
import { createContainerStyleSheet, createLabelStyles } from './styles'
import useMaterial3ColorScheme from '../../hooks/useMaterial3ColorScheme'

export default function Badge(props: BadgeProps) {
    // The symbol is unique and will never change until a new set of colors are generated
    const [colors, symbol] = useMaterial3ColorScheme()
    const { size = 'small' } = props

    // * Styles

    const containerStyle = useMemo(
        () => createContainerStyleSheet(colors)({ size }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [symbol, size]
    )

    const labelStyle = useMemo(
        () => createLabelStyles(colors),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [symbol]
    )

    // * Component

    return (
        <View style={containerStyle}>
            {size === 'large' && (
                <Text.Label.Small style={labelStyle}>
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
