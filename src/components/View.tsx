import { View, ViewProps as NativeViewProps } from 'react-native'
import { useMaterial3ColorScheme } from '../hooks'
import { Material3ColorScheme } from '..'
import { useMemo } from 'react'

export default function Material3View(props: ViewProps) {
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

export interface ViewProps extends NativeViewProps {
    renderBackgroundColor?: (colors: Material3ColorScheme) => string
}
