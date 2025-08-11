import { useDarkMode } from "../context/DarkModeContext";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️ 라이트 모드" : "🌙 다크 모드"}
    </button>
  );
}
