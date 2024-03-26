import "./Header.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className={`header-${theme}`}>
      <div className="header-container">
        <h1 className="logo">Todo</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
