import React, { useState, useMemo } from 'react'

const randomeColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

function App() {

  const [fistName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, SetAge] = useState('')

  const fullName = useMemo(() => <div style={{ color: randomeColor() }}>{fistName}{lastName}</div>, [fistName, lastName])

  return (
    <div className="App">
      fullName: {fullName}
      age:{age}
      <br />
      <input value={fistName} placeholder='first name' onChange={(e => setFirstName(e.target.value))} />
      <input value={lastName} placeholder='last name' onChange={(e => setLastName(e.target.value))} />
      <input value={age} placeholder='age' onChange={(e => SetAge(e.target.value))} />
    </div>
  );
}

export default App;
