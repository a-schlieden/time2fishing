
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Loader } from 'components/Loader/Loader';
import FischTackle from "components/FischTackle/FischTackle";
import BackLink from "components/BackLink/BackLink";
import ClearButton from "components/ClearButton/ClearButton";

import style from './fischArtDetails.module.css';

const FischArtDetails = ({ tackleArr }) => {

    const LOCAL_STORAGE_TACKLE = "tackles"

    const location = useLocation();
    //[]
    const ThisFischTackles = location.pathname;
    const FischTacklesArr = ThisFischTackles.split("/");
    const FischTacklesArrItem = FischTacklesArr[2];

    const AllTacklesForFisch = tackleArr.find(option => option.name === FischTacklesArrItem);

    const LinkTo = location.state;

    const clearBtn = () => {
        localStorage.removeItem(LOCAL_STORAGE_TACKLE);
    }

    return (
        <div className={style.wrapp}>

            <BackLink link={LinkTo} />
            <FischTackle tacklesArray={AllTacklesForFisch.tackle} head={FischTacklesArrItem} ls={LOCAL_STORAGE_TACKLE} />
            <ClearButton reset={() => clearBtn()} />

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>

        </div>
    )
}

export default FischArtDetails;