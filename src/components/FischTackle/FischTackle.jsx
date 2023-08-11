
//import { useState } from "react";
/* import { nanoid } from "nanoid";

const LOCAL_STORAGE_TACKLE = "tackles" */

const FichTackle = ({ tacklesArray, head }) => {

    //const [fisch, setFilms] = useState([]);

    /*    useEffect(() => {
           filmsFetch.fetchTrendingMovies().then(result => {
               setFilms(result.results);
           });
       }, []); */

    //const [chacked, setChacked] = useState(false);
    //const [savedTackle, setSavedTackle] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_TACKLE)) ?? []);

    /*    const hasCheckt = () => {
           setChacked(!chacked);
           return chacked;
       } */



    /*     const AddToLocalStorage = (item) => {
            const newTackle = {
                id: nanoid(),
                name: item,
            }
            setSavedTackle((prevState) => [newTackle, ...prevState]);
        } */

    /*     const RemoveFromLocalStorage = () => {
            console.log("remive Item")
        } */

    return (
        <>
            {/* <FischList fischArray={fishes} sublink={'fishes/'} tackleArr={tackleArray} /> */}
            <h2>{head}</h2>
            <ul>
                {tacklesArray.map(tackle => (
                    <li key={tackle.id} >
                        <input type="checkbox"
                        //checked={chacked}
                        //onChange={checked ? RemoveFromLocalStorage : AddToLocalStorage}
                        // onChange={AddToLocalStorage(tackle)}
                        />
                        {tackle.name}
                    </li>
                ))}

            </ul>
        </>
    );
};

export default FichTackle;