type Listener<T> = (state: T) => void

export type Store<T> = {
    getState: () => T
    setState: (partial: Partial<T>) => void
    subscribe: (listener: (state: T) => void) => () => void
}

export function createStore<T>(initialState: T) {
    let state = initialState
    const listeners: Set<Listener<T>> = new Set()

    return {
        getState(): T {
            return state
        },

        setState(partial: Partial<T>) {
            state = {...state, ...partial}
            listeners.forEach((listener) => listener(state))
        },

        subscribe(listener: Listener<T>) {
            listeners.add(listener)

            return () => {
                listeners.delete(listener)
            }
        }
    }
}

