import React from "react";
import Two from "./Two";
function ToggleThemeBtn(props) {
    return (
        <div>
            <button onClick={props.toggleTheme}>Toggle</button>
        </div>
    );
}

export default ToggleThemeBtn;
