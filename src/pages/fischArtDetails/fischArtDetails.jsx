
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { nanoid } from "nanoid";

import { Loader } from 'components/Loader/Loader';
import FischTackle from "components/FischTackle/FischTackle";
import CustomTackle from "components/CustomTackle/CustomTackle";
import BackLink from "components/BackLink/BackLink";
import ClearButton from "components/ClearButton/ClearButton";

import style from './fischArtDetails.module.css';


const FischArtDetails = ({ tackleArr }) => {

    const LOCAL_STORAGE_TACKLE = "tackles"

    const location = useLocation();
    const ThisFischTackles = location.pathname;
    const FischTacklesArr = ThisFischTackles.split("/");
    const FischTacklesArrItem = FischTacklesArr[2];

    const AllTacklesForFisch = tackleArr.find(option => option.loc === FischTacklesArrItem);

    const LinkTo = location.state;

    const [savedTackle, setSavedTackle] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_TACKLE)) ?? []);

    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_TACKLE, JSON.stringify(savedTackle));
    }, [savedTackle, LOCAL_STORAGE_TACKLE]);

    const AddToLocalStorage = (item) => {
        const newTackle = {
            id: item.id,
            name: item.name,
        }
        setSavedTackle((prevState) => [newTackle, ...prevState]);
    }

    const RemoveFromLocalStorage = (item) => {
        setSavedTackle(savedTackle.filter((tak) => tak.id !== item.id));
    }

    const clearBtn = () => {
        setSavedTackle([])
        setCustomTackle([])
    }

    const isInLokalStorage = savedTackle.map(item => item.id);

    //------------------- CustomTackle -------------------------

    const LOCAL_STORAGE_CUSTOM_TACKLE = "custom_tackles";

    const [customTackle, setCustomTackle] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_CUSTOM_TACKLE)) ?? []);
    /* const [customTackleCheck, setCustomTackleCheck] = useState(false); */

    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_CUSTOM_TACKLE, JSON.stringify(customTackle));
    }, [customTackle, LOCAL_STORAGE_CUSTOM_TACKLE]);


    const addNewCustomTackleToLocalStorage = (infoFromForm) => {
        const newCustomTackle = {
            id: nanoid(),
            text: infoFromForm.formInfo,
            /* isChecked: customTackleCheck, */
        }
        setCustomTackle((prevState) => [newCustomTackle, ...prevState]);
    }

    /* const ctCheck = () => {
        setCustomTackleCheck(!customTackleCheck)
        console.log(customTackleCheck) 
    } */
    /*  console.log("Check ? ", customTackleCheck) */

    const deleteOneCustomTackle = (customTackleId) => {
        setCustomTackle(customTackle.filter((contact) => contact.id !== customTackleId))
    }

    return (
        <div style={{
            backgroundImage: `url(${'../images/' + FischTacklesArrItem + '.jpg'})`
        }} className={style.wrapp} >

            <BackLink link={LinkTo} />
            <FischTackle
                tacklesArray={AllTacklesForFisch.tackle}
                head={AllTacklesForFisch.name}
                fnAddToLS={AddToLocalStorage}
                fnRemoveFromLS={RemoveFromLocalStorage}
                isInLS={isInLokalStorage}
            />
            <CustomTackle
                newCustomTackleAdd={addNewCustomTackleToLocalStorage}
                allcustomTackles={customTackle}
                fnDeleteOneCustomTackle={deleteOneCustomTackle}
            />
            <ClearButton reset={() => clearBtn()} />

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>

        </div >
    )
}

export default FischArtDetails;

/* checkBoxState={customTackleCheck}
checkBoxStateChange={ctCheck} */