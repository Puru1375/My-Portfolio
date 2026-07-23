import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

const VALID_THEMES = ["cloud", "terminal", "aws", "nebula"];
const VALID_MODES = ["dark", "light"];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return VALID_THEMES.includes(savedTheme) ? savedTheme : "cloud";
  });

  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("portfolio-mode");
    return VALID_MODES.includes(savedMode) ? savedMode : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("data-theme", theme);
    root.setAttribute("data-mode", mode);

    localStorage.setItem("portfolio-theme", theme);
    localStorage.setItem("portfolio-mode", mode);
  }, [theme, mode]);

  const toggleMode = () => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      mode,
      setMode,
      toggleMode,
      themes: VALID_THEMES,
    }),
    [theme, mode],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};