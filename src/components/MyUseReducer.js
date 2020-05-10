import React, { useReducer } from 'react'

const initialState = 0
const reducer = (currentState, action) => {
    switch (action) {
        case 'increment5':
            return currentState + 5
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function MyUseReducer() {
    const [newState, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Connt - {newState}</h1>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('increment5')}>Increment5</button>
        </div>
    )
}

export default MyUseReducer
