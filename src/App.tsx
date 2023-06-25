import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Title from "./components/title/Title";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { Todo } from "./todomodel";
import { DUMMY_ARRAY } from "./dummy-todos";

import ButtonGroup from "./components/buttongroup/ButtonGroup";
import EmptyList from "./components/todo/EmptyList";

function App() {
  const [todos, setTodos] = useState<Todo[]>(DUMMY_ARRAY);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(false);
  const [clickedDone, setClickedDone] = useState(false);
  const [filteredDoneTodos, setFilteredDoneTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
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

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const updateTodoHandler = (id: string, task: string) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodo);
  };

  const deleteAllTodosHandler = () => {
    setTodos([]);
  };

  const sortTodosHandler = () => {
    const doneTasks = todos.filter((todo) => todo.done === true);
    const notDoneTasks = todos.filter((todo) => todo.done === false);
    setSort(!sort);
    if (sort === true) {
      setTodos([...doneTasks, ...notDoneTasks]);
    } else {
      setTodos([...notDoneTasks, ...doneTasks]);
    }
  };

  const filterTodosHandler = (text: string) => {
    setQuery(text);
  };

  const todoList =
    query === ""
      ? todos
      : todos.filter((todo) => todo.task.toLowerCase().includes(query));

  const clearQuery = () => setQuery("");

  const doneTasksCount = todos.filter((todo) => todo.done === true).length;

  const filterDoneTodosHandler = () => {
    setClickedDone(!clickedDone);
    const filteredArr = todos.filter((todo) => todo.done === true);
    setFilteredDoneTodos(filteredArr);
    if (clickedDone === true) {
      setFilteredDoneTodos([]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-white via-[#ECF8F9] to-white">
      <Title countDoneTodos={doneTasksCount} />
      <main className="w-full flex flex-col items-center mt-1  ">
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
      </main>
      <ButtonGroup
        onDeleteAllTodos={deleteAllTodosHandler}
        onFilterTodos={filterTodosHandler}
        onSortTodos={sortTodosHandler}
        countTasks={doneTasksCount}
        onFilterDoneTodosHandler={filterDoneTodosHandler}
        onClearQuery={clearQuery}
      />
    </div>
  );
}

export default App;
