import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function EmptyList() {
  return (
    <div className="flex flex-col mt-20 gap-10">
      <span className="text-5xl">오늘의 할 일 목록을 채워주세요!</span>
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </div>
  );
}

export default EmptyList;
