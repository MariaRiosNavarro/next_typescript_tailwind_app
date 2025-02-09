"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "winter" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// We provide an initial value to the context
const defaultContextValue: ThemeContextType = {
  theme: "winter",
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "winter" || savedTheme === "dark")) {
      return savedTheme;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "winter";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("data-theme", theme);
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === "winter" ? "dark" : "winter";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
