import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Headr";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header/>
      </ThemeProvider>
    </div>
  )
}

export default App;


