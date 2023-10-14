import { TextProps as NativeTextProps } from 'react-native'
import { TypeScale } from '../constants'
import TextComponentUtil from '../util/typography/TextComponentUtil'

export default {
    Body: {
        Small: TextComponentUtil.create(TypeScale.Body.Small),
        Medium: TextComponentUtil.create(TypeScale.Body.Medium),
        Large: TextComponentUtil.create(TypeScale.Body.Large),
    },
    Display: {
        Small: TextComponentUtil.create(TypeScale.Display.Small),
        Medium: TextComponentUtil.create(TypeScale.Display.Medium),
        Large: TextComponentUtil.create(TypeScale.Display.Large),
    },
    Headline: {
        Small: TextComponentUtil.create(TypeScale.Headline.Small),
        Medium: TextComponentUtil.create(TypeScale.Headline.Medium),
        Large: TextComponentUtil.create(TypeScale.Headline.Large),
    },
    Label: {
        Small: TextComponentUtil.create(TypeScale.Label.Small),
        Medium: TextComponentUtil.create(TypeScale.Label.Medium),
        Large: TextComponentUtil.create(TypeScale.Label.Large),
    },
    Title: {
        Small: TextComponentUtil.create(TypeScale.Title.Small),
        Medium: TextComponentUtil.create(TypeScale.Title.Medium),
        Large: TextComponentUtil.create(TypeScale.Title.Large),
    },
} as const

export type TextProps = NativeTextProps
