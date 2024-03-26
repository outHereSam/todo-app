import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <ThemeProvider>
      <Wrapper>
        <Header />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
