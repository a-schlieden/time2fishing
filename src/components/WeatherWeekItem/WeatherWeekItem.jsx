import moment from 'moment';

import style from './WeatherWeekItem.module.css';

const ICONURL = 'https://openweathermap.org/img/wn/';

const WeatherWeekItem = ({ weatherArray }) => {

    const ThisDate = moment().format().substring(0, 10);
    const noTodayArr = weatherArray.filter(value => value.dt_txt.substring(0, 10) !== ThisDate).filter(value => value.dt_txt.substring(11, 13) === "12");

    //console.log("original Arr ", noTodayArr)

    /*     let dd = new Date(ThisDate);
        console.log(dd)
        console.log(dd.getDay()); */

    function DayDate(day) {
        let res;
        let thisDay = new Date(day)
        switch (thisDay.getDay()) {
            case 0:
                res = 'неділя';
                break;

            case 1:
                res = 'понеділок';
                break;
            case 2:
                res = 'вівторок';
                break;
            case 3:
                res = 'середа';
                break;
            case 4:
                res = 'четвер';
                break;
            case 5:
                res = 'п\'ятниця';
                break;
            case 6:
                res = 'субота';
                break;
            default:
                console.log("Invalid subscription type");
        }
        return res;
    }



    return (
        <>
            <h3 className={style.weatherWeekItemItem}>There is Week list with weather for every day</h3>
            <ul className={style.weatherWeekItemList}>
                {noTodayArr.map(item => (
                    <li key={item.dt} >
                        <p>{DayDate(item.dt_txt.substring(0, 10))} {item.dt_txt.substring(0, 10)}</p>
                        {/*  <span>{item.dt_txt.substring(0, 10)}</span> */}
                        <p>Temprature: {item.main.temp} &deg;C</p>
                        <p>Humidity: {item.main.humidity} %</p>
                        <div className={style.weatherDescriptionWrap}>
                            <p>{item.weather[0].description}</p>
                            <img src={ICONURL + item.weather[0].icon + ".png"} alt="icon" />
                        </div>
                    </li>

                ))}
            </ul>

            {/* <p>Temprature: {weatherData.main.temp} &deg;C</p> */}
            {/* <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p> */}
            {/* <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p> */}
            {/*   <div className={style.weatherDescriptionWrap}>
                        <p>{weatherData.weather[0].main}</p>
                        <img src={ICONURL + weatherData.weather[0].icon + ".png"} alt="icon" />
                    </div> */}
            {/* <p>Humidity: {weatherData.main.humidity} %</p> */}
            {/*   <p>Day: {moment().format('dddd')}</p> */}
            {/*  <p>Date: {moment().format('LL')}</p> */}
        </>
    );
};

export default WeatherWeekItem;