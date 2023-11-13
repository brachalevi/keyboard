function UnDo({ propertys }) {
  function unDo() {
    console.log("now2", propertys);
    if (propertys.length > 1) {
      propertys.pop();
    }
  }

  return <button onClick={unDo}>UnDO</button>;
}
export default UnDo;
