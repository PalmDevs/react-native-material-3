import {
    Material3Theme,
    createMaterial3Theme,
} from '@pchmn/expo-material3-theme'
import { createContext } from 'react'

// Default color: #6750A4

const InternalThemeContext = createContext<Material3Theme>(
    createMaterial3Theme('#6750A4')
)

export default InternalThemeContext
