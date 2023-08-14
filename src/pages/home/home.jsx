
import FischList from 'components/FischList/FischList';

const Home = ({ tackleArr }) => {
    const tackleArray = tackleArr

    return (
        <>
            <FischList sublink={'fishes/'} tackleArr={tackleArray} />
        </>
    );
};

export default Home;