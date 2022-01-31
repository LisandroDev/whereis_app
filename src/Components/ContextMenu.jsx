import "../App.css";
function ContextMenu(props) {
  const styles = {
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
    <div style={styles} className="context-menu">
      <button className="button-contextmenu" onClick={() => console.log("perro")}>Turtle</button>
      <button className="button-contextmenu">Bee Reading</button>
      <button className="button-contextmenu">Flying squirrel</button>
    </div>
  );
}

export default ContextMenu;
