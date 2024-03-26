import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./TextBox.css";

const TextBox: React.FC<{ addTodoItem: (item: string) => void }> = ({
  addTodoItem,
}) => {
  const [todo, setTodo] = useState("");
  const { theme } = useTheme();

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      addTodoItem(todo);
      setTodo("");
    }
  };

  return (
    <input
      className={`textbox-${theme}`}
      type="text"
      placeholder="Create a new todo..."
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
};

export default TextBox;
