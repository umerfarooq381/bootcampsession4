import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message.js'

function App() {
  let[count,setCount] = useState(1);

  let[isMorning, setMorning] = useState(true);




  return (
    <div className={`Box ${isMorning ? 'dayLight':  ''}`}>
      <h1>Have a Good {isMorning ? 'Morning':  'Night'}</h1>
      <Message count={count}  />
      <button onClick={() => setCount(count + 1)}>Update Counter</button>

      <button onClick={() => setMorning(!isMorning)}>Switch Daylight</button>
    </div>
  );
}

export default App;
