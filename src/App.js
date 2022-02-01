import "./App.css";
import Game from "./Components/Game";
import fetchCoords from "./Services/services";

function App() {
  return (
    <div className="App">
      <header>
        <h1> Test </h1>
      </header>
      <div>
        <Game />
      </div>
      <footer>
        <h1>Github</h1>
      </footer>
    </div>
  );
}

export default App;
