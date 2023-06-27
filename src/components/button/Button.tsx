import React from "react";

interface Props {
  children: React.ReactNode;
  onClickHandler?: () => void;
  bgColor?: string;
}

function Button({ children, onClickHandler, bgColor }: Props) {
  const btnClassName = `pt-1 basis-1/5 border-2 border-solid border-[#d1d5db] dark:border-slate-200 hover:border-sky-500 ${
    bgColor ?? "bg-white"
  } dark:bg-black py-1 px-5 rounded-full`;

  return (
    <button className={btnClassName} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
