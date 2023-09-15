import { useContext } from 'react'
import InternalThemeContext from '../../contexts/InternalThemeContext'

/**
 * Returns the currently using Material 3 theme.
 * @returns An object with color schemes as keys and color schemes as values
 */
export default function useMaterial3Theme() {
    return useContext(InternalThemeContext)
}
