import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [theme, setTheme] = useState("light");
  const [inputValue, setInputValue] = useState("");
  const [warning, setWarning] = useState("");

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {debugger
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }, [theme]);

  useEffect(() => {
    if (inputValue.length > 100) {
      setWarning("Text length has to be less than 100 symbols!");
    } else {
      setWarning("");
    }
  }, [inputValue]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
d
      <input
        id="text-area"
        type="text"
        placeholder="Enter your text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p id="warning">{warning}</p>
    </>
  );
}

export default App;
