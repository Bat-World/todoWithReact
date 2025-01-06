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
  const [filterState, setFilterState] = useState("All");
  const [deleteTask, setDeleteTask] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme switch
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("darkmode", !isDarkMode);
  };

  // Task status filter
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.length === 0) {
      setError("Please Enter Task");
      return;
    } else {
      setError("");
      setTodos([
        ...todos,
        { text: inputValue, id: uuidv4(), status: "ACTIVE" },
      ]);
      setInputValue("");
      setNumberOfTasks(numberOfTasks + 1);
    }
  };

  const handlePressKey = (event) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  };

  const handleCheckBox = (event) => {
    if (event.target.checked) {
      setNumberOfCompletedTasks(numOfCompletedTasks + 1);
    } else {
      setNumberOfCompletedTasks(numOfCompletedTasks - 1);
    }
  };

  const handleBox = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === "ACTIVE" ? "COMPLETED" : "ACTIVE",
        };
      }
      return todo;
    });
    setTodos(newTodos);

    const completedCount = newTodos.filter(
      (todo) => todo.status === "COMPLETED"
    ).length;
    setNumberOfCompletedTasks(completedCount);
  };

  const handleFilterState = (state) => {
    setFilterState(state);
  };

  // Delete task logic
  const handleDeleteTask = (id) => {
    // Filter out the task with the specified id
    const currentTodos = todos.filter((todo) => todo.id !== id);

    // Update the todos state
    setTodos(currentTodos);

    // Update the overall task count
    setNumberOfTasks(numberOfTasks - 1);

    // Update the completed tasks count if the deleted task was completed
    const deletedTask = todos.find((todo) => todo.id === id);
    if (deletedTask && deletedTask.status === "COMPLETED") {
      setNumberOfCompletedTasks(numOfCompletedTasks - 1);
    }
  };

  return (
    <div >
      <div id="header">
      <p id="big-title">Productive Pal</p>
      <button id="theme-switch" onClick={toggleTheme}>
        {isDarkMode ? (
          <svg
            id="lightmode-button"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#666666"
          >
            <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
          </svg>
        )}
      </button>
      </div>
   
      <div id="container">
        <div id="upper-section">
          <h1 id="title">To-Do List</h1>
          <div id="input-section">
            <input
              id="input-box"
              placeholder="Add a new task....."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handlePressKey}
              autoComplete="off"
            />
            {error.length > 1 && <div>{error}</div>}
            <button id="add-button" 
            onClick={handleAddButtonClick}
            style={{cursor: "pointer"}}>
              Add
            </button>
          </div>
        </div>
        <div id="task-states-section">
          <button
            id="all-tasks-button"
            onClick={() => handleFilterState("All")}
            className={filterState === "All" ? "active-filter" : ""}
            style={{cursor: "pointer"}}
          >
            All
          </button>
          <button
            id="active-tasks-button"
            onClick={() => handleFilterState("ACTIVE")}
            className={filterState === "ACTIVE" ? "active-filter" : ""}
            style={{cursor: "pointer"}}
          >
            Active
          </button>
          <button
            id="completed-tasks-button"
            onClick={() => handleFilterState("COMPLETED")}
            className={filterState === "COMPLETED" ? "active-filter" : ""}
            style={{cursor: "pointer"}}
          >
            Completed
          </button>
        </div>

        <div id="task-list-container">
          {todos
            .filter((todo) => {
              if (filterState === "All") {
                return true;
              } else {
                return todo.status === filterState;
              }
            })
            .map((todo, index) => (
              <div id="list-container" key={todo.id} >
                <input
                 style={{cursor: "pointer"}}
                  id="check-box"
                  type="checkbox"
                  checked={todo.status === "COMPLETED"}
                  onChange={() => handleBox(todo.id)}
                />
                <span
                  id="task-text"
                  className={
                    todo.status === "COMPLETED" ? "completed-task" : ""
                  }
                >
                  {todo.text}
                </span>

                <button
                  id="delete-button"
                  onClick={() => handleDeleteTask(todo.id)}
                 style={{cursor: "pointer"}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#434343"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z" />
                  </svg>
                </button>
              </div>
            ))}
        </div>

        <div id="number-of-tasks-section">
          {numberOfTasks === 0 ? (
            <p id="number-of-task">No tasks yet. Add one above!</p>
          ) : (
            <p id="number-of-task">
              {numOfCompletedTasks} of {numberOfTasks} tasks completed
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
