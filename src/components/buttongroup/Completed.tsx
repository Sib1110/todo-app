import React from "react";

interface Props {
  countTasks: number;
}

function Completed({ countTasks }: Props) {
  return <div>완료한 목록 {countTasks}</div>;
}

export default Completed;
