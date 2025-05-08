import { createStore } from "../global-state-mgmt/store"

type CounterState = {
    count: number
}

export const counterStore = createStore<CounterState>({count: 0})
