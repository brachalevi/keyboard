function Letter(props) {
  function handleClick(letter, propertys) {
    props.setText((prev) => {
      return [
        ...prev,
        {
          fontFamily: propertys[propertys.length - 1].fontFamily,
          fontSize: propertys[propertys.length - 1].fontSize,
          color: propertys[propertys.length - 1].color,
          char: letter,
        },
      ];
    });
  }
  return (
    <>
      <button onClick={() => handleClick(props.letter, props.propertys)}>
        {props.letter}
      </button>
    </>
  );
}
export default Letter;
//
