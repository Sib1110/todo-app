import Button from "../button/Button";
import { useState, useEffect } from "react";

function Darkmode() {
  const [isDarkmodeOn, setIsDarkmodeOn] = useState(false);
  const switchDarkmode = () => {
    setIsDarkmodeOn((prev) => !prev);
  };

  // 기본 배경색은 index.css body
  useEffect(() => {
    const root = document.getElementById("root");
    if (isDarkmodeOn) {
      root?.classList.add("dark", "bg-[#0f172a]");
    } else {
      root?.classList.remove("dark", "bg-[#0f172a]");
    }
  }, [isDarkmodeOn]);

  return (
    <Button onClickHandler={switchDarkmode}>
      {isDarkmodeOn ? "밝은 테마" : "어두운 테마"}
    </Button>
  );
}

export default Darkmode;
