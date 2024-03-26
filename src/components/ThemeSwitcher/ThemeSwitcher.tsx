import "./ThemeSwitcher.css";
import { useTheme } from "../../contexts/ThemeContext";
import SunIcon from "../Icons/SunIcon";
import MoonIcon from "../Icons/MoonIcon";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitcher;
