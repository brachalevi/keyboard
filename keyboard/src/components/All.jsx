function All({ propertys, setText }) {
  function selectAll({ propertys }) {
    setText((prev) => {
      const selected = [...prev];
selected.map((value,index)=>{...value, propertys[propertys.length]})

    });
  }
  return (
    <>
      <button>all</button>
    </>
  );
}
export default All;
