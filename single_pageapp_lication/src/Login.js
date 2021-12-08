import React, { useState } from 'react'




export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function login(e) {
        e.preventDefault();
        console.log({email,password});
    }
    return (
        <form>
            <h2>Login</h2>
            <input type="email" className="form-control" placeholder="Email" value={email}
                onChange={ e=>setEmail(e.target.value)}/>
            <br />
            <input type="password" className="form-control" placeholder="Email" value={password}
                onChange={e => setPassword(e.target.value)}/>
            <br />
            <button className="btn btn-primary" onClick={login}>send</button>

        </form>
    )
}