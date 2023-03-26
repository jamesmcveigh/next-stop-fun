import { useState, useEffect } from 'react';
import styles from './StationComboBox.module.css';

const StationComboBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [stations, setStations] = useState([]);
  const [matchedStations, setMatchedStations] = useState([]);

  useEffect(() => {
    async function fetchStations() {
      const response = await fetch('/api/stations');
      const stationsJson = await response.json();
      setStations(stationsJson);
    }
    fetchStations();
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setMatchedStations(stations.filter((station) =>
      station.toLowerCase().includes(inputValue.toLowerCase())
    ));
  };

  return (
    <div className={styles['station-combobox']}>
      <label htmlFor="station-input">Enter station name:</label>
      <input
        type="text"
        id="station-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      {matchedStations.length > 0 && (
        <ul className={styles['station-list']}>
          {matchedStations.map((station) => (
            <li key={station}>{station}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StationComboBox;
