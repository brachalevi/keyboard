import Letter from "./Letter.jsx";
function Keyboard(props) {
  console.log("props: ", props.language);
  return (
    <div id="keyboard">
      {props.language.map((item, key) => (
        <Letter onClick={props.onClick} key={key} letter={item} />
      ))}
    </div>
  );
}
export default Keyboard;
