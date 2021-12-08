import React from 'react'




export default function Header() {
    return (
        <nav className="navbar navbar-light bg-light mt-2 mb-2">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">React Hooks</span>
                <div>{true ? <div>
                    admin@app.com
                    { " "}
                    <button className="btn btn-danger btn-sm ">Logout</button>
                </div> : "you need login"}</div>
            </div>
        </nav>
    )
}