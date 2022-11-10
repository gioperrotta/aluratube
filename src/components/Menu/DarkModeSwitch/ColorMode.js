import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {alert("you will need to set the mode first")},
  toggleMode: () => {}
});

export function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    mode === "dark" ? setMode("light") : setMode("dark")
  }

  return (
    <ColorModeContext.Provider value={{ mode: mode, toggleMode: toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
