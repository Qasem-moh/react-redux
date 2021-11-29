import React from "react";
function Two(props) {
    return (
        <div>
            <h2 style={{ color: props.theme === "dark" ? "white" : "blue" }}>
                Hi from Two
            </h2>
            <p>theme:{props.theme}</p>
        </div>
    );
}

export default Two;
