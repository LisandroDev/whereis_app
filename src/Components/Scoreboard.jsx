import useFirestore from "../Services/services";
import { useEffect, useState } from "react";


export default function Scoreboard(props) {
  const [players, setPlayers] = useState(null);

  const { fetchScoreboard } = useFirestore();

  useEffect(() => {
    fetchScoreboard().then(function (value) {
      setPlayers(value);
    });
  }, [fetchScoreboard]);

  return (
    <div
      className={
        props.isOpen ? "modalbox-modal-content _f-black centerxy " : "_hidden"
      }
    >
      <span
        onClick={props.scoreboardToggle}
        className="-close"
        id="modalbox-close"
      >
        ✖
      </span>
      <button onClick={() => console.log(players)}>testestes </button>
      <table className="_width100 _noReaction">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {players === null ? (
            <tr></tr>
          ) : (
            <tr>
              <td>2</td>
              <td>6</td>
              <td>Fresh</td>
            </tr>
          )}
          <tr>
            <td>Apple</td>
            <td>6</td>
            <td>Fresh</td>
          </tr>
        </tbody>
      </table>{" "}
    </div>
  );
}
