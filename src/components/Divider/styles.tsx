import { Material3Scheme } from '../../contexts/InternalThemeContext'
import sv from 'style-variants'

export const createStyle = (colors: Material3Scheme) =>
    sv({
        base: {
            backgroundColor: colors.outlineVariant,
        },
        variants: {
            rotation: {
                horizontal: {
                    width: '100%',
                    height: 1,
                },
                vertical: {
                    width: 1,
                    height: '100%',
                },
            },
            lengthHorizontal: {
                full: {},
                inset: {
                    marginLeft: 16,
                },
                middleInset: {
                    marginHorizontal: 16,
                },
            },
            lengthVertical: {
                full: {},
                inset: {
                    marginTop: 16,
                },
                middleInset: {
                    marginVertical: 16,
                },
            },
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
