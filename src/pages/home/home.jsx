//import { useEffect, useState } from 'react';

import FischList from 'components/FischList/FischList';
//import fishes from 'api/fisches.json';
//import tackles from 'api/tackle.json';
const Home = ({ tackleArr }) => {

    //const [fisch, setFilms] = useState([]);
    const tackleArray = tackleArr
    /*    useEffect(() => {
           filmsFetch.fetchTrendingMovies().then(result => {
               setFilms(result.results);
           });
       }, []); */
    return (
        <>
            {/*  <FischList fischArray={fishes} sublink={'fishes/'} tackleArr={tackleArray} /> */}
            <FischList sublink={'fishes/'} tackleArr={tackleArray} />
        </>
    );
};

export default Home;