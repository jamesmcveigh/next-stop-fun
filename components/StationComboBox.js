import { useState, useRef, useEffect } from 'react';
import styles from './StationComboBox.module.css';
import stations from 'data/stations.json';

const StationComboBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [matchedStations, setMatchedStations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setMatchedStations(stations.filter((station) =>
      station.toLowerCase().includes(inputValue.toLowerCase())
    ));
    setShowDropdown(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 100);
  };

  const handleStationClick = (station) => {
    setInputValue(station);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className={styles['station-combobox']}>
      <label htmlFor="station-input">Enter station name:</label>
      <input
        type="text"
        id="station-input"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        ref={inputRef}
      />
      {showDropdown && matchedStations.length > 0 && (
        <ul className={styles['station-list']}>
          {matchedStations.map((station) => (
            <li key={station} onClick={() => handleStationClick(station)}>
              {station}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StationComboBox;
