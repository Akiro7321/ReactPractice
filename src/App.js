import './App.css';


import { useState } from 'react';
import './App.css'


const App = () =>{
  let yenValue = 1;
	
	return (
    <div className="App">
      <CounterComponent yenValueProp={yenValue}/>
    </div>
    
	)
}

const CounterComponent = ({yenValueProp}) =>{
  const [counter, setCounter] = useState(0);

  return(
      <div>
        <div className="CounterApp">
          <h1>Bank account</h1>
          <h2>{counter} ¥</h2>
          <h2>current yen value {yenValueProp} ¥</h2>
          <h2>current yen value {yenValueProp} ¥</h2>

          <div className="Buttons">
            <button className="button" onClick={() => setCounter((prevCount) => prevCount + yenValueProp)}>+</button>
          </div>
        </div>
      </div>
  )
  
}


export default App;
