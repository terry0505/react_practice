import { useDarkMode } from "../context/DarkModeContext";

export default function TodoItem({ todo, onToggle, onDelete }) {
  const { darkMode } = useDarkMode();
  return (
    <li key={todo.id} style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onToggle(todo.id)}
      />
      <span
        className={`${darkMode ? "dark_txt" : "light_txt"} ${
          todo.isDone ? "done_txt" : ""
        }`}
        style={{
          marginLeft: "10px",
          textDecoration: todo.isDone ? "line-through" : "none",
          color: todo.isDone
            ? darkMode
              ? "#777"
              : "#999"
            : darkMode
            ? "#fff"
            : "#000"
        }}
      >
        {todo.content}
      </span>

      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "10px" }}>
        삭제
      </button>
    </li>
  );
}
