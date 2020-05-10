import React, { useReducer } from 'react'
import RootComponentA from './RootComponentA'
import RootComponentB from './RootComponentB'
import RootComponentC from './RootComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (currentState, action) => {
    switch (action) {
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

function MyUserReducer4() {
    const [newState, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{ countState: newState, countDispatch: dispatch }}>
            <h1>Connt - {newState}</h1>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <RootComponentA />
            <RootComponentB />
            <RootComponentC />

        </CountContext.Provider>
    )
}

export default MyUserReducer4
