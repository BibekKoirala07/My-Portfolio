import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="p-2 px-5">
      {children}
    </button>
  );
};

export default Button;
