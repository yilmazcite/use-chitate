import {useEffect, useState} from "react"

import {counterStore} from "./counterStore"

export function Counter() {
    const [count, setCount] = useState(counterStore.getState().count)

    useEffect(() => {
        const unsubscribe = counterStore.subscribe((state) => {
            setCount(state.count)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        counterStore.subscribe(state => {
            console.log('Counter state: ', state.count)
        })
    }, [count])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}>
            <p style={{fontSize: "2rem", marginBottom: "2rem"}}>Count: {count}</p>
            <div style={{display: "flex", gap: "1rem"}}>
                <button onClick={() => counterStore.setState({count: count + 1})}
                        style={{padding: "0.5rem 1rem", fontSize: "2rem"}}>
                    Increment
                </button>
                <button onClick={() => counterStore.setState({count: count - 1})}
                        style={{padding: "0.5rem 1rem", fontSize: "2rem"}}>
                    Decrement
                </button>
            </div>
        </div>
    )
}