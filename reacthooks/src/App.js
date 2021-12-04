import React, { useState } from "react";
import { LoginCl, LoginFu } from "./LoginForm";

function App() {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      {visible ? <>
        <h2>Hello</h2>
        <LoginCl />
        <LoginFu /></> : null

      }

      <button onClick={() => setVisible(!visible)}>Toogle</button>
    </div>
  )
}

export default App;


