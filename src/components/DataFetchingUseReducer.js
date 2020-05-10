import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post: [],
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                post: [],
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}


function DataFetchingUseReducer() {
    const [newState, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'SUCCESS', payload: response.data })
            })
            .catch(err => {
                dispatch({ type: 'ERROR'})
            })
    }, [])

    return (
        <div>
            <h1> {newState.loading ? 'loading' : newState.post.title}
                {newState.error ? newState.error : null}</h1>
        </div>
    )
}

export default DataFetchingUseReducer
