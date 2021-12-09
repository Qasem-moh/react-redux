import React, { useState } from 'react'



export default function FunctionComponents() {

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState('')
    function run() {

    }
    return (
        <div>
            Hi from function<br />
            <input placeholder="First name" value={fName} onClick={(e) => setFName(e.target.value)} />
            <input placeholder="last name" value={lName} onClick={(e) => setLName(e.target.value)} />
            <button>Save</button>
        </div>
    )
}