interface Props {
  todoData: { id: string; task: string; done: boolean }[];
}

function TodoList({ todoData }: Props) {
  return (
    <div className="flex">
      <ul>
        {todoData.map((todo) => {
          return <li key={todo.id}>{todo.task}</li>;
        })}
      </ul>
      <ul>
        <li>done</li>
      </ul>
    </div>
  );
}

export default TodoList;
