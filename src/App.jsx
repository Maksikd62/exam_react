import React, { useEffect } from "react";
import Navbar from "./components/navbar/navbar"

import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./theming/lightTheme";
import darkTheme from "./theming/darkTheme";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const { theme } = useSelector((state) => state.themingReducer);
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;
 
  return (
    <ThemeProvider theme={currentTheme}>
      <Navbar/>
    </ThemeProvider>
  );
};

export default App;
