import "./App.css";
import List from "./Components/List";
import React, { useState } from "react";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import UpperSection from "./Components/UpperSection";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const [numOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);
  const [filterState, setFilterState] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [log, setLog] = useState([]);

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
        inputValue={inputValue}
        setInputValue={setInputValue}
        setError={setError}
        todos={todos}
        setTodos={setTodos}
        setLog={setLog}
        numberOfTasks={numberOfTasks}
        setNumberOfTasks={setNumberOfTasks}
      />
      <Filter setFilterState={setFilterState} />
      <List
        log={log}
        todos={todos}
        filterState={filterState}
        handleDeleteTask={handleDeleteTask}
        setNumberOfCompletedTasks={setNumberOfCompletedTasks}
        setTodos={setTodos}
      />
      <Footer
        todos={todos}
        setTodos={setTodos}
        numberOfTasks={numberOfTasks}
        numOfCompletedTasks={numOfCompletedTasks}
        setNumberOfTasks={setNumberOfTasks}
        setNumberOfCompletedTasks={setNumberOfCompletedTasks}
      />
    </div>
  );
}

export default App;
