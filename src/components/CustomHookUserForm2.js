import React, { useState } from 'react'
import useInput from '../hooks/useInput'

function CustomHookUserForm2() {
    const [firstname, firstnamebind, firstnamereset] = useInput()
    const [lastname, lastnamebind, lastnamereset] = useInput()


    const submitHandlar = e => {
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        firstnamereset()
        lastnamereset()
    }

    return (
        <div>
            <form onSubmit={submitHandlar}>
                <label>First Name</label>
                <input
                    {...firstnamebind}
                    type='text' />
                <input
                    {...lastnamebind}
                    type='text'
                />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default CustomHookUserForm2
