import Clock from "./Clock";

function Title() {
  return (
    <header className="flex justify-center mt-5">
      <h1 className="text-9xl">오늘의 할 일</h1>
      <Clock />
    </header>
  );
}

export default Title;
