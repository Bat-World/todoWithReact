import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

function App() {
  const [todo, Settodo] = useState([]);
  const [inputValue, SetinputValue] = useState("");

  return (
    <div className="App">
      <header className="App-header">hello</header>
      <div id="container">
        <div id="upperSection">
          <h1 id="title">To-Do list</h1>
          <div id="inputSection">
            <input id="inputBox" placeholder="Add a new task ..." />
            <button id="addButton">Add</button>
          </div>
          <div id="taskStatusSection">
            <button id="allTasksButton">All</button>
            <button id="activeTasksButton">Active</button>
            <button id="completedTasksButton">Copmleted</button>
          </div>
          <div id="numberOfTasksSection">
            <p id="numberOfTasksP">No tasks yet. Add one above!</p>
          </div>
        </div>

        {/* <div id="lowerSection">
          <p>Powered By</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
