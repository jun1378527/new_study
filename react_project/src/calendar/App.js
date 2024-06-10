import { useState } from "react";
import MyCalendar from "./components/Calendar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar isOpen={sidebarOpen} />
        <div
          className={`calendar-wrapper ${sidebarOpen ? "sidebar-open" : ""}`}
        >
          <button className="hamburger-button" onClick={toggleSidebar}>
            &#9776;
          </button>
          <MyCalendar />
        </div>
      </div>
    </div>
  );
};

export default App;
