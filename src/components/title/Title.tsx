import Clock from "./Clock";

function Title() {
  return (
    <header className="flex w-full mt-5 gap-4 justify-center">
      <h1 className="text-9xl">오늘의 할 일</h1>
      <Clock />
    </header>
  );
}

export default Title;
