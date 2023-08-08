// Enabled comes first (0) because we use `disabled` properties instead of `enabled`

/**
 * States show the interaction status of a component or UI element.
 *
 * ### This does not need to be passed to a component.
 * Use the `disabled` property instead.
 * @see https://m3.material.io/foundations/interaction/states/applying-states
 */
export enum UsabilityState {
    /**
     * An enabled state communicates an interactive component or element. Enabled states use the default styling for each interactive component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#39b2fc90-01db-41b5-b6f8-47be61ed1479
     */
    Enabled,
    /**
     * A disabled state, also known as an inoperable state, communicates when a component or element isn’t interactive. Inoperable states are deemphasized by reducing the enabled state to 38% opacity.
     * Inoperable states can also indicate they are not interactive through color changes and reduced elevation.
     * **Disabled and inoperable states do not need to meet contrast requirements.**
     * @see https://m3.material.io/foundations/interaction/states/applying-states#4aff9c51-d20f-4580-a510-862d2e25e931
     */
    Disabled,
}

/**
 * States show the interaction status of a component or UI element.
 *
 * ### This does not need to be passed to a component.
 * Use the `toggled` property instead.
 * @see https://m3.material.io/foundations/interaction/states/applying-states
 */
export const ToggleableState = {
    /**
     * An enabled (deactivated) state communicates an interactive component or element. Enabled states use the default styling for each interactive component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#39b2fc90-01db-41b5-b6f8-47be61ed1479
     */
    Deactivated: false,
    /**
     * Activated states indicate which item from a set of options is currently being viewed. They are initiated either by default or user choice, using input methods such as a tap, cursor, keyboard, or voice input.
     * Activated states are higher emphasis and signified by an overlay, color change, or other visual treatments applied to elements or segments within a component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#00302817-650f-4058-a9e4-90f5b19baa7b
     */
    Activated: true,

    // * Enums

    /**
     * Activated states indicate which item from a set of options is currently being viewed. They are initiated either by default or user choice, using input methods such as a tap, cursor, keyboard, or voice input.
     * Activated states are higher emphasis and signified by an overlay, color change, or other visual treatments applied to elements or segments within a component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#00302817-650f-4058-a9e4-90f5b19baa7b
     */
    [String(true)]: 'Activated',
    /**
     * An enabled (deactivated) state communicates an interactive component or element. Enabled states use the default styling for each interactive component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#39b2fc90-01db-41b5-b6f8-47be61ed1479
     */
    [String(false)]: 'Deactivated',
}

export type ToggleableState = true | false

/**
 * States show the interaction status of a component or UI element.
 *
 * ### This does not need to be passed to a component.
 * They are automatically applied on interactions. You can however force the state by passing one of the values to the `forceInteractivityState` property.
 * @see https://m3.material.io/foundations/interaction/states/applying-states
 */
export enum InteractivityState {
    /**
     * An enabled (no-interaction) state communicates an interactive component or element. Enabled states use the default styling for each interactive component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#39b2fc90-01db-41b5-b6f8-47be61ed1479
     */
    NoInteraction,
    /**
     * Hover states are initiated by the user pausing over an interactive element using a cursor.
     * The lower-emphasis surface overlay for hover states can be applied to the entire component, elements within a component, or as a circular shape over part of the component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#71c347c2-dd75-485b-892e-04d2900bd844
     */
    Hovered,
    /**
     * A focused state communicates when a user has highlighted an element using a keyboard or voice. Focus states apply to all interactive components.
     * The higher-emphasis surface overlay for focused states can be applied to the entire component, elements within a component, or as a circular shape over part of the component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#bc6d6853-48ef-490e-8076-448e89e69f0f
     */
    Focused,
    /**
     * A pressed state communicates a user-initiated tap or click via cursor, keyboard, or voice input. This state applies to all interactive components.
     * Pressed states trigger a change in composition and should be high-emphasis.
     * A ripple overlay signifies a pressed state. It can be applied to an entire component or elements within a component, or as a circular shape over part of the component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#c3690714-b741-492d-97b0-5fc1960e43e6
     */
    Pressed,
    /**
     * A dragged state occurs when a user presses and moves an element or component. Dragged states should be low emphasis, to avoid distracting users from their task.
     * Dragged states use a lower emphasis overlay. It can be applied to the entire component or to elements within a component.
     * Some components, such as list items, chips, or cards, can inherit elevation to signify a dragged state.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#c97582c4-5fef-42ce-9c34-71f8dcc5b8ad
     */
    Dragged,
}

/**
 * A state layer is a semi-transparent covering on an element that indicates its state. State layers provide a systematic approach to visualizing states by using opacity. A layer can be applied to an entire element or in a circular shape and only one state layer can be applied at a given time.
 * ### This does not need to be passed to a component.
 * @see https://m3.material.io/foundations/interaction/states/state-layers
 */
export const InteractivityOverlayOpacity = {
    [InteractivityState.NoInteraction]: 0,
    [InteractivityState.Hovered]: 0.08,
    [InteractivityState.Focused]: 0.12,
    [InteractivityState.Pressed]: 0.12,
    [InteractivityState.Dragged]: 0.16,
} as const satisfies Record<InteractivityState, number>

export default {
    UsabilityState,
    ToggleableState,
    InteractivityState,
}
