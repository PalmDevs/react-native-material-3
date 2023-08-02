import {
    createMaterial3Theme,
    Material3Theme as _Material3Theme,
    Material3Scheme as _Material3Scheme,
} from '@pchmn/expo-material3-theme'
import { createContext } from 'react'

// TODO: create themes

const rawTheme = createMaterial3Theme('#6750A4')

const InternalThemeContext = createContext<Material3Theme>({
    light: {
        ...rawTheme.light,
        __symbol: Symbol(),
    },
    dark: {
        ...rawTheme.dark,
        __symbol: Symbol(),
    },
})

export type Material3Scheme = _Material3Scheme & {
    __symbol: symbol
}

export type Material3Theme = {
    [K in keyof _Material3Theme]: Material3Scheme
}

export default InternalThemeContext
