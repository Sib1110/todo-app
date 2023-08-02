import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Title from "./components/title/Title";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { Todo } from "./types";

import { instance } from "./api/axios";

import ButtonGroup from "./components/buttongroup/ButtonGroup";
import EmptyList from "./components/todo/EmptyList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(false);
  const [clickedDone, setClickedDone] = useState(false);
  const [filteredDoneTodos, setFilteredDoneTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await instance.get("/");
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodoHandler = (todo: string) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      done: false,
    };

    const addnewTodo = async () => {
      await instance.put("/", [...todos, newTodo]);
    };
    addnewTodo();
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const taskDoneHandler = (done: boolean, id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done } : todo
    );

    setTodos(updatedTodos);
  };

  const deleteTodoHandler = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    const deleteTodo = async () => {
      await instance.put("/", updatedTodos);
    };
    deleteTodo();
    setTodos(updatedTodos);
  };

  const updateTodoHandler = (id: string, task: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteAllTodosHandler = () => {
    const deleteAllTodos = async () => {
      await instance.delete("/");
    };
    deleteAllTodos();
    setTodos([]);
  };

  const sortTodosHandler = () => {
    const doneTasks = todos.filter((todo) => todo.done === true);
    const notDoneTasks = todos.filter((todo) => todo.done === false);

    setSort((prevSort) => !prevSort);
    sort
      ? setTodos([...doneTasks, ...notDoneTasks])
      : setTodos([...notDoneTasks, ...doneTasks]);
  };

  const filterTodosHandler = (text: string) => {
    setQuery(text);
  };

  const todoList = query
    ? todos.filter((todo) => todo.task.toLowerCase().includes(query))
    : todos;

  const clearQuery = () => setQuery("");

  const doneTasksCount = todos.filter((todo) => todo.done).length;
  const filterDoneTodosHandler = () => {
    setClickedDone((prevClickedDone) => !prevClickedDone);
    if (clickedDone) {
      setFilteredDoneTodos([]);
    } else {
      const filteredArr = todos.filter((todo) => todo.done);
      setFilteredDoneTodos(filteredArr);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col">
      <Title countDoneTodos={doneTasksCount} />
      <div className="w-full flex flex-col items-center mt-1 mb-5 overflow-scroll">
        <TodoForm onAddTodos={addTodoHandler} />
        {todos.length >= 1 ? (
          <TodoList
            todoData={clickedDone ? filteredDoneTodos : todoList}
            onTaskDone={taskDoneHandler}
            onDeleteTodo={deleteTodoHandler}
            onUpdateTodo={updateTodoHandler}
          />
        ) : (
          <EmptyList />
        )}
      </div>
      <ButtonGroup
        onDeleteAllTodos={deleteAllTodosHandler}
        onFilterTodos={filterTodosHandler}
        onSortTodos={sortTodosHandler}
        countTasks={doneTasksCount}
        onFilterDoneTodosHandler={filterDoneTodosHandler}
        onClearQuery={clearQuery}
      />
    </main>
  );
}

export default App;
