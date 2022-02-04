import "./App.css";
import Game from "./Components/Game";
import Notification from "./Components/Notification.jsx";

function App() {
  return (
    <div className="App _nightblue _f-cream">
      <Notification  />
      <header>
        <h1> Test </h1>
      </header>
      <main>
        <Game />
      </main>
      <footer className="_nightblue">
        <h1>Github</h1>
      </footer>
    </div>
  );
}

export default App;
