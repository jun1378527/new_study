import { useState } from "react";
import "./App.css";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const countNum = value => {
    const newCount = count + value;
    let newHistory = [...history, count];

    if (newHistory.length > 5) {
      newHistory = newHistory.slice(1);
    }

    setHistory(newHistory);
    setCount(newCount);

    console.log("현재 카운트:", newCount);
    console.log("히스토리:", newHistory);
  };

  const countReset = value => {
    let newHistory = [...history, count];

    if (newHistory.length > 5) {
      newHistory = newHistory.slice(1);
    }

    setHistory(newHistory);
    setCount(value);

    console.log("리셋함");
    console.log("히스토리:", newHistory);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const lastCount = newHistory.pop();
      setCount(lastCount);
      setHistory(newHistory);

      console.log("Undo");
      console.log("지난 카운트 값", lastCount);
      console.log("히스토리:", newHistory);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>간단 계산기</h1>
      </header>
      <div className="App-body">
        <section className="viewer-section">
          <Viewer count={count} history={history} />
        </section>
        <section className="controller-section">
          <Controller
            countNum={countNum}
            countReset={countReset}
            handleUndo={handleUndo}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
