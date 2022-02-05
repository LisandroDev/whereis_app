import { useEffect, useState } from "react";
import whereisimage from "../find_characters_image.jpg";
import Cursor from "./Cursor";
import ContextMenu from "./ContextMenu";
import fetchCoords from "../Services/services";
import { toast } from "react-toastify";
import Button from "./StartButton";
import useGetScore from "../Hooks/useGetScore";
import useFirestore from "../Services/services";

function Game(props) {
  const [mouseCoords, setmouseCoords] = useState({ x: 0, y: 0 });
  const [contextMenuCoords, setcontextMenuCoords] = useState({ x: 0, y: 0 });
  const [coordsFixedRatio, setcoordsFixedRatio] = useState({ x: 0, y: 0 });
  const [isMenuViewable, setisMenuViewable] = useState(false);
  const [isGameStarted, setisGameStarted] = useState(false);
  const [characterFound, setcharacterFound] = useState({
    turtle: false,
    bee: false,
    squirrel: false,
  });

  const { fetchCoords } = useFirestore();
  const { getScore, recordTimestamp } = useGetScore();

  const resImage = { x: 3000, y: 1958 };

  useEffect(() => {
    if (Object.values(characterFound).every(Boolean)) {
      getScore();
      toast.success("YOU WON!");
    }
  }, [characterFound, getScore]);

  function handleStart() {
    recordTimestamp();
    setisGameStarted(!isGameStarted);
    props.startTimer();
  }

  function onMouseMove(e) {
    setmouseCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  function coordsClicked(e) {
    return {
      x: Math.round(
        (resImage.x * e.nativeEvent.offsetX) / e.nativeEvent.target.clientWidth
      ),
      y: Math.round(
        (resImage.y * e.nativeEvent.offsetY) / e.nativeEvent.target.clientHeight
      ),
    };
  }

  function onClickOpenMenu(e) {
    const coords = coordsClicked(e);
    setcoordsFixedRatio(coords);
    setisMenuViewable(!isMenuViewable);
    setcontextMenuCoords({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  }

  function checkForCharacter(dbCoords) {
    const coords = coordsFixedRatio;
    if (
      coords.x < dbCoords.maxX &&
      coords.x > dbCoords.minX &&
      coords.y < dbCoords.maxY &&
      coords.y > dbCoords.minY
    ) {
      toast.success(`You found ${dbCoords.id}`);
      return true;
    }
    toast.error(`Nothing there! Try Again`);
    return false;
  }

  function handleCharacterFound(id) {
    let copiedObject = JSON.parse(JSON.stringify(characterFound));
    copiedObject[id] = true;
    setcharacterFound(copiedObject);
  }

  async function handleOptionChoose(characterId) {
    const dbCoords = await fetchCoords(characterId);
    setisMenuViewable(!isMenuViewable);
    if (checkForCharacter(dbCoords)) {
      handleCharacterFound(characterId);
    }
  }

  return (
    <div className="game-wrapper _nightblue">
      <img
        src={whereisimage}
        alt="where is img"
        className={
          isGameStarted ? "game-image" : "game_image _noReaction _blur"
        }
        draggable="false"
        onClick={(e) => onClickOpenMenu(e)}
        onMouseMove={(e) => onMouseMove(e)}
      />
      <Button handleStart={handleStart} />
      <Cursor x={mouseCoords.x} y={mouseCoords.y} />
      <ContextMenu
        x={contextMenuCoords.x}
        y={contextMenuCoords.y}
        handleOptionChoose={handleOptionChoose}
        characterFound={characterFound}
        isViewable={isMenuViewable}
      />
    </div>
  );
}

export default Game;
