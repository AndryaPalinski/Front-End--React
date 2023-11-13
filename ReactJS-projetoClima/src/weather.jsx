import axios from "axios";
import { useState } from "react";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null)
  const apiKey = "951c69cb0caad1455244aaaeadc49143";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
    const response = await axios.get(url);
    setWeatherData(response.data);
    console.log(url);
    setCity("");
  };

  return (
    <>
        <div className="inicial">
          <form onSubmit={handleSubmit}>
            <input className="pesquisa"
              type="text"
              placeholder="Digite a cidade..."
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="button" type="submit">Buscar(￣︶￣)↗</button>
          </form>
        </div>
    
      {weatherData !== null && (
        <div className="resultados" >
          <h6 className="tempo">Tempo agora em (～￣▽￣)~: </h6>
          <p>{weatherData.name}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            width="50"
          />
          <p>Temperatura atual: {weatherData.main.temp}º</p>
          <p>Clima: {weatherData.weather[0].description}</p>
          <p>Sensação térmica: {Math.floor(weatherData.main.feels_like)}º</p>
          <p>Temperatura mínima: {Math.floor(weatherData.main.temp_min)}º</p>
          <p>Temperatura máxima: {Math.floor(weatherData.main.temp_max)}º</p>
        </div>
      )}
    </>
  );
};

export default Weather;
