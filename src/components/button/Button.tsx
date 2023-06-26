import React from "react";

interface Props {
  children: React.ReactNode;
  onClickHandler?: () => void;
}

function Button({ children, onClickHandler }: Props) {
  return (
    <button
      className="pt-1 basis-1/5 border-2 border-solid border-[#d1d5db] hover:border-sky-500 bg-white py-1 px-5 rounded-full"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
