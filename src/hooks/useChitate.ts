import { useEffect, useState } from "react"
import { type Store } from "../global-state-mgmt/store"

export function useChitate<T>(store: Store<T>): [T, (newState: Partial<T>) => void] {
    const [state, setState] = useState(store.getState())

    useEffect(() => {
        const unsubscribe = store.subscribe(setState)
        return () => unsubscribe()
    }, [store])

    const updateState = (newState: Partial<T>) => {
        store.setState(newState)
    }

    return [state, updateState]
}
