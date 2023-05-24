import Title from "./components.tsx/title/Title";
import TodoForm from "./components.tsx/TodoForm";
import TodoList from "./components.tsx/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Title />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
