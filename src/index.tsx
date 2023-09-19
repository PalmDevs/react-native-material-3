// * Import/export components here
import Badge, { BadgeProps } from './components/Badge'
import Divider, { DividerProps } from './components/Divider'
import Switch, { SwitchProps } from './components/Switch'
import Text, { TextProps } from './components/Text'
import Surface, { SurfaceProps } from './components/Surface'
export {
    Badge,
    BadgeProps,
    Divider,
    DividerProps,
    Switch,
    SwitchProps,
    Text,
    TextProps,
    Surface,
    SurfaceProps,
}

export * from './constants'
export * from './hooks'
export * from './providers'
export * from './util'

export type * from './contexts/InternalThemeContext'
export type * from './providers/Material3Provider'
export {
    Material3Theme,
    Material3Scheme as Material3ColorScheme,
} from '@pchmn/expo-material3-theme'
