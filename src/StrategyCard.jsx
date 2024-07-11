import React, { useImperativeHandle, useState, forwardRef } from 'react';

const StrategyCard = forwardRef(({ dateArray, dateValues }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const defaultDateStrategy = () => {
    if (dateValues?.hasOwnProperty(dateArray[0])) {
      return dateValues[dateArray[0]];
    } else {
      return [];
    }
  }

  const [dateStrategies, setDateStrategies] = useState(defaultDateStrategy());

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsOpen(false);

    if (dateValues?.hasOwnProperty(date)) {
      setDateStrategies(dateValues[date]);
    } else {
      setDateStrategies([]);
    }
  };

  const resetDateStrategy = () => {
    if (dateValues?.hasOwnProperty(selectedDate)) {
      setDateStrategies(dateValues[selectedDate]);
    } else {
      setDateStrategies([]);
    }
  }

  useImperativeHandle(ref, () => ({
    resetDateStrategy,
  }));

  return (
    <>
      <div className="app-container">
        <div className="dropdown-container">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedDate}
            <span className="dropdown-arrow">
              {isOpen ? '▲' : '▼'}
            </span>
          </div>
          {isOpen && (
            <div className="dropdown-list">
              {dateArray.map((date, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleDateClick(date)}
                >
                  {date}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {dateStrategies.length > 0 ? <div className='dropdown-container'>
        {dateStrategies.map((dateStrategy, index) => (
          <div key={index} className="list-item">
            {dateStrategy}
          </div>
        ))}
      </div> : <div>No strategy available for {selectedDate}</div>}

    </>
  );
});
export default StrategyCard;