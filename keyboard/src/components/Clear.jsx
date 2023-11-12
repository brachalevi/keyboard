function Clear({ setText }) {
  const clearText = () => setText([]);
  return <button onClick={clearText}>clear all</button>;
}
export default Clear;
//
