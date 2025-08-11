import TodoProvider from "./context/TodoProvider";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from "./context/TodoContext";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css"; // 전역 스타일 import
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import PostFetcher from "./components/PostFetcher";

function TodoList() {
  const { todos, handleToggle, handleDelete } = useTodoContext();

  return (
    <ul className="item_list" style={{ listStyle: "none", padding: 0 }}>
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

function AppContent() {
  const { darkMode } = useDarkMode();
  const { todos, setTodos } = useTodoContext();

  const handleClearAll = () => {
    localStorage.removeItem("my_todos");
    setTodos([]);
  };
  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="app-container">
        <ThemeToggle />
        <h1>📘 Todo 리스트</h1>
        <TodoForm />
        <TodoList />
        <p>총 {todos.length}개의 할 일이 있습니다.</p>
        <button onClick={handleClearAll}>🧹 전체 삭제</button>
        <h1>📰 외부 데이터 패칭 예제</h1>
        <PostList />
        <UserList />
        <PostFetcher />
      </div>
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default function RootApp() {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}
