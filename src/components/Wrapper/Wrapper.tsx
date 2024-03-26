import { ReactNode } from "react";
import "./Wrapper.css";
import { useTheme } from "../../contexts/ThemeContext";

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  return <div className={`app ${theme}`}>{children}</div>;
};

export default Wrapper;
