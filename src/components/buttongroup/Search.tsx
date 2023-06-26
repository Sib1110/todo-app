import { useState } from "react";
import Searchbox from "./Searchbox";
import Button from "../button/Button";

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
      <Button onClickHandler={showSearchBoxHandler}>검색</Button>
    </>
  );
}

export default Search;
