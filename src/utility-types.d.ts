import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

export declare type NoReadonlyProperties<T> = {
    -readonly [P in keyof T]: T[P]
}

export declare type AnyStyle = ViewStyle | TextStyle | ImageStyle

export declare type StyleSheetCreatorReturnType = Record<
    string,
    AnyStyle | StyleSheet.NamedStyles<any>
>
