import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState();

  const handleChange = (e) => {
    setNum(parseInt(e.target.value))
  }

  // const handlePlusOne = () => {
  //   setNum(num + 1);
  // } 
  // const handlePlusTen = () => {
  //   setNum(num + 10);
  // }
  // const handleMinusOne = () => {
  //   setNum(num - 1);
  // }
  // const handleMinusTen = () => {
  //   setNum(num - 10);
  // }

  const handleClick = (operator) => {
    let temp = num

      switch(operator) {
        case "+1":
          temp = temp + 1
          break;
        case "-1":
          temp = temp - 1
          break;
        case "+10":
          temp = temp + 10
          break;
        case "-10":
          temp = temp - 10
          break;
        default: 
          temp = num;
    }
    setNum(temp)
  }
  return(
    <div className='container'>
      <div className='login-form'>
        <h1>Calculator</h1>
        <div className='input-container'>
          <label>Enter the Number</label>
          <input name='number' type='number' value={num} onChange={handleChange}/>
        </div>

        <button className='btn-submit' onClick={() => handleClick("+1")}>+1</button>
        <button className='btn-submit' onClick={() => handleClick("-1")}>-1</button>
        <button className='btn-submit' onClick={() => handleClick("+10")}>+10</button>
        <button className='btn-submit' onClick={() => handleClick("-10")}>-10</button>
      </div>
    </div>
  );
}

export default App;
