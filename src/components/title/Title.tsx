import Clock from "./Clock";

interface Props {
  countDoneTodos: number;
}

function Title({ countDoneTodos }: Props) {
  const changeTilteColor = (threshold: number, color: string) => {
    return countDoneTodos >= threshold
      ? "transition duration-500 " + color
      : "";
  };

  return (
    <header className="flex flex-col w-full mt-3 gap-2 items-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl dark:text-slate-200">
        <span className={changeTilteColor(2, "text-yellow-500")}>오</span>
        <span className={changeTilteColor(4, "text-green-500")}>늘</span>
        <span>의</span>
        <span> </span>
        <span className={changeTilteColor(6, "text-blue-500")}>할</span>
        <span> </span>
        <span className={changeTilteColor(8, "text-red-500")}>일</span>
      </h1>
      <Clock />
    </header>
  );
}

export default Title;
