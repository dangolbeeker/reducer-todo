import React, { useReducer } from "react";
import TodoList from "./components/Todolist";
import TodoForm from "./components/TodoForm";
import { reducer, initialState } from "./reducer/reducer";

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);
  const addTodo = newTodo => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };
  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };
  return (
    <div className="App">
      <h1>Reducer Todo's</h1>
      <TodoList todoState={todoState} toggleCompleted={toggleCompleted} />
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;