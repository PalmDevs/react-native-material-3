import {
    Material3Theme as _Material3Theme,
    Material3Scheme as _Material3Scheme,
} from '@pchmn/expo-material3-theme'
import { createContext } from 'react'
import createMaterial3Theme from '../util/createMaterial3Theme'

const InternalThemeContext = createContext<Material3Theme>(
    createMaterial3Theme()
)

export type Material3ColorScheme = _Material3Scheme
export type Material3Theme = {
    schemes: Record<keyof _Material3Theme, Material3ColorScheme>
    symbols: Record<keyof _Material3Theme, symbol>
}

export default InternalThemeContext
