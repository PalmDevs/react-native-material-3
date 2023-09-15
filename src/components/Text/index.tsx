import { TypeScale } from '../../constants'
import TextComponent from '../../util/typography/TextComponent'
import { TextProps as NativeTextProps } from 'react-native'

export default {
    Body: {
        Small: TextComponent.create(TypeScale.Body.Small),
        Medium: TextComponent.create(TypeScale.Body.Medium),
        Large: TextComponent.create(TypeScale.Body.Large),
    },
    Display: {
        Small: TextComponent.create(TypeScale.Display.Small),
        Medium: TextComponent.create(TypeScale.Display.Medium),
        Large: TextComponent.create(TypeScale.Display.Large),
    },
    Headline: {
        Small: TextComponent.create(TypeScale.Headline.Small),
        Medium: TextComponent.create(TypeScale.Headline.Medium),
        Large: TextComponent.create(TypeScale.Headline.Large),
    },
    Label: {
        Small: TextComponent.create(TypeScale.Label.Small),
        Medium: TextComponent.create(TypeScale.Label.Medium),
        Large: TextComponent.create(TypeScale.Label.Large),
    },
    Title: {
        Small: TextComponent.create(TypeScale.Title.Small),
        Medium: TextComponent.create(TypeScale.Title.Medium),
        Large: TextComponent.create(TypeScale.Title.Large),
    },
} as const

export type TextProps = NativeTextProps
