function All({ propertys, setText }) {
  function selectAll() {
    setText((prev) => {
      const newProprty = { ...propertys[propertys.length - 1] };
      const selected = prev.map((value, index) => {
        return { char: value.char, ...newProprty };
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
