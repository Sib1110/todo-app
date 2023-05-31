import React from "react";
import Search from "./Search";
import Sort from "./Sort";
import Completed from "./Completed";
import Darkmode from "./Darkmode";
import ResetButton from "./ResetButton";

interface Props {
  onDeleteAllTodos: () => void;
  onFilterTodos: (text: string) => void;
}

function ButtonGroup({ onDeleteAllTodos, onFilterTodos }: Props) {
  return (
    <div className="w-full flex justify-around fixed bottom-0 bg-zinc-900 text-white text-xl">
      <Search onFilterTodos={onFilterTodos} />
      <Sort />
      <Completed />
      <Darkmode />
      <ResetButton onDeleteAllTodos={onDeleteAllTodos} />
    </div>
  );
}

export default ButtonGroup;
