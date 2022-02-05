
export default function Header(props) {

  return (
    <header>
      <div className="row _alignCenter">
        <div className="col m1-5 _noPadding">
          <h1>Where's</h1>
        </div>
        <div className="col m1-5 "></div>
        <div className="col m1-5 ">
        <p className={props.isRunning ? "" : "_hidden"}> {props.minutes} : {props.seconds}</p>
        </div>
        <div className="col m1-5 "></div>
        <div className="col m1-5 ">
          <button onClick={props.scoreboardToggle} className="button _f-white">Scoreboard</button>
        </div>
      </div>
    </header>
  );
}
