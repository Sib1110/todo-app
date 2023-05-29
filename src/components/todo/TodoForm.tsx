import React, { useRef } from "react";

interface Props {
  onAddTodos: (task: string) => void;
}

function TodoForm({ onAddTodos }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredInput = inputRef.current?.value;
    if (enteredInput) {
      onAddTodos(enteredInput);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="mt-5 text-5xl">
      <form onSubmit={submitHandler}>
        <label className="mr-3" htmlFor="userInput">
          <input
            className="border-2"
            type="text"
            id="userInput"
            placeholder=" ..."
            ref={inputRef}
          />
        </label>
        <button className="ml-3" type="submit">
          목록 작성
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
