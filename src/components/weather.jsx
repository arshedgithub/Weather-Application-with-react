import React, { useEffect, useState } from "react";
import axios from "axios";
import "weather-icons/css/weather-icons.css";

axios.interceptors.response.use(null, (error) => {
  if (!error.response) {
    alert("An unexpected error occured");
    console.log(error);
    return;
  }
  const { status } = error.response;

  if (status === 404) alert("Enter a valid city name");
  else if (status >= 400 && status <= 500) alert("Enter a valid city name");
  else alert("An unexpected error occured");
});

const Weather = ({ city }) => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const [cityName, setCityName] = useState();
  const [country, setCountry] = useState();
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [weather, setWeather] = useState();
  const [wind, setWind] = useState();
  const [weatherId, setWeatherId] = useState();
  const [weatherIcon, setWeatherIcon] = useState();

  const weatherIcons = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
  };

  const get_WeatherIcon = () => {
    let icon;
    switch (true) {
      case weatherId >= 200 && weatherId < 232:
        icon = weatherIcons.Thunderstorm;
        break;
      case weatherId >= 300 && weatherId <= 321:
        icon = weatherIcons.Drizzle;
        break;
      case weatherId >= 500 && weatherId <= 521:
        icon = weatherIcons.Rain;
        break;
      case weatherId >= 600 && weatherId <= 622:
        icon = weatherIcons.Snow;
        break;
      case weatherId >= 701 && weatherId <= 781:
        icon = weatherIcons.Atmosphere;
        break;
      case weatherId === 800:
        icon = weatherIcons.Clear;
        break;
      default:
        icon = weatherIcons.Clouds;
    }
    setWeatherIcon(icon);
  };

  const fetchWeather = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);

        const url = city
          ? `q=${city}`
          : `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}weather?${url}&appid=${process.env.REACT_APP_API_KEY}`
        );

        if (!res) return;
        const data = res.data;

        const { name, main, weather, wind, sys } = data;

        setWeatherId(weather[0].id);
        setCityName(name);
        setCountry(sys.country);
        setWeather(weather[0].description);
        setTemp(Math.round(main.temp - 273.15));
        setHumidity(main.humidity);
        setPressure(main.pressure);
        setWind(wind.speed);
      });
      get_WeatherIcon();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [lat, lon, city]);

  return (
    <div
      className="card-content m-auto p-4 my-4 rounded"
      style={{ maxWidth: "400px" }}
    >
      {!cityName ? (
        <div className="spinner-border my-5 p-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <h1>
            {cityName}, {country}
          </h1>
          <div className="py-3">
            <i className={`wi ${weatherIcon} display-1`} />
          </div>
          <h4>{weather}</h4>
          <h1>{temp}&deg;C</h1>
          <h4>Humidity : {humidity}%</h4>
          <h6>Average Wind Speed : {wind} m/s</h6>
          <h6>Air Pressure : {pressure} Pa</h6>
        </div>
      )}
    </div>
  );
};

export default Weather;
