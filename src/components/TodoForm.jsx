import React from "react";

export default function TodoForm({ text, onAdd, onKeyDown, onChange }) {
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="할 일을 입력하세요."
      />
      <button onClick={onAdd}>추가</button>
    </>
  );
}
