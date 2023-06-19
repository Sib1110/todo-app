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
    <div className="w-full text-center text-4xl my-2">
      <form onSubmit={submitHandler}>
        <label className="mr-3" htmlFor="userInput">
          <input
            className="border-2 rounded-full pl-5 w-1/3"
            type="text"
            id="userInput"
            placeholder=" ..."
            autoComplete="off"
            ref={inputRef}
          />
        </label>
        <button
          className="ml-3 hover:border-b-2 border-slate-500"
          type="submit"
        >
          목록 작성
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
