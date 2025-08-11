import React from "react";
import { useTodoContext } from "../context/TodoContext";

export default function TodoForm() {
  const { text, setText, handleAdd } = useTodoContext();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const isDisabled = text.trim() === "";

  return (
    <div className="input_wrap">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요."
      />
      <button onClick={handleAdd} disabled={isDisabled}>
        추가
      </button>
    </div>
  );
}
