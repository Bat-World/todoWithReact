
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, {useState} from "react"

function App() {

  const [todo, Settodo] = useState([]);
  const [ inputValue, SetinputValue] = useState("");
 
  return (
    <div className="App">
      <header className="App-header">
       hello
      </header>
     <div id='container'>
      <h1>To-Do list</h1>
        <input id='inputBox' placeholder='Add task here'/>
        <button id='addButton'>Add</button>
        </div>
    </div>
  );
}

export default App;
