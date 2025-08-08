import TodoProvider from "./context/TodoProvider";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from "./context/TodoContext";

function TodoList() {
  const { todos, handleToggle, handleDelete } = useTodoContext();

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

function App() {
  const { todos, setTodos } = useTodoContext();

  const handleClearAll = () => {
    localStorage.removeItem("my_todos");
    setTodos([]);
  };
  return (
    <div style={{ padding: "30px" }}>
      <h1>📘 Todo 리스트</h1>
      <TodoForm />
      <TodoList />
      <p>총 {todos.length}개의 할 일이 있습니다.</p>
      <button onClick={handleClearAll}>🧹 전체 삭제</button>
    </div>
  );
}

export default function RootApp() {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}
