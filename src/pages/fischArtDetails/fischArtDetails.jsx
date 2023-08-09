//import { useState, useEffect, Suspense } from "react";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
/* import { useParams, Outlet, useLocation } from "react-router-dom"; */
import { Loader } from 'components/Loader/Loader';
//import * as filmsFetch from '../../api/Fetch';
import FischTackle from "components/FischTackle/FischTackle";
import BackLink from "components/BackLink/BackLink";

import style from './fischArtDetails.module.css';


const FischArtDetails = ({ tackleArr }) => {
    /*  const [FilmDetails, setFilmDetails] = useState([]);
     const [status, setStatus] = useState('idleNothing');*/
    //const test = tackles;
    const location = useLocation();
    //[]
    // console.log("location", location.pathname);
    console.log("Arr", tackleArr);
    const ThisFischTackles = location.pathname;
    const test1 = ThisFischTackles.split("/")
    const test2 = test1[2]
    console.log("Split ", test2);
    const some12 = tackleArr.find(option => option.name === test2)
    console.log(some12.tackle)
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
            <FischTackle tacklesArray={ThisFischTackles} />

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

export default FischArtDetails