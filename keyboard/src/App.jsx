import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Keyboard from "./components/Keyboard.jsx";

function App() {
  const [text, setText] = useState([]);
  const english = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  const [language, setLanguage] = useState(english);

  return (
    <>
      <Keyboard onClick={setText} language={language} />
    </>
  );
}

export default App;
