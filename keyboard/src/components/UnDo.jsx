function UnDo({ propertys }) {
  function unDo() {
    propertys.pop();
  }

  return <button onClick={unDo}>UnDO</button>;
}
export default UnDo;
