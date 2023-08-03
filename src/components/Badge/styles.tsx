import { StyleSheet } from 'react-native'
import { ShapeScale } from '../../constants'
import { Material3Scheme } from '../../contexts/InternalThemeContext'
import { StylesCreatorReturnType } from '../../utility-types'

export const shapeStyles = {
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

export const createColorStyles = (colors: Material3Scheme) =>
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
