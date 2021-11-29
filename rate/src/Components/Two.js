import React from "react";
import ThemeContext from "../Context/ThemeContext";
function Two(props) {
    return (

        <div>
            <ThemeContext.Consumer>
                {({ theme }) => <>
                    <h2 style={{ color: theme === "dark" ? "white" : "blue" }}>
                        Hi from Two
                    </h2>
                    <p>theme:{theme}</p>
                </>
                }
            </ThemeContext.Consumer>
        </div>
    );
}

export default Two;
