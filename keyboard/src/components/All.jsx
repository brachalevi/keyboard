function All({ propertys, setText }) {
  function selectAll() {
    setText((prev) => {
      const selected = prev.map((value, index) => {
        return { char: value.char, ...propertys };
      });
      return selected;
    });
  }

  return (
    <>
      <button onClick={selectAll}>all</button>
    </>
  );
}

export default All;
