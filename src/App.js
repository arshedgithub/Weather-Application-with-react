import './App.css';
import Weather from './components/weather';
import Form from './components/form';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  }

  return (
    <div className="App mx-2">
      <Form onSubmit={handleSubmit} />
      <Weather city={city} />
    </div>
  );
}

export default App;
