import { useState } from "react";
import "./App.css";
import InputGreeting from "./InputGreeting";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <InputGreeting
          name={name}
          setName={setName}
          greeting={greeting}
          setGreeting={setGreeting}
        />
      </header>
    </div>
  );
}

export default App;
