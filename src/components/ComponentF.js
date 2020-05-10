import React, {useContext} from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentF() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <h3>User Context value is {user}</h3>
            <h3>Channel Context value is {channel}</h3>
        </div>
    )
}

export default ComponentF
