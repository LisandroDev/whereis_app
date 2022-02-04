import "../App.css";
function ContextMenu(props) {
  const DivStyle = {
    top: props.y - 75,
    left: props.x - 75,
    zIndex: isViewable(),
    opacity: isViewable(),
  };

  function isViewable() {
    if (props.isViewable) {
      return 1;
    }
    return -1;
  }

  return (
    <div style={DivStyle} className="context-menu">
      <button
        style={{ pointerEvents: props.characterFound.turtle ? "none" : "auto" }}
        className="button-contextmenu"
        value={"turtle"}
        onClick={(e) => props.handleOptionChoose(e.target.value)}
      >
        Turtle
      </button>
      <button
        style={{ pointerEvents: props.characterFound.bee ? "none" : "auto" }}
        className="button-contextmenu"
        value={"bee"}
        onClick={(e) => props.handleOptionChoose(e.target.value)}
      >
        Bee Reading
      </button>
      <button
        style={{
          pointerEvents: props.characterFound.squirrel ? "none" : "auto",
        }}
        className="button-contextmenu"
        value={"squirrel"}
        onClick={(e) => props.handleOptionChoose(e.target.value)}
      >
        Flying squirrel
      </button>
    </div>
  );
}

export default ContextMenu;
