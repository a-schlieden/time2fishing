
import { useState, useEffect } from "react";
// import { nanoid } from "nanoid";

const LOCAL_STORAGE_TACKLE = "tackles"

const FichTackle = ({ tacklesArray, head }) => {

    //const [fisch, setFilms] = useState([]);

    /*  useEffect(() => {
           filmsFetch.fetchTrendingMovies().then(result => {
               setFilms(result.results);
           });
       }, []); */

    // const [chacked, setChacked] = useState(false);
    const [savedTackle, setSavedTackle] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_TACKLE)) ?? []);


    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_TACKLE, JSON.stringify(savedTackle));
    }, [savedTackle]);


    const AddToLocalStorage = (item) => {
        const newTackle = {
            id: item.id,
            name: item.name,
        }
        setSavedTackle((prevState) => [newTackle, ...prevState]);
        console.log(" add ite", item)
        // setChacked(false)
    }

    const RemoveFromLocalStorage = (item) => {
        console.log("remove Item")
        console.log(item)
        setSavedTackle(savedTackle.filter((tak) => tak.id !== item.id))
        // setChacked(true)
    }

    const isInLokalStorage = savedTackle.map(item => item.id);


    return (
        <>
            <h2>{head}</h2>
            <ul>
                {tacklesArray.map(tackle => (
                    <li key={tackle.id} >
                        <input type="checkbox"
                            id={tackle.id}
                            name="vehicle4"
                            checked={isInLokalStorage.some(value => value === tackle.id)}
                            //onChange={checked ? RemoveFromLocalStorage : AddToLocalStorage}
                            onChange={isInLokalStorage.some(value => value === tackle.id)
                                ? () => RemoveFromLocalStorage(tackle) : () => AddToLocalStorage(tackle)
                            }
                        />
                        {tackle.name}
                    </li>
                ))}

            </ul>
        </>
    );
};

export default FichTackle;