
import style from './FischTackle.module.css';

const FichTackle = ({ tacklesArray, head, fnAddToLS, fnRemoveFromLS, isInLS }) => {

    return (
        <>
            <h1 className={style.head}>{head}</h1>
            <ul className={style.fischTAckleList}>
                {tacklesArray.map(tackle => (
                    <li key={tackle.id} >
                        <input type="checkbox"
                            id={tackle.id}
                            name="vehicle4"
                            checked={isInLS.some(value => value === tackle.id)}
                            onChange={
                                isInLS.some(value => value === tackle.id)
                                    //  ? () => RemoveFromLocalStorage(tackle)
                                    //  : () => AddToLocalStorage(tackle)

                                    ? () => fnRemoveFromLS(tackle)
                                    : () => fnAddToLS(tackle)
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