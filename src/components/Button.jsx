import React from "react";

const Button = ({ variant, children }) => {
  return (
    <>
      {variant === "primary" && (
        <button
          className="bg-cyan-500 text-sm rounded-[24px] text-cyan-900 px-[24px] py-[8px] border-2 border-cyan-500 hover:scale-110 active:scale-100"
        >
          {" "}
          {children}{" "}
        </button>
      )}

      {variant === "primary-dark" && (
        <button
          className="bg-[#222831] text-sm rounded-[24px] text-cyan-500 px-[24px] py-[8px] border-2 border-[#222831] hover:scale-110 active:scale-100"
        >
          {" "}
          {children}{" "}
        </button>
      )}

      {variant === "secondary" && (
        <button
          className="px-[24px] py-[8px] text-sm text-cyan-500 border-2 rounded-[24px] border-cyan-500 hover:scale-110 active:scale-100"
        >
          {" "}
          {children}{" "}
        </button>
      )}
    </>
  );
};

export default Button;
