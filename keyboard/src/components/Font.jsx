function Font({ propertys }) {
  const fonts = ["ariel", "sans-serif", "monospace"];
  function handleFont(font) {
    const newProprty = { ...propertys[propertys.length - 1] };
    newProprty.fontFamily = font;
    propertys.push(newProprty);
  }

  return (
    <section>
      {fonts.map((font, key) => (
        <button key={key} onClick={() => handleFont(font)}>
          {font}
        </button>
      ))}
    </section>
  );
}

export default Font;

//
