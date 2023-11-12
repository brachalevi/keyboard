import Letter from "./Letter.jsx";
function Keyboard(props) {
  return (
    <div id="keyboard">
      {props.language.map((item, key) => (
        <Letter
          text={props.text}
          onClick={props.onClick}
          key={key}
          letter={item}
        />
      ))}
    </div>
  );
}
export default Keyboard;
