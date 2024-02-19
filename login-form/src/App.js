import { useState } from 'react';
import './App.css';

function App() {
  
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  } 
  
  const handlePass = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    alert("Your Form is Submitted Successfully ");
  }

  return(
    <div className='container'>
      <div className='login-form'>
        <h1>Login</h1>
        <div className='input-container'>
          <label>Email</label>
          <input name='email' type='email' value={email} onChange={handleEmail}/>
        </div>

        <div className='input-container'>
          <label>Password</label>
          <input name='pass' type='password' value={pass} onChange={handlePass}/>
        </div>

        <button className='btn-submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
