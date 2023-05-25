import Clock from "./Clock";

function Title() {
  return (
    <div className="flex justify-center">
      <h1 className="text-9xl">오늘의 할 일</h1>
      <Clock />
    </div>
  );
}

export default Title;
