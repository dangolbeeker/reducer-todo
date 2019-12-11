import React, { useState } from "react";

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  return (
    <>
      <form /*onSubmit={() => props.addTodo(newTodo)}*/>
        <input
          value={newTodo}
          onChange={handleChanges}
          type="text"
          name="todo"
          placeholder="Add Todo..."
        />
        <button
          onClick={e => {
            e.preventDefault();
            props.addTodo(newTodo);
            setNewTodo("");
          }}
        >
          Add
        </button>
      </form>
      <button
        onClick={e => {
          e.preventDefault();
          props.clearCompleted();
        }}
      >
        Clear Completed
      </button>
    </>
  );
};

export default TodoForm;