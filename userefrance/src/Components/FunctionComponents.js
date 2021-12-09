import React, { useState, useEffect } from 'react'



export default function FunctionComponents() {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState('');

    const fNameRef = React.useRef();
    const lNameRef = React.useRef();
    const buttonRef = React.useRef();

    useEffect(() => {
        fNameRef.current.focus();
    }, [])

    function onFirstInputKey(e) {
        if (e.key === 'Enter') {
            lNameRef.current.focus();
        }
    }

    function onLastInputKey(e) {
        if (e.key === 'Enter') {
            buttonRef.current.focus();
        }
    }

    function run() {
        console.log(fName, lName);
    }
    return (
        <div>
            Hi from function<br />
            <input ref={fNameRef} onKeyDown={onFirstInputKey} placeholder="First name" value={fName} onChange={(e) => setFName(e.target.value)} />
            <input ref={lNameRef} onKeyDown={onLastInputKey} placeholder="last name" value={lName} onChange={(e) => setLName(e.target.value)} />
            <button ref={buttonRef} onClick={run}>Save</button>
        </div>
    )
}