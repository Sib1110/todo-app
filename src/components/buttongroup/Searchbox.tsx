import React from "react";
interface Props {
  onFilterTodos: (text: string) => void;
}
function Searchbox({ onFilterTodos }: Props) {
  return (
    <div className="absolute bottom-20 w-full text-center">
      <input
        className="bg-slate-500 w-1/2"
        type="text"
        onChange={(e) => onFilterTodos(e.target.value)}
        autoFocus
      />
    </div>
  );
}

export default Searchbox;
