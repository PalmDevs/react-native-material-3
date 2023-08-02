import { useContext } from 'react'
import InternalThemeContext from '../contexts/InternalThemeContext'

/**
 * Returns the available color schemes (theme) and the current theme symbol.
 * @returns The current theme and the current theme symbol.
 */
export default function useMaterial3ColorTheme() {
    const theme = useContext(InternalThemeContext)
    return theme
}
