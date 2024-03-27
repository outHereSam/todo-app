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
  const [filter, setFilter] = useState("All");

  const addTodo = (todoText: string) => {
    setTodos((prevTodos) => [
      { id: todos.length + 1, todo: todoText, completed: false },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todoItem) => todoItem.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((todos) => todos.filter((todo) => todo.completed === false));
  };

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  // console.log(todos);
  // console.log(filter);

  return (
    <ThemeProvider>
      <Wrapper>
        <Header />
        <div className="container main-content">
          <TextBox addTodoItem={addTodo} />
          <TodoItems
            todoItems={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            clearCompleted={clearCompleted}
            filter={filter}
            changeFilter={changeFilter}
          />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
