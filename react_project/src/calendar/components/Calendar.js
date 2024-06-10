import { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Doctor Appointment",
      start: new Date(2022, 7, 1),
      end: new Date(2022, 7, 1),
      allDay: true,
    },
    {
      title: "Workout",
      start: new Date(2022, 7, 1),
      end: new Date(2022, 7, 1),
      allDay: true,
    },
  ]);

  const [date, setDate] = useState(new Date());
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  const handleSelectMonth = month => {
    const newDate = new Date(date.getFullYear(), month, 1);
    setDate(newDate);
    setIsMonthDropdownOpen(false);
  };

  const handleSelectYear = year => {
    const newDate = new Date(year, date.getMonth(), 1);
    setDate(newDate);
    setIsYearDropdownOpen(false);
  };

  const months = moment.months();
  const years = [];
  for (let i = 2020; i <= 2030; i++) {
    years.push(i);
  }

  return (
    <div className="calendar-container">
      <div className="custom-toolbar">
        <div
          className="dropdown"
          onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
        >
          {months[date.getMonth()]}
          {isMonthDropdownOpen && (
            <div className="dropdown-content">
              {months.map((month, index) => (
                <div key={index} onClick={() => handleSelectMonth(index)}>
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className="dropdown"
          onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
        >
          {date.getFullYear()}
          {isYearDropdownOpen && (
            <div className="dropdown-content">
              {years.map(year => (
                <div key={year} onClick={() => handleSelectYear(year)}>
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        date={date}
        onNavigate={newDate => setDate(newDate)}
        toolbar
        views={["month", "week", "day"]}
      />
    </div>
  );
};

export default MyCalendar;
