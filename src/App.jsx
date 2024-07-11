import { useRef, useState, useEffect } from 'react'
import './App.css'
import StrategyCard from './StrategyCard';

function App() {
  const dateArray = ['24-Apr-2024', '02-May-2024', '09-May-2024', '31-May-2024', '21-Jun-2024'];

  const strategyArray = [
    {
      'View': 'Bullish',
      'Value': {
        '24-Apr-2024': ['Bull Call Spread', 'Bull Put Spread', 'Bull Put Spread', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull Call Spread', 'Strategy1', 'Strategy1', 'Spread-Strategy', 'Bull Call Spread'],
        '02-May-2024': ['Bull Call Spread', 'Bull Call Spread', 'Bull Put Spread', 'Long Call', 'Long Call', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull Call Spread', 'Strategy2', 'Strategy1', 'Strategy2', 'Bull Call Spread'],
        '09-May-2024': ['Strategy Put', 'Strategy Call', 'Strategy Call', 'Strategy Call', 'Strategy Put'],
      }
    },
    {
      'View': 'Bearish',
      'Value': {
        '24-Apr-2024': ['Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Long Put', 'LongPut', 'Long Put', 'Bear Call Spread',],
        '31-May-2024': ['Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
        '21-Jun-2024': ['Strategy3', 'Strategy3', 'Bear Put Spread', 'Strategy3', 'Long Put', 'Long Put'],
      }
    },
    {
      'View': 'RangeBound',
      'Value': {
        '24-Apr-2024': ['Short Straddle', 'Short Strangle', 'Short Strangle', 'Iron Butterfly', 'Short Strangle', 'Short Straddle', 'Strategy1', 'Short Straddle', 'Strategy1', 'Strategy1', 'Spread-Strategy', 'Short Straddle'],
        '02-May-2024': ['Short Straddle', 'Short Straddle', 'Short Strangle', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'Short Strangle', 'Short Straddle', 'Strategy1', 'Short Straddle', 'Strategy2', 'Strategy1', 'Strategy2', 'Short Straddle'],
        '21-Jun-2024': ['Iron Condor', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'Iron Condor'],
      }
    },
    {
      'View': 'Volatile',
      'Value': {
        '02-May-2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy1', 'Strategy1', 'Spread-Strategy', 'Long Straddle'],
        '09-May-2024': ['Long Straddle', 'Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy2', 'Strategy1', 'Strategy2', 'Long Straddle'],
        '31-May-2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle'],
      }
    }
  ];

  const [activeButton, setActiveButton] = useState(0);

  const [dateValues, setDateValues] = useState(strategyArray[0]['Value']);

  const handleButtonClick = (index) => {
    setDateValues(strategyArray[index]['Value']);
    setActiveButton(index);
  };

  const ref = useRef();

  useEffect(() => {
    ref.current?.resetDateStrategy();
  }, [dateValues]);

  return (
    <>
      <div className="app-container">
        <h1>Toggle Example</h1>
        <div className="toggle-container">
          <div className="button-bar">
            {strategyArray.map((strategy, index) => (
              <button key={index}
                className={`toggle-button ${activeButton === index ? 'active' : ''}`}
                onClick={() => handleButtonClick(index)}
              >
                {strategy['View']}
              </button>
            ))}
          </div>
        </div>
        <StrategyCard ref={ref} dateArray={dateArray} dateValues={dateValues} />
      </div>
    </>
  )
}

export default App
