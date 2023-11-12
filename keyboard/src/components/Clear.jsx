function Clear(props) {
  return <button onClick={() => (props.text = [])}>clear all</button>;
}
export default Clear;
