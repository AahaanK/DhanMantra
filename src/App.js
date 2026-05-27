import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("Light Theme");

  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={() =>
        setTheme(theme === "Light Theme" ? "Dark Theme" : "Light Theme")
      }>
        Toggle
      </button>
    </div>
  );
}

export default App