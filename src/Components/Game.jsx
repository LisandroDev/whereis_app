import { useState } from "react";
import whereisimage from "../find_characters_image.jpg";
import Cursor from "./Cursor";
import useClick from "../Hooks/useClick";
import ContextMenu from "./ContextMenu";

function Game() {
  const [mouseCoords, setmouseCoords] = useState({ x: 0, y: 0 });
  const [isMenuViewable, setisMenuViewable] = useState(false);
  const [contextMenuCoords, setcontextMenuCoords] = useState({ x: 0, y: 0 });
  const resDefault = { x: 3000, y: 1958 };
  const [characterFound, setcharacterFound] = useState({
    turtle: false,
    fish: false,
    squirrel: false,
  });

  function onMouseMove(e) {
    setmouseCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  function characterSet(char) {
    let currentState = characterFound.slice();
    currentState[char] = true;
    setcharacterFound(currentState);
  }

  function coordsClicked(e) {
    return {
      x: Math.round(
        (resDefault.x * e.nativeEvent.offsetX) /
          e.nativeEvent.target.clientWidth
      ),
      y: Math.round(
        (resDefault.y * e.nativeEvent.offsetY) /
          e.nativeEvent.target.clientHeight
      ),
    };
  }

  function onMouseClick(e) {
    let coords = coordsClicked(e);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useClick(coords.x, coords.y);
    setisMenuViewable(!isMenuViewable);
    setcontextMenuCoords({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  }


  return (
    <div className="game-wrapper">
      <img
        src={whereisimage}
        alt="where is img"
        className="game-image"
        draggable="false"
        onClick={(e) => onMouseClick(e)}
        onMouseMove={(e) => onMouseMove(e)}
      />
      <Cursor x={mouseCoords.x} y={mouseCoords.y} />
      <ContextMenu
        x={contextMenuCoords.x}
        y={contextMenuCoords.y}
        characterSet={characterSet}
        isViewable={isMenuViewable}
      />
    </div>
  );
}

export default Game;
