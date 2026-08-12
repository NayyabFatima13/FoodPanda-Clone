import {
  createContext,
  useContext,
  useState
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");


  const toggleTheme = () => {

    setTheme((previousTheme) => {

      if (previousTheme === "light") {
        return "dark";
      }

      return "light";

    });

  };


  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );

}


export function useTheme() {

  return useContext(ThemeContext);

}