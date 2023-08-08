//import { useState, useEffect, Suspense } from "react";
import { Suspense } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { Loader } from 'components/Loader/Loader';
//import * as filmsFetch from '../../api/Fetch';
//import MovieMainInfo from "components/MovieMainInfo/MovieMainInfo";
//import AdditionalLinks from "components/AdditionalLinks/AdditionalLinks";
import BackLink from "components/BackLink/BackLink";

import tackles from 'api/tackle.json';

import style from './fischArtComponents.module.css';


const FischArtComponents = () => {
    /*  const [FilmDetails, setFilmDetails] = useState([]);
     const [status, setStatus] = useState('idleNothing');*/
    const test = useParams()
    const location = useLocation();

    console.log("movieId", tackles)
    /*     useEffect(() => {
    
            setStatus('pendingLoad');
    
            filmsFetch.fetchMoviesById(movieId).then(movie => {
                setFilmDetails(movie)
                setStatus('resolved');
            });
        }, [movieId]);
     */

    const LinkTo = location.state


    return (
        <div className={style.wrapp}>

            {/*    {status === 'pendingLoad' && <Loader />} */}
            {/* 
            {status === 'resolved' &&
                <> */}
            <BackLink link={LinkTo} />

            {/*     <MovieMainInfo film={FilmDetails} /> */}

            {/*    <AdditionalLinks /> */}

            {/*           </>
            } */}

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>

        </div>
    )
}

export default FischArtComponents