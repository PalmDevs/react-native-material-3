import { Material3Scheme } from '@pchmn/expo-material3-theme'
import { StyleSheet } from 'react-native'
import { ShapeScale } from '../../constants'
import { StylesCreatorReturnType } from '../../utility-types'

const shapeStyles = {
    container: StyleSheet.create({
        small: {
            width: 6,
            height: 6,
        },
        large: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 4,
            paddingRight: 4,
            minWidth: 16,
            height: 16,
        },
    }),
}

const createColorStyles = (colors: Material3Scheme) =>
    ({
        container: StyleSheet.create({
            shared: {
                ...ShapeScale.Full,
                backgroundColor: colors.error,
            },
        }),
        label: {
            color: colors.onError,
        },
    }) satisfies StylesCreatorReturnType

export { shapeStyles, createColorStyles }
