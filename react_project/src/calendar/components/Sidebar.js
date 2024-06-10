import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "visible" : "hidden"}`}>
      <input type="text" placeholder="Search" className="search-input" />
      <div className="month-section">
        <div className="month">July</div>
        <div className="events">
          <div className="event">Doctor Appointment</div>
          <div className="event">German class</div>
          <div className="event">Meditation</div>
          <div className="event">Workout</div>
        </div>
      </div>
      <div className="month-section">
        <div className="month">August</div>
        <div className="events"></div>
      </div>
    </div>
  );
};

export default Sidebar;
