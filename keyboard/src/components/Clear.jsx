function Clear({ setText }) {
  const clearText = () => {
    return setText([]);
  };
  return <button onClick={clearText}>clear all</button>;
}
export default Clear;
