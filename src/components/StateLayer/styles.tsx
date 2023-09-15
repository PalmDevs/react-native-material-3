import { StyleSheet } from 'react-native'
import { ShapeScale } from '../../constants'

export const styles = StyleSheet.create({
    effectContainerDefault: {
        ...ShapeScale.Full,
        // Screw RN's centering bug
        width: 39.9999,
        height: 39.9999,
        margin: -0.0001,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    interactiveTargetDefault: {
        ...ShapeScale.Full,
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
