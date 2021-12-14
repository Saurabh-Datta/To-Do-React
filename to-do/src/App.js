import './App.css';
import Header from "./Header";
import Input from "./Input";
import SwitchButton from './ThemeButton';
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`App bg ${darkMode ? "bg-dark" : "bg-light"}`} style={{height:"98vh"}}>
      <Header />
      <SwitchButton />
      <Input />
    </div>
  );
}

export default App;
