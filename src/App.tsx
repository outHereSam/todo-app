import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import TextBox from "./components/TextBox/TextBox";
import TodoItems from "./components/TodoItems/TodoItems";

interface TodoItemType {
  id: number;
  todo: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const addTodo = (todoText: string) => {
    setTodos((prevTodos) => [
      { id: todos.length + 1, todo: todoText, completed: false },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todoItem) => todoItem.id !== id));
  };

  console.log(todos);

  return (
    <ThemeProvider>
      <Wrapper>
        <Header />
        <div className="container main-content">
          <TextBox addTodoItem={addTodo} />
          <TodoItems todoItems={todos} deleteTodo={deleteTodo} />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
