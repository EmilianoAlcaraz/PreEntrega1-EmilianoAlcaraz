import { useState } from "react"

export const useCount = (idProducto) => {

    const [count , setCount] = useState(initialValue)

    const increment = () => setCount(count + 1)

    const decrement = () => {
        if(count >= 1) setCount(count - 1)
    }


    return {count , increment, decrement}
}

