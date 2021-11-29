import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
function Two(props) {
    const thhemeContext = useContext(ThemeContext)
    return (
        <div>
            <h2 style={{
                color: ThemeContext.theme === "dark" ? "white" : "blue"
            }}>
                Hi from Two
            </h2>
            <p>Theme:{ThemeContext.theme}</p>
        </div>
    );
}

export default Two;
