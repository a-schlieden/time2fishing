
import React, { useEffect, useState } from "react";

import WeatherWeekItem from "components/WeatherWeekItem/WeatherWeekItem";

import style from './WeatherWeek.module.css';


const URL = 'https://api.openweathermap.org/data/2.5/forecast';
/* const ICONURL = 'https://openweathermap.org/img/wn/'; */
const KEY = 'd166a591b291530de4f15fa7d5685607';


const WeatherWeek = () => {

    /*   const [lat, setLat] = useState(55.3144537);
    const [long, setLong] = useState(12.2908344); */
    const CityID = 6548737;
    const [weatherData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${URL}?id=${CityID}&lang=ua&appid=${KEY}&units=metric`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log("Weekly result", result);
                });
        }
        fetchData();
    }, [])

    return (
        <div className={style.weatherWrap}>

            {(typeof weatherData.city != 'undefined') ? (
                <>
                    <h3>Weather Week in {weatherData.city.name}</h3>
                    <WeatherWeekItem weatherArray={weatherData.list} />
                </>
            ) : (
                <div>
                    <p>Sorry no weather data from server</p>
                </div>
            )}

        </div>
    );
};

export default WeatherWeek;