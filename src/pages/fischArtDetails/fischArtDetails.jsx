//import { useState, useEffect, Suspense } from "react";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
/* import { useParams, Outlet, useLocation } from "react-router-dom"; */
import { Loader } from 'components/Loader/Loader';

import FischTackle from "components/FischTackle/FischTackle";
import BackLink from "components/BackLink/BackLink";
import ClearButton from "components/ClearButton/ClearButton";

import style from './fischArtDetails.module.css';


const FischArtDetails = ({ tackleArr }) => {
    /*  const [FilmDetails, setFilmDetails] = useState([]);
     const [status, setStatus] = useState('idleNothing');*/

    const location = useLocation();
    //[]
    const ThisFischTackles = location.pathname;
    const FischTacklesArr = ThisFischTackles.split("/")
    const FischTacklesArrItem = FischTacklesArr[2]

    const AllTacklesForFisch = tackleArr.find(option => option.name === FischTacklesArrItem)
    //console.log(AllTacklesForFisch.tackle)

    const LinkTo = location.state

    return (
        <div className={style.wrapp}>

            {/*    {status === 'pendingLoad' && <Loader />} */}
            {/* 
            {status === 'resolved' &&
                <> */}
            <BackLink link={LinkTo} />
            <FischTackle tacklesArray={AllTacklesForFisch.tackle} head={FischTacklesArrItem} />
            <ClearButton />

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>

        </div>
    )
}

export default FischArtDetails;