import React, { useState } from "react";
import One from "./Components/One";
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
  toggleTheme() {
    this.setState({
      theme:this.state.theme==='dark'?'light':'dark'
    })
  }
  render() {
    return (
      <div style={{background:this.state.theme=='dark'?'blue':'white'}}>
        <h2>Hi from App</h2>
        <One theme={this.state.theme} />
      </div>
    );
  }

}

export default App;
