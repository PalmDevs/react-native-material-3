import { useMemo } from 'react'
import { View } from 'react-native'
import useMaterial3ColorScheme from '../../hooks/useMaterial3ColorScheme'
import { createColorStyles, shapeStyles } from './styles'

export default function Divider(props: DividerProps) {
    const [colors, symbol] = useMaterial3ColorScheme()
    const colorStyles = useMemo(
        () => createColorStyles(colors),
        // The symbol is unique and will never change until a new set of colors are generated
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [symbol]
    )

    return (
        <View
            style={[
                shapeStyles.line[props.rotation][props.length ?? 'full'],
                shapeStyles.line[props.rotation].shared,
                colorStyles.line.shared,
            ]}
        />
    )
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
