function Letter(props) {
  function handleClick(letter) {
    props.onClick((prev, letter) => [...prev, { value: props.letter }]);
    console.log("text: ", props.text);
  }
  return (
    <>
      <button onClick={() => handleClick(props.letter)}>{props.letter}</button>
    </>
  );
}
export default Letter;
