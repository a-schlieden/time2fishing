
import style from './CustomTackle.module.css';

const CustomTackle = () => {

    return (
        <div className={style.ctWrapp}>
            <h3 className={style.ctHead}>My Extra Tackles</h3>
            <ul className={style.ctList}>
                <li >
                    <input type="checkbox"
                        id="13424"
                        name="vehicle4"
                        checked={false}
                    /* onChange={ } */
                    />
                    <span>My Tackle 1</span>
                </li>
                <li >
                    <input type="checkbox"
                        id="134243"
                        name="vehicle4"
                        checked={false}
                    /*  onChange={ } */
                    />
                    <span>My Tackle 2</span>
                </li>
            </ul>
        </div>
    );
};

export default CustomTackle;