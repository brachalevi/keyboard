import { useState } from "react";

import "./App.css";
import Keyboard from "./components/Keyboard.jsx";
import Language from "./components/Language.jsx";

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
    " ",
  ];

  const [language, setLanguage] = useState(english);
  function handleLanguage(selectedLanguage) {
    setLanguage(selectedLanguage);
  }

  return (
    <>
      <Keyboard onClick={setText} text={text} language={language} />
      <Language
        onLanguageChange={handleLanguage}
        languages={{ english, hebrew }}
      />
    </>
  );
}

export default App;
