function Color({ propertys }) {
  const colors = ["black", "green", "pink", "blue", "yellow", "orange"];
  return (
    <div id="color">
      {colors.map((color, key) => (
        <button key={key} onClick={() => (propertys.color = color)}>
          {color}
        </button>
      ))}
    </div>
  );
}
export default Color;
