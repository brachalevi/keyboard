function Size({ propertys }) {
  return (
    <>
      <button onClick={() => (propertys.fontSize = 16)}>16</button>
      <button onClick={() => (propertys.fontSize = 18)}>18</button>
      <button onClick={() => (propertys.fontSize = 20)}>20</button>
    </>
  );
}
export default Size;
