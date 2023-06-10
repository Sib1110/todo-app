import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Title from "./components/title/Title";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { Todo } from "./todomodel";

import ButtonGroup from "./components/buttongroup/ButtonGroup";

const DUMMY_ARRAY: Todo[] = [
  {
    id: uuidv4(),
    task: "초기화 버튼을 누르고 시작하세요.",
    done: false,
    isDummy: true,
  },
  {
    id: uuidv4(),
    task: "목록 작성에 오늘의 할 일을 입력해주세요.",
    done: false,
    isDummy: true,
  },
  {
    id: uuidv4(),
    task: "작성한 목록을 클릭하시면 수정이 가능합니다.",
    done: false,
    isDummy: true,
  },
  { id: uuidv4(), task: "오늘의 할 일", done: false, isDummy: true },
];

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

  const todoList = todos.filter((todo) => {
    if (query === "") {
      return todos;
    } else {
      return todo.task.toLowerCase().includes(query);
    }
  });

  const filterDoneTodosHandler = () => {
    setClickedDone(!clickedDone);
    const filteredArr = todos.filter((todo) => todo.done === true);
    setFilteredDoneTodos(filteredArr);
    if (clickedDone === true) {
      setFilteredDoneTodos([]);
    }
  };

  return (
    <div className="flex flex-col items-center text-3x">
      <Title />
      <TodoForm onAddTodos={addTodoHandler} />
      <TodoList
        todoData={clickedDone ? filteredDoneTodos : todoList}
        onTaskDone={taskDoneHandler}
        onDeleteTodo={deleteTodoHandler}
        onUpdateTodo={updateTodoHandler}
      />
      <ButtonGroup
        onDeleteAllTodos={deleteAllTodosHandler}
        onFilterTodos={filterTodosHandler}
        onSortTodos={sortTodosHandler}
        countTasks={todos.filter((todo) => todo.done === true).length}
        onFilterDoneTodosHandler={filterDoneTodosHandler}
      />
    </div>
  );
}

export default App;
