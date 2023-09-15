import { StyleSheet } from 'react-native'

export const horizontalStyles = StyleSheet.create({
    shape: {
        width: '100%',
        height: 1,
    },
    lengthInset: {
        marginLeft: 16,
    },
    lengthMiddleInset: {
        marginHorizontal: 16,
    },
})

export const verticalStyles = StyleSheet.create({
    shape: {
        width: 1,
        height: '100%',
    },
    lengthInset: {
        marginTop: 16,
    },
    lengthMiddleInset: {
        marginVertical: 16,
    },
})

// TODO: Subheader/supporting text
// export const containerStyle = StyleSheet.create({
//     horizontal: {
//         flexDirection: 'row',
//     },
//     vertical: {
//         flexDirection: 'column'
//     },
//     shared: {
//         display: 'flex',
//         gap: 4
//     }
// })
