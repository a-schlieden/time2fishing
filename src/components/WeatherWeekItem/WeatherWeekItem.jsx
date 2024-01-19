
import style from './WeatherWeekItem.module.css';

const WeatherWeekItem = ({ weatherArray }) => {
    //console.log("weatherArray", weatherArray)
    return (
        <>
            <h3 className={style.weatherWeekItemItem}>There are Week list with weather for every day</h3>
            <ul className={style.weatherWeekItemList}>
                {weatherArray.map(item => (
                    <li key={item.dt} >

                        {/*               <span>{item.dt}</span> */}
                        {/*  <span>{item.dt_txt.substring(0, 10)}</span> */}
                        <span>{item.dt_txt}</span>
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