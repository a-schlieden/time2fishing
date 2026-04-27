
import FischList from 'components/FischList/FischList';
import Weather from 'components/Weather/Weather';
import WeatherWeek from 'components/WeatherWeek/WeatherWeek';
import style from './home.module.css';

const Home = ({ fishesArr }) => {
    const fishesArray = fishesArr

    return (
        <div className={style.homeWrapp}>
            <FischList sublink={'fishes/'} allFishesArray={fishesArray} />
            <div className={style.homeWeatherWrapp}>
                <Weather />
                <WeatherWeek />
            </div>
        </div>
    );
};

export default Home;