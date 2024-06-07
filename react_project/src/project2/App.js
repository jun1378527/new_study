import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Aside from "./component/Aside";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
