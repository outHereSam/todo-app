import CrossIcon from "../Icons/CrossIcon";

interface TodoItemType {
  id: number;
  todo: string;
  completed: boolean;
}

const Todo: React.FC<{
  todo: TodoItemType;
  deleteTodo: (id: number) => void;
}> = ({ todo, deleteTodo }) => {
  return (
    <div key={todo.id} className="todo">
      <div className="left">
        <span className="circle"></span>
        {todo.todo}
      </div>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default Todo;
