import React, { useState } from "react";

export class LoginCl extends React.Component {
    state = {
        email: "",
        password: "",
    };
    componentDidCatch() {
        console.log("class component Did mount");
    }

    componentDidUpdate() {
        console.log("class Component did upate");
    }

    componentWillUnmount() {
        console.log("class component Did un mount");
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };
    handlePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <h2>Example use class</h2>
                <input
                    value={this.state.email}
                    onChange={this.handleEmail}
                    placeholder="email"
                />
                <input
                    value={this.state.password}
                    onChange={this.handlePassworda}
                    palceholder="password"
                />
            </div>
        );
    }
}

export function LoginFu() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    return (
        <div>
            <h2>Welcome</h2>
            <input value={email} onChange={handleEmail} />
            <input value={password} type="password" onChange={handlePassword} />
        </div>
    );
}
