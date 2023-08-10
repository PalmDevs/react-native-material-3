import { sv } from 'style-variants'
import { ShapeScale } from '../../constants'
import { Material3ColorScheme } from '../../contexts/InternalThemeContext'
import { StyleSheetCreatorReturnType } from '../../utility-types'

export const createContainerStyle = (colors: Material3ColorScheme) =>
    sv({
        base: {
            ...ShapeScale.Full,
            backgroundColor: colors.error,
        },
        variants: {
            size: {
                small: {
                    width: 6,
                    height: 6,
                },
                large: {
                    paddingLeft: 4,
                    paddingRight: 4,
                    minWidth: 16,
                    height: 16,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            },
        },
    })

export const createLabelStyle = (colors: Material3ColorScheme) =>
    ({
        color: colors.onError,
    }) satisfies StyleSheetCreatorReturnType
