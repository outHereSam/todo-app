import "./Todo.css";
import CrossIcon from "../Icons/CrossIcon";
import CheckIcon from "../Icons/CheckIcon";

interface TodoItemType {
  id: number;
  todo: string;
  completed: boolean;
}

const Todo: React.FC<{
  todo: TodoItemType;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div key={todo.id} className="todo">
      <div className="left">
        <button onClick={() => toggleTodo(todo.id)}>
          <span className={`${todo.completed ? "completed" : "circle"}`}>
            {todo.completed ? <CheckIcon /> : ""}
          </span>
        </button>
        <p className={`${todo.completed ? "done" : ""}`}>{todo.todo}</p>
      </div>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default Todo;
