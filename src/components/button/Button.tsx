import React from "react";

interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  return (
    <div className="pt-1 basis-1/5 text-center border-b-2 border-solid border-[#d1d5db] md:border-0">
      {children}
    </div>
  );
}

export default Button;
