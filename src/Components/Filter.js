const Filter = (props) => {
    const {filterState, setFilterState} = props;
    const handleFilterState = (state) => {
        setFilterState(state);
      };
    return (
<div id="task-states-section">
          <button
            id="all-tasks-button"
            onClick={() => handleFilterState("All")}
            className={filterState === "All" ? "active-filter" : ""}
            style={{ cursor: "pointer" }}
          >
            All
          </button>
          <button
            id="active-tasks-button"
            onClick={() => handleFilterState("ACTIVE")}
            className={filterState === "ACTIVE" ? "active-filter" : ""}
            style={{ cursor: "pointer" }}
          >
            Active
          </button>
          <button
            id="completed-tasks-button"
            onClick={() => handleFilterState("COMPLETED")}
            className={filterState === "COMPLETED" ? "active-filter" : ""}
            style={{ cursor: "pointer" }}
          >
            Completed
          </button>
          <button
            id="view-log-button"
            onClick={() => setFilterState("LOG")}
            className={filterState === "LOG" ? "active-filter" : ""}
            style={{ cursor: "pointer" }}
          >
            View Log
          </button>
        </div>
    )
}

export default Filter;