function Color({ propertys }) {
  const colors = ["black", "green", "pink", "blue", "yellow", "orange"];
  function handelClick(color) {
    const newProprty = { ...propertys[propertys.length - 1] };
    newProprty.color = color;
    propertys.push(newProprty);
  }
  return (
    <div id="color">
      {colors.map((color, key) => (
        <button key={key} onClick={() => handelClick(color)}>
          {color}
        </button>
      ))}
    </div>
  );
}
export default Color;
