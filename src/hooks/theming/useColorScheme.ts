import { useAppState } from '@react-native-community/hooks'
import { useEffect, useState } from 'react'
import { useColorScheme as _useColorScheme } from 'react-native'

/**
 * It **may** be recommended to use this hook instead of the one provided by React Native. This hook will update the color scheme without any flicker **on iOS** when the app is resumed from the background.
 * @see https://github.com/facebook/react-native/issues/28525#issuecomment-1041610688
 * @returns A color scheme, same values as the ones provided by React Native
 */
export default function useColorScheme() {
    const colorScheme = _useColorScheme()
    const [currentScheme, setCurrentScheme] = useState(colorScheme)
    const appState = useAppState()

    useEffect(() => {
        if (appState === 'active') {
            setCurrentScheme(colorScheme)
        }
    }, [appState, colorScheme])

    return currentScheme
}
