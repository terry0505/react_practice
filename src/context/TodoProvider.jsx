import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }) {
  const LOCAL_KEY = "my_todos";

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [];
  });

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

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        handleAdd,
        handleDelete,
        handleToggle
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
