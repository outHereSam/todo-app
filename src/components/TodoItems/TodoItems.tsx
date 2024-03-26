import { useTheme } from "../../contexts/ThemeContext";
import Todo from "../Todo/Todo";

import "./TodoItems.css";

interface TodoItemType {
  id: number;
  todo: string;
  completed: boolean;
}

const TodoItems: React.FC<{
  todoItems: TodoItemType[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}> = ({ todoItems, deleteTodo, toggleTodo }) => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`todoItems-${theme}`}>
        {todoItems.length > 0 ? (
          todoItems.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))
        ) : (
          <div></div>
        )}
        <div className="stats">
          <p>
            {todoItems.filter((todo) => todo.completed === false).length}{" "}
            {todoItems.filter((todo) => todo.completed === false).length > 1
              ? "items "
              : "item "}
            left
          </p>
          <button className="clear">Clear Completed</button>
        </div>
      </div>
      <div className={`options-${theme}`}>
        <button className="selected">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <p className={`tip-${theme}`}>Drag and drop to reorder list</p>
    </>
  );
};

export default TodoItems;