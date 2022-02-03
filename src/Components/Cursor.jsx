import "../App.css";
import { useRef } from "react";

function Cursor(props) {
  const cursorElement = useRef();

  const position = {
    top: props.y - cursorElement.current.offsetHeight / 2,
    left: props.x - cursorElement.current.offsetWidth / 2,
  };

  return (
    <div
      ref={cursorElement}
      id="cursor"
      className="cursor-game"
      style={position}
    ></div>
  );
}

export default Cursor;
