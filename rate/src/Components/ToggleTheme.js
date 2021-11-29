import React from "react";
import ThemeContext from "../Context/ThemeContext";
import Two from "./Two";
function ToggleThemeBtn(props) {
    return (
        <div>
            <ThemeContext.Consumer>
                {({ theme }) => { }}

                <button onClick={props.toggleTheme}>
                    Toggle theme to {theme == "dark" ? "white" : "dark"}
                </button>
            </ThemeContext.Consumer>
        </div>
    );
}

export default ToggleThemeBtn;
