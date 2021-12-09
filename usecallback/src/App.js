import React, { useState, useCallback } from 'react'
import Button from './Button';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  const incrementCallBack=useCallback(increment,[])

  return (
    <div >
      count:{count}
      <Button onClick={incrementCallBack}>
        Increment
      </Button>
    </div>
  )
}



// class App extends React.Component {
//   state = {
//     count: 0
//   }
//   increment = () => {
//     this.setState({ count: this.state.count + 1 })
//   }
//   render() {

//     return (
//       <div >
//         count:{this.state.count}
//         <Button onClick={this.increment}>
//           Increment
//         </Button>
//       </div>
//     );
//   }
// }

export default App;
