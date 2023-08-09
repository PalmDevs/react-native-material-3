import { useContext } from 'react'
import InternalThemeContext from '../contexts/InternalThemeContext'

/**
 * Returns the currently using Material 3 theme
 * @returns A `Material3Theme` object
 */
export default function useMaterial3Theme() {
    return useContext(InternalThemeContext)
}
