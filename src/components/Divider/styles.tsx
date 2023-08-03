import { StyleSheet } from 'react-native'
import { Material3Scheme } from '../../contexts/InternalThemeContext'
import { StylesCreatorReturnType } from '../../utility-types'

export const shapeStyles = {
    line: {
        horizontal: StyleSheet.create({
            full: {},
            inset: {
                marginLeft: 16,
            },
            middleInset: {
                marginLeft: 16,
                marginRight: 16,
            },
            shared: {
                width: '100%',
                height: 1,
            },
        }),
        vertical: StyleSheet.create({
            full: {},
            inset: {
                marginTop: 16,
            },
            middleInset: {
                marginTop: 16,
                marginBottom: 16,
            },
            shared: {
                width: 1,
                height: '100%',
            },
        }),
    },
} as const

export const createColorStyles = (colors: Material3Scheme) =>
    ({
        line: StyleSheet.create({
            shared: {
                backgroundColor: colors.outlineVariant,
            },
        }),
    }) satisfies StylesCreatorReturnType

// TODO: Subheader/supporting text
// export const containerStyles = StyleSheet.create({
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
