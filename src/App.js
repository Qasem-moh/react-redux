import React from 'react';
import './App.css';


function Header(props) {
  return (
    <header>
      <p>{props.title}</p>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  );
}

class Odometer extends React.Component {
  constructor() {
    super();
    this.state = {
      odometer: 0
    }
  }

  render() {
  
    return (
      <div>
        <h1>{this.state.odometer}</h1>
      </div>
    );
  }
}

function Main() {
  return (
    <main>

      <div>
        <h1>Odometer</h1>
      </div>
      <Odometer />
    </main>
  );
}

function App() {

  return (
    <div className="App">
      <Header title="Odometer App" />
      <Main />
      <Footer />

    </div>
  );
}


export default App;