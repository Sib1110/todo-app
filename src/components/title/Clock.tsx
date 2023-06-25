import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dateInterval = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(dateInterval);
  }, []);

  return (
    <div className=" text-slate-500 text-sm sm:text-m md:text-2xl">
      <span>{date.toLocaleDateString("ko-kr")}</span>
      <span>{date.toLocaleTimeString("ko-kr", { timeStyle: "short" })}</span>
    </div>
  );
}

export default Clock;
