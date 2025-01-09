import React from "react";

const Footer = (props) => {
  const {
    todos,
    setTodos,
    numberOfTasks,
    numOfCompletedTasks,
    setNumberOfTasks,
    setNumberOfCompletedTasks,
  } = props;

  const handleClearCompleted = () => {
    const activeTodos = todos.filter((todo) => todo.status !== "COMPLETED");
    setTodos(activeTodos);
    setNumberOfTasks(activeTodos.length);
    setNumberOfCompletedTasks(0);
  };

  return (
    <div id="footer">
      <div id="number-of-tasks-section">
        {numberOfTasks === 0 ? (
          <p id="number-of-task">No tasks yet. Add one above!</p>
        ) : (
          <p id="number-of-task">
            {numOfCompletedTasks} of {numberOfTasks} tasks completed
          </p>
        )}
        <button id="clearCompleted-button" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>
      <div id="poweredBy-section">
        <p id="developedby-text">
          Developed by
          <a
            href="https://github.com/Bat-World"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="github-icon">Bat-World</button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
