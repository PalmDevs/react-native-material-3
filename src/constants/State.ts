/**
 * States show the interaction status of a component or UI element.
 *
 * ### This does not need to be passed to a component.
 * They are automatically applied on interactions.
 * @see https://m3.material.io/foundations/interaction/states/applying-states
 */
export enum StateEnum {
    /**
     * An enabled (default) state communicates an interactive component or element. Enabled states use the default styling for each interactive component.
     * @see https://m3.material.io/foundations/interaction/states/applying-states#39b2fc90-01db-41b5-b6f8-47be61ed1479
     */
    Default,
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

export const StateLayerOverlayOpacity = {
    [StateEnum.Default]: 0,
    [StateEnum.Hovered]: 0.08,
    [StateEnum.Focused]: 0.12,
    [StateEnum.Pressed]: 0.12,
    [StateEnum.Dragged]: 0.16,
} as const satisfies Record<StateEnum, number>
