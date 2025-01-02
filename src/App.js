// import "./App.css";
// import { v4 as uuidv4 } from "uuid";
// import React, { useState } from "react";

// function App() {
//   const [todo, setTodo] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
// setInputValue(event.target.value);
//   }

//   const handleAddButton = () => {
//     setTodo([...todo, inputValue]);
//     setInputValue("");
//   }

//   return (
//     <div className="App">
//       <header className="App-header"></header>
//       <div id="container">
//         <div id="upperSection">
//           <h1 id="title">To-Do list</h1>
//           <div id="inputSection">
//             <input id="inputBox" placeholder="Add a new task ..."  value={inputValue} onchange={handleInputChange}/>
//             <button id="addButton" onClick={handleAddButton}>Add</button>
//             {todo.map((todo) => {
//                 return <div>{todo}</div>; })}
//           </div>
//           <div id="taskStatusSection">
//             <button id="allTasksButton">All</button>
//             <button id="activeTasksButton">Active</button>
//             <button id="completedTasksButton">Completed</button>
//           </div>
//           <div id="numberOfTasksSection">
//             <p id="numberOfTasksP">No tasks yet. Add one above!</p>
//           </div>
//         </div>

//         <div id="lowerSection">
//           <p>Powered By</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.length === 0) {
      setError("Please Enter Task");
      return;
    } else {
      setError("");
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleCheckBox = (event) => {
    console.log(event);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="container">
        <div id="upper-section">
          <h1 id="title">To-Do List</h1>
          <div id="input-section">
            <input
              id="input-box"
              placeholder="Add a new task....."
              value={inputValue}
              onChange={handleInputChange}
            />
            {error.length > 1 && <div>{error}</div>}
            <button id="add-button" onClick={handleAddButtonClick}>
              Add
            </button>
          </div>
          {todos.map((todo, index) => (
            <div key={index}>
              {" "}
              <input type="checkbox" onChange={handleCheckBox}></input>
              {todo}
            </div>
          ))}
        </div>
        <div id="task-states-section">
          <button id="all-tasks-button">All Tasks</button>
          <button id="active-tasks-button">Active</button>
          <button id="completed-tasks-button">Completed</button>
        </div>
        <div id="number-of-tasks-section">
          <p id="number-of-task">No tasks yet. Add one above!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
