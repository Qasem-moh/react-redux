import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'




export default function Header() {
    const authContext = useContext(AuthContext)

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        authContext.setAuth({})
    }

    return (
        <nav className="navbar navbar-light bg-light mt-2 mb-2">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">React Hooks</span>
                <div>{authContext.auth.email ? <div>
                    {authContext.auth.email}
                    {" "}
                    <button className="btn btn-danger btn-sm " onClick={logout}>Logout</button>
                </div> : "you need login"}</div>
            </div>
        </nav>
    )
}