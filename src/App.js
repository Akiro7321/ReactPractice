import './App.css';


import { useState } from 'react';
import './App.css'

const App = () =>{
	
	return (
    <CounterComponent />
	)
}

const CounterComponent = () =>{
  const [counter, setCounter] = useState(0);

  return(
    <div className="App">
      <div className="CounterApp">
        <h1>NUMBER COUNTING</h1>
			  <h2>{counter}</h2>
        <div className="Buttons">
          <button className="button" onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
          <button className="button" onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
          <button className="button" onClick={() => setCounter(0)}>Reset</button>
        </div>
      </div>
			
		</div>
  )
}


export default App;
