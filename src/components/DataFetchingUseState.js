import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingUseState() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/10')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(err => {
            setLoading(false)
            setPost({})
            setError('Something went wrong!')
        })
    }, [])

    return (
        <div>
            <h1> { loading ? 'loading' : post.title }
            {error? error : null}</h1>
        </div>
    )
}

export default DataFetchingUseState
