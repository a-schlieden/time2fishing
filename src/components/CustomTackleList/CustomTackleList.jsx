
import style from './CustomTackleList.module.css';

const CustomTackleList = ({ customTackles }) => {

    console.log("lng", customTackles.length === 0)
    console.log("lng + text", customTackles)
    return (
        <>
            {customTackles.length > 0 &&
                (<ul className={style.ctList}>
                    {customTackles.map(item => (
                        <li key={item.id}>
                            <input type="checkbox"
                                id={item.id}
                                name="vehicle4"
                            />
                            <span className={style.ctListItemSpan}>{item.text}</span>
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