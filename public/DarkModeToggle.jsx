// src/components/DarkModeToggle.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../src/context/ThemeContext";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
}
