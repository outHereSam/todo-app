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
  clearCompleted: () => void;
  filter: string;
  changeFilter: (filter: string) => void;
}> = ({
  todoItems,
  deleteTodo,
  toggleTodo,
  clearCompleted,
  filter,
  changeFilter,
}) => {
  const { theme } = useTheme();

  const filters = ["All", "Active", "Completed"];

  return (
    <>
      <div className={`todoItems-${theme}`}>
        {todoItems.length > 0 &&
          filter === "All" &&
          todoItems.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        {filter === "Active" &&
          todoItems
            .filter((todo) => todo.completed !== true)
            .map((activeTodo) => (
              <Todo
                key={activeTodo.id}
                todo={activeTodo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            ))}
        {filter === "Completed" &&
          todoItems
            .filter((todo) => todo.completed)
            .map((completedTodo) => (
              <Todo
                key={completedTodo.id}
                todo={completedTodo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            ))}
        <div className={`stats ${theme}`}>
          <p>
            {todoItems.filter((todo) => todo.completed === false).length}{" "}
            {todoItems.filter((todo) => todo.completed === false).length > 1
              ? "items "
              : "item "}
            left
          </p>
          <button className="clear" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
      <div className={`options-${theme}`}>
        {filters.map((f) => (
          <button
            onClick={() => changeFilter(f)}
            className={`${f === filter ? "selected" : ""}`}
          >
            {f}
          </button>
        ))}
        {/* <button>Active</button>
        <button>Completed</button> */}
      </div>

      {/* <p className={`tip-${theme}`}>Drag and drop to reorder list</p> */}
    </>
  );
};

export default TodoItems;
