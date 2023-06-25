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
    <div className="w-full md:w-2/3 text-center mt-1 text-lg">
      <form onSubmit={submitHandler}>
        <label className="mr-3" htmlFor="userInput">
          <input
            className="border-2 rounded-full px-2 w-2/3 py-1 text-sm md:text-lg"
            type="text"
            id="userInput"
            placeholder=" ..."
            autoComplete="off"
            ref={inputRef}
          />
        </label>
        <button
          className="hover:border-b-2 border-slate-500 md:text-3xl"
          type="submit"
        >
          목록 작성
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
