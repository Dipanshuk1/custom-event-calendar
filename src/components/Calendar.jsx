import { useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const dates = [];

  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }

  return (
    <div className="bg-white shadow rounded-lg p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="text-blue-500 hover:underline">
          Prev
        </button>
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
          })}{" "}
          {year}
        </h2>
        <button onClick={nextMonth} className="text-blue-500 hover:underline">
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center font-medium text-gray-700">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
        {dates.map((date, index) => {
  const isToday =
    date === new Date().getDate() &&
    month === new Date().getMonth() &&
    year === new Date().getFullYear();

  return (
    <div
      key={index}
      className={`h-12 flex items-center justify-center border rounded ${
        isToday ? "bg-blue-500 text-white font-bold" : ""
      }`}
    >
      {date ? date : ""}
    </div>
  );
})}
      </div>
    </div>
  );
}

export default Calendar;
