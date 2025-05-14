import React, { useState } from 'react';

const CustomCalendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Helper function to get the number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Helper function to handle navigation
  const changeMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else if (direction === 'next') {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Create an array of days for the current month
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [];
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }

  // Add blank spaces to align the first day
  const blankSpaces = Array((firstDayOfMonth + 6) % 7).fill(null);
  const calendarDates = [...blankSpaces, ...dates];

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg border-2 border-custom-blue w-full">
      {/* Header with Navigation */}
      <div className="flex bg-white justify-between items-center mb-4">
        <button
            onClick={() => changeMonth('prev')}
            className="flex items-center px-4 py-2 bg-custom-blue text-white rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
        >
            <i className="fas fa-arrow-left mr-2"></i> Previous
        </button>
        <h3 className="text-center text-custom-blue font-semibold">
            {new Date(currentYear, currentMonth).toLocaleString('default', {
            month: 'long',
            })}{' '}
            {currentYear}
        </h3>
        <button
            onClick={() => changeMonth('next')}
            className="flex items-center px-4 py-2 bg-custom-blue text-white rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
        >
            Next <i className="fas fa-arrow-right ml-2"></i>
        </button>
    </div>


      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Days of the Week */}
        {days.map((day, index) => (
          <div key={index} className="text-center font-semibold text-custom-gray">
            {day}
          </div>
        ))}

        {/* Dates */}
        {calendarDates.map((date, index) => (
          <div
            key={index}
            className={`text-center p-2 rounded-md ${
              date === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear()
                ? 'bg-custom-blue text-white font-bold' // Highlight today's date
                : 'bg-white text-custom-gray hover:bg-custom-blue hover:text-white'
            }`}
          >
            {date || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCalendar;
