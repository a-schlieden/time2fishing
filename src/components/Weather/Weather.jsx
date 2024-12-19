
import React, { useEffect, useState } from "react";
import moment from 'moment';

import style from './Weather.module.css';



const URL = 'https://api.openweathermap.org/data/2.5/weather/';
const ICONURL = 'https://openweathermap.org/img/wn/';
const KEY = 'd166a591b291530de4f15fa7d5685607';
const CityID = 6548737;

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

            await fetch(`${URL}?id=${CityID}&units=metric&APPID=${KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log("result", result)
                });
        }
        fetchData();
    }, [lat, long])



    return (
        <div className={style.weatherTodayWrap}>

            {(typeof weatherData.main != 'undefined') ? (
                <>
                    <h3 className={style.weatherTodayHead}>Weather in {weatherData.name} today</h3>
                    <p>{moment().format('dddd')} {moment().subtract(10, 'days').calendar()}</p>
                    {/* <p>Date: {moment().format('LL')}</p> */}
                    <p>Temprature: {weatherData.main.temp} &deg;C</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    <div className={style.weatherTodayDescriptionWrap}>
                        <p>{weatherData.weather[0].main}</p>
                        <img src={ICONURL + weatherData.weather[0].icon + ".png"} alt="icon" />
                    </div>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                    <p>Wind: {weatherData.wind.speed} m/s</p>

                </>
            ) : (
                <div>
                    <p>Sorry no data from server</p>
                </div>
            )}

        </div>
    );
};

export default Weather;