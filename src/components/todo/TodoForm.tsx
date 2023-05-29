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
    <form className="w-full mt-5 text-center text-3xl" onSubmit={submitHandler}>
      <label className="mr-3" htmlFor="userInput">
        <input
          className="border-2 rounded-full w-1/3 px-2.5"
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
  );
}

export default TodoForm;
