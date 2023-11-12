import { useState } from "react";

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
    " ",
  ];

  const hebrew = [
    "ק",
    "ר",
    "א",
    "ט",
    "ו",
    "ן",
    "ם",
    "פ",
    "ש",
    "ד",
    "ג",
    "כ",
    "ע",
    "י",
    "ח",
    "ל",
    "ך",
    "ף",
    "ז",
    "ס",
    "ב",
    "ה",
    "נ",
    "מ",
    "צ",
    "ת",
    "ץ",
  ];
  const [language, setLanguage] = useState(english);

  return (
    <>
      <Keyboard onClick={setText} text={text} language={language} />
    </>
  );
}

export default App;
