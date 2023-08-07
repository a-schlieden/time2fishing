//import { useEffect, useState } from 'react';

import FischList from 'components/FischList/FischList';
//import * as filmsFetch from '../../api/Fetch';
import fishes from 'api/fisches.json';

const Home = () => {

    //const [fisch, setFilms] = useState([]);

    /*    useEffect(() => {
           filmsFetch.fetchTrendingMovies().then(result => {
               setFilms(result.results);
           });
       }, []); */
    return (
        <>
            <FischList fischArray={fishes} sublink={'fishes/'} />
        </>
    );
};

export default Home;