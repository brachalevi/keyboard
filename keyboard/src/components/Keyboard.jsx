import Letter from "./Letter.jsx";
import Delete from "./Delete.jsx";
function Keyboard(props) {
  return (
    <div id="keyboard">
      {props.language.map((item, key) => (
        <Letter
          text={props.text}
          setText={props.setText}
          key={key}
          letter={item}
          propertys={props.propertys}
        />
      ))}
      <Delete setText={props.setText} />
    </div>
  );
}
export default Keyboard;
//
