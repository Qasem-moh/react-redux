import React, { useState } from "react";
import { LoginFu, LoginCl } from "./login";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {/* {visible ? (
        <>
          <h2>Hello</h2>
          <LoginCl />
          <LoginFu />
        </>
      ) : null}
      <button onClick={() => setVisible(!visible)}>Toggle</button> */}
    
    
    
    </div>
  );
}

export default App;
