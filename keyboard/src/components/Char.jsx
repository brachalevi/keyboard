function Char({ item }) {
  return (
    <div
      className="charScreen"
      style={{
        color: item.color,
        fontFamily: item.fontFamily,
        fontSize: item.fontSize,
        display: "inline",
      }}
    >
      {item.char}
    </div>
  );
}
export default Char;
