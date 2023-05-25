import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Title from "./components/title/Title";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./todomodel";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoHandler = (todo: string) => {
    setTodos((prev) => [...prev, { id: uuidv4(), task: todo, done: false }]);
  };

  const taskDoneHandler = (done: boolean, id: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else {
        return todo;
      }
    });

    setTodos(newTodo);
  };

  return (
    <div className="flex flex-col items-center">
      <Title />
      <TodoForm onAddTodos={todoHandler} />
      <TodoList todoData={todos} onTaskDone={taskDoneHandler} />
    </div>
  );
}

export default App;
