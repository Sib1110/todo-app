import React from "react";

function TodoForm() {
  return (
    <div>
      <form>
        <label htmlFor="userInput">목록 작성</label>
        <input type="text" id="userInput" />
      </form>
    </div>
  );
}

export default TodoForm;
