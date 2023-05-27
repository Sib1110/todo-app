import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dateInterval = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(dateInterval);
  }, []);

  return (
    <div>
      {date.toLocaleDateString("ko-kr")}
      {date.toLocaleTimeString("ko-kr", { timeStyle: "short" })}
    </div>
  );
}

export default Clock;
