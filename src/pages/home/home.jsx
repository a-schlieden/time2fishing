
import FischList from 'components/FischList/FischList';
import Weather from 'components/Weather/Weather';
import WeatherWeek from 'components/WeatherWeek/WeatherWeek';
import style from './home.module.css';

const Home = ({ tackleArr }) => {
    const tackleArray = tackleArr

    return (
        <div className={style.homeWrapp}>
            <FischList sublink={'fishes/'} tackleArr={tackleArray} />
            <div className={style.homeWeatherWrapp}>
                <Weather />
                <WeatherWeek />
            </div>
        </div>
    );
};

export default Home;