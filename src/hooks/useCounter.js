import { useEffect, useState } from 'react'

function useCounter(initialcount = 0, value=1) {
    const [count, setCount] = useState(initialcount)

    const increment = () => {
        setCount(preCount => preCount + value)
    }

    const decrement = () => {
        setCount(preCount => preCount - value)
    }

    const reset = () => {
        setCount(initialcount)
    }
    return [count, increment, decrement, reset]
}

export default useCounter
