"use client";

import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

const STORAGE_KEY = "pelana7-theme";

function readThemeFromDocument(): ThemeMode {
  if (typeof document === "undefined") {
    return "dark";
  }

  const current = document.documentElement.getAttribute("data-theme");
  return current === "light" || current === "dark" ? current : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(readThemeFromDocument);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-button"
      aria-label="Toggle dark mode"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 2.8v2.2M12 19v2.2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2.8 12H5M19 12h2.2M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path d="M20.2 14.8A8.8 8.8 0 1 1 9.2 3.8a7.4 7.4 0 1 0 11 11z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
