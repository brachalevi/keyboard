function Delete({ setText }) {
  function delet() {
    setText((prev) => {
      const deleted = [...prev].slice(0, prev.length - 1);
      return deleted;
    });
  }
  return <button onClick={delet}>delete</button>;
}
export default Delete;
//
