import {
    Animated as AnimatedAPI,
    Text as NativeText,
    TextStyle as NativeTextStyle,
    TextProps,
} from 'react-native'
import * as TypeScale from '../../constants/TypeScale'
import useMaterial3ColorScheme from '../../hooks/useMaterial3ColorScheme'

const createScaledNativeTextComponent =
    (textStyle: NativeTextStyle) => (props: TextProps) => {
        const [colors] = useMaterial3ColorScheme()

        return (
            <NativeText
                {...props}
                style={[
                    {
                        color: colors.onSurface,
                    },
                    textStyle,
                    props.style,
                ]}
            >
                {props.children}
            </NativeText>
        )
    }

const createScaledNativeAnimatedTextComponent =
    (textStyle: NativeTextStyle) => (props: TextProps) => {
        const [colors] = useMaterial3ColorScheme()

        return (
            <AnimatedAPI.Text
                {...props}
                style={[
                    {
                        color: colors.onSurface,
                    },
                    textStyle,
                    props.style,
                ]}
            >
                {props.children}
            </AnimatedAPI.Text>
        )
    }

export default {
    Body: {
        Small: createScaledNativeTextComponent(TypeScale.Body.Small),
        Medium: createScaledNativeTextComponent(TypeScale.Body.Medium),
        Large: createScaledNativeTextComponent(TypeScale.Body.Large),
    },
    Display: {
        Small: createScaledNativeTextComponent(TypeScale.Display.Small),
        Medium: createScaledNativeTextComponent(TypeScale.Display.Medium),
        Large: createScaledNativeTextComponent(TypeScale.Display.Large),
    },
    Headline: {
        Small: createScaledNativeTextComponent(TypeScale.Headline.Small),
        Medium: createScaledNativeTextComponent(TypeScale.Headline.Medium),
        Large: createScaledNativeTextComponent(TypeScale.Headline.Large),
    },
    Label: {
        Small: createScaledNativeTextComponent(TypeScale.Label.Small),
        Medium: createScaledNativeTextComponent(TypeScale.Label.Medium),
        Large: createScaledNativeTextComponent(TypeScale.Label.Large),
    },
    Title: {
        Small: createScaledNativeTextComponent(TypeScale.Title.Small),
        Medium: createScaledNativeTextComponent(TypeScale.Title.Medium),
        Large: createScaledNativeTextComponent(TypeScale.Title.Large),
    },
}

export const Animated = {
    Body: {
        Small: createScaledNativeAnimatedTextComponent(TypeScale.Body.Small),
        Medium: createScaledNativeAnimatedTextComponent(TypeScale.Body.Medium),
        Large: createScaledNativeAnimatedTextComponent(TypeScale.Body.Large),
    },
    Display: {
        Small: createScaledNativeAnimatedTextComponent(TypeScale.Display.Small),
        Medium: createScaledNativeAnimatedTextComponent(
            TypeScale.Display.Medium
        ),
        Large: createScaledNativeAnimatedTextComponent(TypeScale.Display.Large),
    },
    Headline: {
        Small: createScaledNativeAnimatedTextComponent(
            TypeScale.Headline.Small
        ),
        Medium: createScaledNativeAnimatedTextComponent(
            TypeScale.Headline.Medium
        ),
        Large: createScaledNativeAnimatedTextComponent(
            TypeScale.Headline.Large
        ),
    },
    Label: {
        Small: createScaledNativeAnimatedTextComponent(TypeScale.Label.Small),
        Medium: createScaledNativeAnimatedTextComponent(TypeScale.Label.Medium),
        Large: createScaledNativeAnimatedTextComponent(TypeScale.Label.Large),
    },
    Title: {
        Small: createScaledNativeAnimatedTextComponent(TypeScale.Title.Small),
        Medium: createScaledNativeAnimatedTextComponent(TypeScale.Title.Medium),
        Large: createScaledNativeAnimatedTextComponent(TypeScale.Title.Large),
    },
}
