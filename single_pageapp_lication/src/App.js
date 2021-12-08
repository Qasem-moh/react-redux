import React from 'react'
import Header from './Header';
import Login from './Login';


function App() {
  return (
    <div className="container">
      <Header />
      {false ? "Welcom" : <Login />}
      
    </div>
  );
}

export default App;
