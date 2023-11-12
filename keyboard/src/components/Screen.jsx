import React from "react";
import { useState } from "react";
import Char from "./Char";

function Screen({ text }) {
  console.log(text);
  return (
    <div>
      {text.map((item, key) => (
        <Char key={key} item={item} />
      ))}
    </div>
  );
}
export default Screen;
