import { useState } from "react"

export const Timer = () => {
    const [count, setCount] = useState(60)

    setTimeout(() => {
        count > 0 && setCount(count -1)
    }, 1000)

    return (
        <p className="border-2 py-4 px-8">{count}</p>
    )
}