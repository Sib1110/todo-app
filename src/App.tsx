import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Title from "./components/title/Title";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface Todo {
  id: string;
  task: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoHandler = (todo: string) => {
    setTodos((prev) => [...prev, { id: uuidv4(), task: todo, done: false }]);
  };

  return (
    <div className="flex flex-col items-center">
      <Title />
      <TodoForm onAddTodos={todoHandler} />
      <TodoList todoData={todos} />
    </div>
  );
}

export default App;
