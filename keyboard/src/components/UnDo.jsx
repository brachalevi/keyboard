function UnDo({ propertys }) {
  function unDo() {
    if (propertys.length > 1) {
      propertys.pop();
    }
  }

  return <button onClick={unDo}>UnDO</button>;
}
export default UnDo;
