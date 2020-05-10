import React, { useState, useMemo } from 'react'

function UseMemoCounter() {
    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterone(counterone + 1)
    }

    const incrementCountertwo = () => {
        setCountertwo(countertwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while(i < 200000000) i++
        return counterone % 2 === 0
    }, [counterone]) 

    return (
        <div>
            <button onClick={incrementCounterOne}>Count one - {counterone}</button>
            <span>{isEven ? 'Even': 'Odd'}</span>
            <button onClick={incrementCountertwo}>Count one - {countertwo}</button>
        </div>
    )
}

export default UseMemoCounter
