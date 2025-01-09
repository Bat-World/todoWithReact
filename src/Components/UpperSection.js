import moment from "moment";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const UpperSection = (props) => {
  const {
    inputValue,
    setInputValue,
    error,
    setError,
    todos,
    setTodos,
    log,
    setLog,
    numberOfTasks,
    setNumberOfTasks,
  } = props;

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
      const newTask = { text: inputValue, id: uuidv4(), status: "ACTIVE" };
      setTodos([...todos, newTask]);
      setInputValue("");
      setNumberOfTasks(numberOfTasks + 1);
      setLog([
        ...log,
        {
          taskId: newTask.id,
          text: inputValue,
          logs: [{ status: "ACTIVE", timestamp: moment() }],
        },
      ]);
    }
  };

  const handlePressKey = (event) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
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
          <button
            id="add-button"
            onClick={handleAddButtonClick}
            style={{ cursor: "pointer" }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
