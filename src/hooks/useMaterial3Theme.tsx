import { useContext } from 'react'
import InternalThemeContext from '../contexts/InternalThemeContext'

/**
 * Returns the available color schemes (theme).
 * @returns The current theme.
 */
export default function useMaterial3Theme() {
    const theme = useContext(InternalThemeContext)
    return theme
}
