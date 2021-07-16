import './App.css';
import Weather from './components/weather';
import Form from './components/form';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState();
  const [locErr, setLocErr] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  }

  const getLocErr = () => {
    setLocErr(true)
  }

  return (
    <div className="App mx-2">
      <Form onSubmit={handleSubmit} loc={locErr} />
      <Weather city={city} onLocErr={getLocErr} />
    </div>
  );
}

export default App;
