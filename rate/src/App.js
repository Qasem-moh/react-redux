import React, { useState } from "react";
import One from "./Components/One";
import ToggleThemeBtn from "./Components/ToggleTheme"
import ThemeContext from "./Context/ThemeContext";
import { LoginFu, LoginCl } from "./login";

// function App() {
//   const [visible, setVisible] = useState(true);
//   return (
//     <div className="App">
//       {visible ? (
//         <>
//           <h2>Hello</h2>
//           <LoginCl />
//           <LoginFu />
//         </>
//       ) : null}

//       <button onClick={() => setVisible(!visible)}>Toggle</button>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    theme: 'dark'
  }
  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark'
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={{
        'theme': this.state.theme
      }}>
        <div
          style={{ background: this.state.theme == "dark" ? "blue" : "white" }}
        >
          <h2>Hi from App</h2>
          <One />
          <ToggleThemeBtn toggleTheme={this.toggleTheme} />
        </div>
      </ThemeContext.Provider>
    );
  }

}

export default App;
