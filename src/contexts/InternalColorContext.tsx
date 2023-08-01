import {
    createMaterial3Theme,
    Material3Scheme,
} from '@pchmn/expo-material3-theme'
import { createContext } from 'react'

const InternalColorContext = createContext<InternalColorContextValue>({
    ...createMaterial3Theme('#6750A4').light,
    __symbol: Symbol(),
}) as React.Context<InternalColorContextValue> & {
    Provider: React.Provider<Omit<InternalColorContextValue, '__symbol'>>
}

const customProvider = Object.assign(
    ({
        value,
        children,
    }: Omit<
        Parameters<(typeof InternalColorContext)['Provider']>,
        '__symbol'
    >[0]) => {
        return InternalColorContext.Provider({
            value: { ...value, __symbol: Symbol() },
            children,
        })
    },
    {
        $$typeof: InternalColorContext.Provider.$$typeof,
    } as const
) as typeof InternalColorContext.Provider

InternalColorContext.Provider = customProvider

export type InternalColorContextValue = Material3Scheme & {
    __symbol: symbol
}

export default InternalColorContext
