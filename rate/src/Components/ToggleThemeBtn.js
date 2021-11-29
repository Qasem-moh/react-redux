import React from "react";
import ThemeContext from "../Context/ThemeContext";
function ToggleThemeBtn(props) {
    return (
        <div>
            <ThemeContext.Consumer>
                {({ theme }) => {
                    <button onClick={props.toggleTheme}>
                        Toggle theme to {theme == "dark" ? "light" : "dark"}
                    </button>
                }}
            </ThemeContext.Consumer>
        </div>
    );
}

export default ToggleThemeBtn;
