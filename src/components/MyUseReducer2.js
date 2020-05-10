import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...currentState, firstCounter: currentState.firstCounter + action.value }
        case 'decrement':
            return { ...currentState, firstCounter: currentState.firstCounter - action.value }
        case 'increment2':
            return { ...currentState, secondCounter: currentState.secondCounter + action.value }
        case 'decrement2':
            return { ...currentState, secondCounter: currentState.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function MyUseReducer2() {
    const [newState, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>First Counter - {newState.firstCounter}</h1>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment5</button>
            <h1>Second Counter - {newState.secondCounter}</h1>
            <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement5</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment5</button>
        </div>
    )
}

export default MyUseReducer2
