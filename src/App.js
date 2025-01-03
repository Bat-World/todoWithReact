import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const todos = {
  text: "do homework",
  status: "ACTIVE" | "COMPLETED",
id: 1,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const [numOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);
  
 


 const handleInputChange = (event) => {
   setInputValue(event.target.value);
 };



 const handleAddButtonClick = () => {
   if (inputValue.length === 0) {
     setError("Please Enter Task");
     return;
   } else {
     setError("");
     setTodos([...todos, {text: inputValue, id: uuidv4(), status: "ACTIVE"}]);
     setInputValue("");
     setNumberOfTasks(numberOfTasks + 1); 
   }
 };

 const handleCheckBox = (event) => {
  if (event.target.checked) {
    setNumberOfCompletedTasks(numOfCompletedTasks + 1);
  } else {
    setNumberOfCompletedTasks(numOfCompletedTasks - 1);
  }
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
             autoComplete="off"
           />
           {error.length > 1 && <div>{error}</div>}
           <button id="add-button" onClick={handleAddButtonClick}>
             Add
           </button>
         </div>
       </div>
       <div id="task-states-section">
         <button id="all-tasks-button">All</button>
         <button id="active-tasks-button">Active</button>
         <button id="completed-tasks-button">Completed</button>
       </div>


<div id="task-list-container">
{todos.map((todo, index) => (
           <div id="list-container" key={index}>
             {" "}
             <input type="checkbox" onChange={handleCheckBox}></input>
             {todo.text}
           </div>
         ))}
</div>
    


       <div id="number-of-tasks-section">
        {/* Gotta ask from teacher */}
       {numberOfTasks === 0 ? (
  <p id="number-of-task">No tasks yet. Add one above!</p>
) : (
  <p id="number-of-task">{numOfCompletedTasks} of {numberOfTasks} tasks completed</p>
)}

      
       </div>
     </div>
   </div>
 );
}

export default App;