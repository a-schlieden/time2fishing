
import React, { useEffect, useState } from "react";
import moment from 'moment';

import style from './Weather.module.css';



const URL = 'https://api.openweathermap.org/data/2.5';
const KEY = 'd166a591b291530de4f15fa7d5685607';


const Weather = () => {

    const [lat, setLat] = useState(51.3144537);
    const [long, setLong] = useState(12.2908344);
    const [weatherData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    //console.log(result);
                });
        }
        fetchData();
    }, [lat, long])



    return (
        <div className={style.weatherWrap}>

            {(typeof weatherData.main != 'undefined') ? (
                <>
                    <h3>Leipzig {weatherData.name} weather (beta)</h3>
                    <p>Temprature: {weatherData.main.temp} &deg;C</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Description: {weatherData.weather[0].main}</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                    <p>Day: {moment().format('dddd')}</p>
                    <p>Date: {moment().format('LL')}</p>
                </>
            ) : (
                <div></div>
            )}

        </div>
    );
};

export default Weather;