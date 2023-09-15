import { ShapeScale } from '../../constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerBase: {
        ...ShapeScale.Full,
    },
    sizeSmall: {
        width: 6,
        height: 6,
    },
    sizeLarge: {
        paddingLeft: 4,
        paddingRight: 4,
        minWidth: 16,
        height: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
