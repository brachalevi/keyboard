function Font({ propertys }) {
  return (
    <>
      <button onClick={() => (propertys.fontFamily = "david")}>david</button>
      <button onClick={() => (propertys.fontFamily = "ariel")}>ariel</button>
      <button onClick={() => (propertys.fontFamily = "monospace")}>
        monospace
      </button>
    </>
  );
}
export default Font;
