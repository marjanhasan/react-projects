import { useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import { useEffect } from "react";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const htmlCls = document.querySelector("html").classList;
    htmlCls.remove("dark", "light");
    htmlCls.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
/* 
  ekhane first e provider diye wrap krsi
  then value gula ene define krsi
  then er vetore jekono vabe use kra jabe
*/
