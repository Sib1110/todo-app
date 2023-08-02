import { Todo } from "./types";
import { v4 as uuidv4 } from "uuid";

export const DUMMY_ARRAY: Todo[] = [
  {
    id: uuidv4(),
    task: "초기화 버튼을 누르고 시작하세요.",
    done: false,
    isDummy: true,
  },
  {
    id: uuidv4(),
    task: "목록 작성에 오늘의 할 일을 입력해주세요.",
    done: false,
    isDummy: true,
  },
  {
    id: uuidv4(),
    task: "작성한 목록을 클릭하시면 수정이 가능합니다.",
    done: false,
    isDummy: true,
  },
  { id: uuidv4(), task: "오늘의 할 일", done: false, isDummy: true },
];
