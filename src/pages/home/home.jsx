
import FischList from 'components/FischList/FischList';
import Weather from 'components/Weather/Weather';
import style from './home.module.css';

const Home = ({ tackleArr }) => {
    const tackleArray = tackleArr

    return (
        <div className={style.homeWrapp}>
            <FischList sublink={'fishes/'} tackleArr={tackleArray} />
            <Weather />
        </div>
    );
};

export default Home;