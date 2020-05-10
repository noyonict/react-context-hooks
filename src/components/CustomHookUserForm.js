import React, {useState} from 'react'

function CustomHookUserForm() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')

    const submitHandlar = e => {
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
    }

    return (
        <div>
            <form onSubmit={submitHandlar}>
                <label>First Name</label>
                <input 
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)} />
                <input 
                value={lastname}
                onChange={(e) => setLastname(e.target.value)} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default CustomHookUserForm
