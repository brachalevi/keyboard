function Char({ item }) {
  return (
    <div
      onMouseDown={() => console.log("hi")}
      onMouseUp={() => console.log("bye")}
      className="charScreen"
      style={{
        color: item.color,
        fonprevtFamily: item.fontFamily,
        fontSize: item.fontSize,
        display: "inline",
      }}
    >
      {item.char}
    </div>
  );
}
export default Char;
