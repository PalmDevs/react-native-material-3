import { Material3Scheme } from '../../contexts/InternalThemeContext'
import sv from 'style-variants'

export const createStyles = (colors: Material3Scheme) =>
    sv({
        base: {
            backgroundColor: colors.outlineVariant,
            width: '100%',
            height: 1,
        },
        variants: {
            rotation: {
                horizontal: {},
                vertical: {
                    transform: [{ rotateZ: '90deg' }],
                },
            },
            length: {
                full: {},
                inset: {
                    marginLeft: 16,
                },
                middleInset: {
                    marginHorizontal: 16,
                },
            },
        },
    })

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
