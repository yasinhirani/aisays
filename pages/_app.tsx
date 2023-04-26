import ThemeContext from "@/core/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useMemo, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<number>(0);

  const themeState = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={themeState}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
