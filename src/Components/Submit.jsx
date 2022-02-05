import { useRef, useState } from "react";
import useSubmit from "../Hooks/useSubmit";
export default function Submit(props) {
  const inputValue = useRef();
  const [alreadyPush, setalreadyPush] = useState(false);

  const { pushToScoreboard, secondsFormat } = useSubmit();

  function onClick(name, score) {
    pushToScoreboard(name, score);
    setalreadyPush(!alreadyPush);
  }

  return (
    <div
      className={
        props.isGameFinished
          ? "modalbox-modal-content _f-black centerxy "
          : "_hidden"
      }
      style={{ innerHeight: 250 }}
    >
      <p className="_alignCenter">
        Your final time is: {secondsFormat(props.score)}
      </p>
      <form>
        <fieldset className="_alignCenter">
          <div className="row _alignCenter">
            <div className="col m1-7 _alignCenter">
              <label className="_alignCenter " for="name">
                Enter nickname
              </label>
              <input
                ref={inputValue}
                className="_alignCenter"
                type="text"
                placeholder="Jorge"
                id="name"
              />
            </div>
          </div>
          <button
            type="button"
            className={
              alreadyPush
                ? "_disabled _noReaction _alignCenter _primary button"
                : "_alignCenter _primary button"
            }
            onClick={() => onClick(inputValue.current.value, props.score)}
          >
            Submit
          </button>
          <br />
          <div>
            {" "}
            <button className="_alignCenter _primary button ">Try again</button>
            <button className="_alignCenter _primary button _danger">
              Don't submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
