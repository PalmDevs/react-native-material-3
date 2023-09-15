import { useMemo } from 'react'
import { View } from 'react-native'
import useMaterial3ColorScheme from '../../hooks/theming/useMaterial3ColorScheme'
import { horizontalStyles, verticalStyles } from './styles'

export default function Divider(props: DividerProps) {
    const colors = useMaterial3ColorScheme()

    const style = useMemo(() => {
        const stylesheet =
            props.rotation === 'horizontal' ? horizontalStyles : verticalStyles
        return [
            {
                backgroundColor: colors.outlineVariant,
            },
            stylesheet.shape,
            props.length !== 'full' &&
                (props.length === 'inset'
                    ? stylesheet.lengthInset
                    : stylesheet.lengthMiddleInset),
        ]
    }, [props, colors])

    return <View style={style} />
}

export type DividerProps = {
    /**
     * The length of the divider
     * @see https://m3.material.io/components/divider/guidelines#5fd0d7a1-5998-4d34-9651-08a9fd6aca91
     * @see https://m3.material.io/components/divider/guidelines#26de9847-bb70-40f1-bc4d-ffa3947638bd
     * @default 'full'
     */
    length?: 'full' | 'inset' | 'middleInset'
    /**
     * The rotation of the divider
     * @see https://m3.material.io/components/divider/guidelines#5fd0d7a1-5998-4d34-9651-08a9fd6aca91
     * @see https://m3.material.io/components/divider/guidelines#26de9847-bb70-40f1-bc4d-ffa3947638bd
     */
    rotation: 'horizontal' | 'vertical'
}
