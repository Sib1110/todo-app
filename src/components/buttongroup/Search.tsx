import { useState } from "react";
import Searchbox from "./Searchbox";

interface Props {
  onFilterTodos: (text: string) => void;
}

function Search({ onFilterTodos }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const showSearchBoxHandler = () => {
    setIsOpened(!isOpened);
  };
  return (
    <>
      {isOpened && <Searchbox onFilterTodos={onFilterTodos} />}
      <button onClick={showSearchBoxHandler}>Search</button>
    </>
  );
}

export default Search;
