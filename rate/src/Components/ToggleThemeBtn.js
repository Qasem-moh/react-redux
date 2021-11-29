import React from "react";
import ThemeContext from "../Context/ThemeContext";
class ToggleThemeBtn extends React.Component {
    componentDidUpdate() {
        console.log(this.context .theme);
    }
    render() {
        return (
            <div>
                <button onClick={this.context .toggleTheme}>
                    Toggle theme to {this.context .theme === "dark" ? "white" : "dark"}
                </button>
            </div>
        );
    }
}

ToggleThemeBtn.contextType = ThemeContext;

export default ToggleThemeBtn;
