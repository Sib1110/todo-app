import React from "react";

function TodoForm() {
  return (
    <div>
      <form className="container mx-auto text-6xl">
        <label htmlFor="userInput">목록 작성</label>
        <input className="border-2" type="text" id="userInput" />
      </form>
    </div>
  );
}

export default TodoForm;
