import Button from "./Button";

const Filter = (props) => {
  const {
    filterState,
    setFilterState,
  } = props;
  const handleFilterState = (state) => {
    setFilterState(state);
  };

  return (
    <div id="task-states-section">
      <Button
        handleEvent={() => handleFilterState("All")}
        id={"all-tasks-button"}
        title={"All"}
        className={filterState === "ACTIVE" ? "active-filter" : ""}
      />

      <Button
        handleEvent={() => handleFilterState("ACTIVE")}
        id={"all-tasks-button"}
        title={"Active"}
        className={filterState === "ACTIVE" ? "active-filter" : ""}
      />
      <Button
        handleEvent={() => handleFilterState("COMPLETED")}
        id={"completed-tasks-button"}
        title={"Completed"}
        className={filterState === "COMPLETED" ? "active-filter" : ""}
      />

      <Button
        handleEvent={() => setFilterState("LOG")}
        id={"view-log-button"}
        title={"View Log"}
        className={filterState === "LOG" ? "active-filter" : ""}
      />
    </div>
  );
};

export default Filter;
