import WeatherItem from "./WeatherItem"
import { useCity } from '../context/CityContext';
import axios from "axios";
import { useEffect, useState } from "react";

const key=process.env.REACT_APP_WEATHER_API_KEY;

function WeatherContainer() {
  const {selectedCity}=useCity();
  const [weather,setWeather]=useState("");
  
  const getWeatherData=async (lat,lon)=>{
    try {
      const {data}=await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&lang=tr&appid=${key}`);
      setWeather(data);
    } catch (err) {
      setWeather({err:"veri alınırken hata oluştu"});
    }
  }

  useEffect(()=>{
    getWeatherData(selectedCity.latitude,selectedCity.longitude);
  },[selectedCity]);
  
  return (   
      weather!==""?
      <div className="weather-container">
        {
          weather.daily.map((weatherItem,index)=>{
            return <WeatherItem key={index} weather={weatherItem} />
          })
        }
      </div>
      :"Yükleniyor..."        
  )
}

export default WeatherContainer