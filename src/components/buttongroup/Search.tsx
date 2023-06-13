import { useState } from "react";
import Searchbox from "./Searchbox";

interface Props {
  onFilterTodos: (text: string) => void;
  onClearQuery: () => void;
}

function Search({ onFilterTodos, onClearQuery }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const showSearchBoxHandler = () => {
    setIsOpened(!isOpened);
  };
  return (
    <>
      {isOpened && (
        <Searchbox onFilterTodos={onFilterTodos} onClearQuery={onClearQuery} />
      )}
      <button onClick={showSearchBoxHandler}>검색</button>
    </>
  );
}

export default Search;
