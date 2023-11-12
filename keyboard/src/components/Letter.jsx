function Letter(props) {
  function handleClick(letter, propertys) {
    console.log(propertys);
    props.onClick((prev) => {
      console.log(propertys);
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
    console.log("text: ", props.text);
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
