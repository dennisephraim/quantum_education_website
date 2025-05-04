"use client"

import { ReactNode, createContext, useState, useEffect, useContext } from "react";

interface ThemeContextType {
  theme: string
  toggleTheme: () => void
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider ({children}: {children: ReactNode }) {
  const [theme, setTheme] = useState<string>("dark")
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemPreference;
  
    setTheme(initialTheme);
    const root = document.documentElement;
    root.classList.add(initialTheme);
  }, []);
  
  useEffect(() => {
    const root = document.documentElement;
    const oldTheme = theme === "light" ? "dark" : "light";

    root.classList.remove(oldTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};