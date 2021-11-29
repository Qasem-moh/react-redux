import React from "react";
import ThemeContext from "../Context/ThemeContext";
class ToggleThemeBtn extends React.Component {
    componentDidCatch() {
        console.log(theme);
    }
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {({ theme, toggleTheme }) => <>
                        <button onClick={toggleTheme}>
                            Toggle theme to {theme === "dark" ? "white" : "dark"}
                        </button>
                    </>
                    }
                </ThemeContext.Consumer>
            </div>
        );

    }
}

ToggleThemeBtn.contextType = ThemeContext;

export default ToggleThemeBtn;
