import { useMemo } from 'react'
import { View, ViewProps } from 'react-native'
import { Material3ColorScheme } from '..'
import { useMaterial3ColorScheme } from '../hooks'

export default function Surface(props: SurfaceProps) {
    const colors = useMaterial3ColorScheme()
    const backgroundColor = useMemo(
        () => props.renderBackgroundColor?.(colors) ?? colors.surface,
        [props, colors]
    )

    return (
        <View {...props} style={[{ backgroundColor }, props.style]}>
            {props.children}
        </View>
    )
}

export interface SurfaceProps extends ViewProps {
    renderBackgroundColor?: (colors: Material3ColorScheme) => string
}
