import './App.css';
import React, { useState } from 'react';
import ButtonComp from './components/Button';

function App() {

  let [number, setnumber] = useState(0)

  const increase = () => {
    setnumber(number + 1)
  }

  const decrease = () => {
    setnumber(number - 1)
  }

  const reset = () => {
    setnumber(0)
  }
  return (
    <div className="App">
      <ButtonComp value="Increase" color='blue' click={increase} />
      <ButtonComp value="Decrease" color='tomato' click={decrease} />
      <ButtonComp value="Reset" color='black' click={reset} />
      <h1>{number}</h1>
    </div>
  );
}

export default App;
