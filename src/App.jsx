import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    const trimmed = text.trim();
    if (trimmed === "") return;

    const newTodo = {
      id: Date.now(),
      content: trimmed,
      isDone: false
    };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>✅ Todo 리스트</h1>
      <div style={{ marginBottom: "20px" }}>
        <TodoForm
          text={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          onAdd={handleAdd}
        />
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onKeyDown={handleKeyDown}
          />
        ))}
      </ul>
    </div>
  );
}
