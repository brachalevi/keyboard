function Color(props) {
  return (
    <div id="color">
      <button onClick={() => (props.propertys.color = "green")}>green</button>
      <button onClick={() => (props.propertys.color = "pink")}>pink</button>
      <button onClick={() => (props.propertys.color = "black")}>black</button>
    </div>
  );
}
export default Color;
