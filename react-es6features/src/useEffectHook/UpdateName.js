import React, { useState, useEffect } from 'react'

const UpdateName = () => {
    const [name, setName] = useState({ firstName: '' });
    useEffect(() => {
        document.title = `Name: ${name.firstName}`
    })
    const updateName = (e) => {
        setName([
            ...name,
            {
               name: name.firstName
            }
           
        ])
    }
    return (
        <div>
            <form>
                Name:
                <input
                    type="text"
                    placeholder='Enter you firstname'
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                />
                <br />
            </form>
            <button onClick={updateName}>Update</button>
        </div>
    )
}

export default UpdateName;