import moment from "moment";

const List = ({
  todos,                                                                               
  filterState,
  log,
  setTodos,
  setNumberOfCompletedTasks,
  handleDeleteTask,
}) => {
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
    setNumberOfCompletedTasks(
      newTodos.filter((t) => t.status === "COMPLETED").length
    );
  };

  return (
    <div id="invisible-one">
      <div id="task-list-container">
        {todos
          .filter((todo) =>
            filterState === "All" ? true : todo.status === filterState
          )
          .map((todo) => (
            <div id="list-container" key={todo.id}>
              <input
                id="check-box"
                type="checkbox"
                checked={todo.status === "COMPLETED"}
                onChange={() => handleBox(todo.id)}
              />
              <span
                id="taskName-list"
                className={todo.status === "COMPLETED" ? "completed-task" : ""}
              >
                {todo.text}
              </span>
              <button
                id="delete-button"
                onClick={() => handleDeleteTask(todo.id)}
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
      {filterState === "LOG" && (
        <div>
          {log.length === 0 ? (
            <p>No actions logged yet.</p>
          ) : (
            log.map((entry, index) => (
              <div id="log-container" key={index}>
                <p id="logname-list">
                  <strong>{entry.text}</strong> -added{" "}
                  {moment(entry.timestamp || new Date()).fromNow()}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default List;
