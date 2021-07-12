import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const fetchWeather = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });

    const res = axios.get(
      `${process.env.REACT_APP_API_URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    console.log(res.data);
  };

  useEffect(() => {
    fetchWeather();
  }, [lat, lon]);

  return (
    <div className="m-auto">
      <div className="card-content rounded">
        <h1>weather</h1>
      </div>
    </div>
  );
};

export default Weather;
