function Size({ propertys }) {
  const sizes = [16, 24, 32];
  function handlelSize(size) {
    const newProprty = { ...propertys[propertys.length - 1] };
    newProprty.fontSize = size;
    propertys.push(newProprty);
    console.log("prop", propertys);
  }
  return (
    <>
      {sizes.map((size, key) => (
        <button key={key} onClick={() => handlelSize(size)}>
          {size}
        </button>
      ))}
    </>
  );
}
export default Size;
//
