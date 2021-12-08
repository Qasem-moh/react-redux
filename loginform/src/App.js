import React from 'react'
import Header from './Header';
import ThemeProvider from './ThemeContext';

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider> */}
        <Header />
    {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
