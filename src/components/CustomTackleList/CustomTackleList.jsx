
import { useState, useEffect } from "react";

import style from './CustomTackleList.module.css';

const CustomTackleList = ({ customTackles }) => {


    const [customTackleCheck, setCustomTackleCheck] = useState(false);

    useEffect(() => {
        console.log("Test !!! " + customTackleCheck)
    }, [customTackleCheck]);



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
                                checked={customTackleCheck}
                                onChange={() => setCustomTackleCheck(!customTackleCheck)}
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