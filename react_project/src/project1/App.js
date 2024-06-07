import React from "react";
import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
