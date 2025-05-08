import { counterStore } from "./counterStore"
import { useChitate } from '../hooks/useChitate'

export function CounterWithChitate() {
    const [chitate, setChitate] = useChitate(counterStore)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}>
            <p style={{ fontSize: "2rem", marginBottom: "2rem" }}>Count: {chitate.count}</p>
            <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={() => setChitate({count: chitate.count + 1})} style={{ padding: "0.5rem 1rem", fontSize: "2rem" }}>
                    Increment
                </button>
                <button onClick={() => setChitate({count: chitate.count - 1})} style={{ padding: "0.5rem 1rem", fontSize: "2rem" }}>
                    Decrement
                </button>
            </div>
        </div>
    )
}