import { useState } from "react";
import Screen from "./components/Screen.jsx";
import "./App.css";
import Keyboard from "./components/Keyboard.jsx";
import Language from "./components/Language.jsx";
import Size from "./components/Size.jsx";
import Color from "./components/Color.jsx";
import Font from "./components/Font.jsx";
import Clear from "./components/Clear.jsx";

const propertys = { color: "black", fontSize: 18, fontFamily: "ariel" };

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
      <Screen text={text} />
      <Keyboard
        propertys={propertys}
        onClick={setText}
        text={text}
        language={language}
      />
      <Language
        onLanguageChange={handleLanguage}
        languages={{ english, hebrew }}
      />
      <br></br>
      <br></br>
      <Size propertys={propertys} />
      <Color propertys={propertys} />
      <Font propertys={propertys} />
      <br></br>
      <Clear />
    </>
  );
}

export default App;
