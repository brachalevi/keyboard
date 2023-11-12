function Letter(props) {
  function handleClick(letter) {
    props.onClick(text.push(letter));
  }
  return (
    <>
      <button>{props.letter}</button>
    </>
  );
}
export default Letter;
