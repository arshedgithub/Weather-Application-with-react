import './App.css';
import Weather from './components/weather';
import Form from './components/form';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState();

  const getCityName = (city) => {
    setCity(city)
  }

  return (
    <div className="App">
      <Form getCity={getCityName} />
      <Weather city={city} />
    </div>
  );
}

export default App;
