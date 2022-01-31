import "../App.css";

function Cursor(props) {
  const position = {
    top: props.y - 6,
    left: props.x - 10,
  };

  return <div className="cursor-game" style={position}></div>;
}

export default Cursor;
