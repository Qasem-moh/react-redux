import React, { useState, useEffect } from "react";

export class LoginCl extends React.Component {
    state = {
        email: "",
        password: "",
    };
    componentDidMount() {
        console.log("class component Did mount");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.email !== this.state.email) {
            console.log("class Component: email did update");
        }
        console.log("class Component did update");
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
                    placeholder="password"
                />
            </div>
        );
    }
}

export function LoginFu() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("Function Component did Mount");

        return () => {
            console.log("Function component Did un mount");
        };
    }, []);

    useEffect(() => {
        if (email === "")
            return;
        console.log("Function Component did Update");
    });

    useEffect(() => {
        if (email === "")
            return;
        console.log("Function Component:email did Update");
    }, [email]);

    useEffect(() => {
        if (password === "")
            return;
        console.log("Function Component:password did Update");
    }, [password]);

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    return (
        <div>
            <h2>Example use function</h2>
            <input value={email} onChange={handleEmail} placeholder="Email"
            />
            <input value={password} type="password" onChange={handlePassword} placeholder="password"
            />
        </div>
    );
}
