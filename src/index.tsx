// * Import/export components here
import Badge, { BadgeProps } from './components/Badge'
import Divider, { DividerProps } from './components/Divider'
import Switch, { SwitchProps } from './components/Switch'
import Text from './components/Text'
export { Badge, BadgeProps, Divider, DividerProps, Switch, SwitchProps, Text }

// * Import/export providers (or contexts) here
import Material3Provider from './providers/Material3Provider'
export { Material3Provider }

// * Import/export hooks here
import useMaterial3ColorScheme from './hooks/useMaterial3ColorScheme'
import useMaterial3Theme from './hooks/useMaterial3Theme'
export { useMaterial3ColorScheme, useMaterial3Theme }

// * Import/export utilities here
import createMaterial3Theme, {
    fromColorSchemes,
} from './util/createMaterial3Theme'
export { createMaterial3Theme, fromColorSchemes }

// * Import/export constants here
export { Motion, ShapeScale, State, TypeScale } from './constants'

// * Import/export types here
export type {
    Material3Theme,
    Material3ColorScheme,
} from './contexts/InternalThemeContext'
export type { Material3ProviderProps } from './providers/Material3Provider'
