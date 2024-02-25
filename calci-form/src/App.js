import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState();

  const handleChange = (e) => {
    setNum(parseInt(e.target.value))
  }

  const handlePlusOne = () => {
    setNum(num + 1);
  } 
  const handlePlusTen = () => {
    setNum(num + 10);
  }
  const handleMinusOne = () => {
    setNum(num - 1);
  }
  const handleMinusTen = () => {
    setNum(num - 10);
  }
  return(
    <div className='container'>
      <div className='login-form'>
        <h1>Calculator</h1>
        <div className='input-container'>
          <label>Enter the Number</label>
          <input name='number' type='number' value={num} onChange={handleChange}/>
        </div>

        <button className='btn-submit' onClick={handlePlusOne}>+1</button>
        <button className='btn-submit' onClick={handleMinusOne}>-1</button>
        <button className='btn-submit' onClick={handlePlusTen}>+10</button>
        <button className='btn-submit' onClick={handleMinusTen}>-10</button>
      </div>
    </div>
  );
}

export default App;
