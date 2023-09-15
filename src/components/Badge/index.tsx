import { View } from 'react-native'
import { useMemo } from 'react'
import Text from '../Text'
import { styles } from './styles'
import useMaterial3ColorScheme from '../../hooks/theming/useMaterial3ColorScheme'

export default function Badge(props: BadgeProps) {
    const colors = useMaterial3ColorScheme()

    const scopedStyles = useMemo(
        () => ({
            container: [
                styles.containerBase,
                {
                    backgroundColor: colors.error,
                },
                props.size === 'large' ? styles.sizeLarge : styles.sizeSmall,
            ],
            label: {
                color: colors.onError,
            },
        }),
        [props, colors]
    )

    return (
        <View style={scopedStyles.container}>
            {props.size === 'large' && (
                <Text.Label.Small style={scopedStyles.label}>
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
