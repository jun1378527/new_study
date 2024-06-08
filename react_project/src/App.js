import Greeting from "./Greeting";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="John" message="Welcome to React!" />
        <Greeting name="Jane" message="Glad to see you here!" />
      </header>
    </div>
  );
}

export default App;
