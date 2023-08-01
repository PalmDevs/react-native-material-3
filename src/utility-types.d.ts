import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

declare type NoReadonlyProperties<T> = {
    -readonly [P in keyof T]: T[P]
}

declare type AnyStyle = ViewStyle | TextStyle | ImageStyle

declare type StylesCreatorReturnType = Record<
    string,
    AnyStyle | StyleSheet.NamedStyles<any>
>

declare global {
    interface ObjectConstructor {
        keys<T>(obj: T): Array<keyof T>
    }
}
