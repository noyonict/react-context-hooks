import React, {useContext} from 'react'
import { CountContext } from './MyUserReducer4'

function RootComponentA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component A - {countContext.countState} - 
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        </div>
    )
}

export default RootComponentA
