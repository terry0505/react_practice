export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li key={todo.id} style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{
          marginLeft: "10px",
          textDecoration: todo.isDone ? "line-through" : "none",
          color: todo.isDone ? "#999" : "#000"
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
