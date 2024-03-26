import { ReactNode, createContext, useContext, useState } from "react";

interface TodoItemType {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodoContextType {
  todos: TodoItemType[];
  addTodo: (todoItem: string) => void;
}

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
});

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const addTodo = (todoText: string) => {
    const newTodo = { id: todos.length + 1, todo: todoText, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
