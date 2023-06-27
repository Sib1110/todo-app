import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function EmptyList() {
  return (
    <div className="h-screen flex flex-col mt-20 gap-10 dark:text-slate-200">
      <span className="text-3xl md:text-5xl">
        오늘의 할 일 목록을 채워주세요!
      </span>
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </div>
  );
}

export default EmptyList;
