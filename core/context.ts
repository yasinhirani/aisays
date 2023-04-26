import { createContext } from "react";

const ThemeContext = createContext<IThemeContext>({
  theme: 0,
  setTheme: () => {},
});

export default ThemeContext;
