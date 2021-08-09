import React from "react";
import "./FunctionButton.css";

interface IFunctionButton {
  title: String;
  onClick?: any;
  theme?: "fill" | "outline";
  disabled?: boolean;
}

const FunctionButton = ({
  onClick,
  theme,
  title,
  disabled,
}: IFunctionButton) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={
        theme === "fill"
          ? disabled
            ? { backgroundColor: "gray", cursor: "default", border: "none" }
            : { backgroundColor: "var(--theme)" }
          : {}
      }
      className={
        theme === "fill"
          ? "functionButton functionButton__fill"
          : "functionButton functionButton__outline"
      }
    >
      <h5 className="functionButton__text">{title}</h5>
    </button>
  );
};

export default FunctionButton;
