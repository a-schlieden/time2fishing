
import { useState, useEffect } from "react";


const FichTackle = ({ tacklesArray, head, ls }) => {

    const [savedTackle, setSavedTackle] = useState(JSON.parse(window.localStorage.getItem(ls)) ?? []);

    useEffect(() => {
        window.localStorage.setItem(ls, JSON.stringify(savedTackle));
    }, [savedTackle, ls]);


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
                            onChange={
                                isInLokalStorage.some(value => value === tackle.id)
                                    ? () => RemoveFromLocalStorage(tackle)
                                    : () => AddToLocalStorage(tackle)
                            }
                        />
                        <span>{tackle.name}</span>
                    </li>
                ))}

            </ul>
        </>
    );
};

export default FichTackle;