import React, { useRef } from "react";

interface Props {
  onAddTodos: (task: string) => void;
}

function TodoForm({ onAddTodos }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredInput = inputRef.current?.value;
    if (enteredInput) onAddTodos(enteredInput);
  };

  return (
    <div>
      <form className="flex text-6xl" onSubmit={submitHandler}>
        <label htmlFor="userInput">목록 작성</label>
        <input
          className="border-2"
          type="text"
          id="userInput"
          placeholder="..."
          ref={inputRef}
        />
        <button type="submit">작성</button>
      </form>
    </div>
  );
}

export default TodoForm;
