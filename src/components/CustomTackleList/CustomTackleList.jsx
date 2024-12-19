
import style from './CustomTackleList.module.css';

const CustomTackleList = (
    { customTackles,
        onDeleteOneCustomTackle,
        fnAddToLsChecedItem,
        fnRemoveFromLsChecedItem,
        fnCheckLsCheckedItem }
) => {
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
                                checked={fnCheckLsCheckedItem.some(value => value === item.id)}
                                onChange={
                                    fnCheckLsCheckedItem.some(value => value === item.id)
                                        ? () => fnRemoveFromLsChecedItem(item.id)
                                        : () => fnAddToLsChecedItem(item.id)
                                }
                            />
                            <span className={style.ctListItemSpan}>{item.text}</span>
                            <button
                                onClick={() => onDeleteOneCustomTackle(item.id)}
                                className={style.ctListItemBtn}>
                                Delete Task
                            </button>
                        </li>
                    ))}
                </ul>)
            }
        </>
    );
};

export default CustomTackleList;
