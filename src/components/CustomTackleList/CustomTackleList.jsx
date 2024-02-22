
import style from './CustomTackleList.module.css';

const CustomTackleList = ({ customTackles, onDeleteOneCustomTackle }) => {
    /* checkBoxStateChange, checkBoxState, */
    return (
        <>
            {customTackles.length > 0 &&
                (<ul className={style.ctList}>
                    {customTackles.map(item => (
                        <li key={item.id}>
                            <input type="checkbox"
                                readOnly
                                id={item.id}
                                name="vehicle4"
                            /* checked={customTackleCheck}
                            onChange={() => setCustomTackleCheck(!customTackleCheck)} */
                            /* checked={checkBoxState}
                            onChange={checkBoxStateChange} */
                            />
                            <span className={style.ctListItemSpan}>{item.text}</span>
                            <button
                                onClick={() => onDeleteOneCustomTackle(item.id)}
                                className={style.ctListItemBtn}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>)
            }
        </>
    );
};

export default CustomTackleList;


/* <ul className={style.ctList}>
<li>
    <input
        type="checkbox"
        id="13424"
        name="vehicle4"
    /*  checked={false} 
    /* onChange={ } 
    />
    <span>My Tackle 1</span>
</li>
</ul> */