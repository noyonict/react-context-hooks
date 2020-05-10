import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching2() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClink] = useState(1)

    const handleClick = () => {
        setIdFromButtonClink(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    return (
        <div>
            <input type='text' value={id} onChange={ e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Get Post</button>
            <h1>{post.title}</h1>
            <h3>{post.id}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default DataFetching2
