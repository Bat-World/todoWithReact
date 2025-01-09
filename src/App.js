import "./App.css";
import List from "./Components/List";
import React, { useState } from "react";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import UpperSection from "./Components/UpperSection";

function App() {
  const [log, setLog] = useState([]);
  const [error, setError] = useState("");
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const [filterState, setFilterState] = useState("All");
  const [numOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);

  const handleDeleteTask = (id) => {
    const currentTodos = todos.filter((todo) => todo.id !== id);
    setTodos(currentTodos);
    setNumberOfTasks(numberOfTasks - 1);

    const deletedTask = todos.find((todo) => todo.id === id);
    if (deletedTask?.status === "COMPLETED") {
      setNumberOfCompletedTasks(numOfCompletedTasks - 1);
    }
  };

  return (
    <div>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <UpperSection
        log={log}
        error={error}
        todos={todos}
        setLog={setLog}
        setTodos={setTodos}
        setError={setError}
        inputValue={inputValue}
        numberOfTasks={numberOfTasks}
        setInputValue={setInputValue}
        setNumberOfTasks={setNumberOfTasks}
      />
      <Filter setFilterState={setFilterState} />
      <List
        log={log}
        todos={todos}
        setTodos={setTodos}
        filterState={filterState}
        handleDeleteTask={handleDeleteTask}
        setNumberOfCompletedTasks={setNumberOfCompletedTasks}
      />
      <Footer
        todos={todos}
        setTodos={setTodos}
        numberOfTasks={numberOfTasks}
        setNumberOfTasks={setNumberOfTasks}
        numOfCompletedTasks={numOfCompletedTasks}
        setNumberOfCompletedTasks={setNumberOfCompletedTasks}
      />
    </div>
  );
}

export default App;
