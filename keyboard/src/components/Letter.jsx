function Letter(props) {
  function handleClick(letter, propertys) {
    props.onClick((prev) => {
      return [
        ...prev,
        {
          fontFamily: propertys.fontFamily,
          fontSize: propertys.fontSize,
          color: propertys.color,
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
