import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";


function App() {
 const [todos, setTodos] = useState([]);
 const [inputValue, setInputValue] = useState("");
 const [error, setError] = useState("");
 const [numberOfTasks, setNumberOfTasks] = useState(0);
 


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
     setNumberOfTasks(numberOfTasks + 1);
   }
 };

 const handleCheckBox = (event) => {
   console.log(event);
   setNumberOfTasks (numberOfTasks - 1);
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

        {/* Gotta ask from teacher */}
       {numberOfTasks === 0 ? (
  <p id="number-of-task">No tasks yet. Add one above!</p>
) : (
  <p>0 of {numberOfTasks} tasks completed</p>
)}

      
       </div>
     </div>
   </div>
 );
}

export default App;