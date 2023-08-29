
import style from './CustomTackleList.module.css';

const CustomTackleList = () => {

    /*     const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
    
            form.reset();
        }; */

    return (
        <ul className={style.ctList}>
            <li>
                <input
                    type="checkbox"
                    id="13424"
                    name="vehicle4"
                /*  checked={false} */
                /* onChange={ } */
                />
                <span>My Tackle 1</span>
            </li>
            <li>
                <input
                    type="checkbox"
                    id="134243"
                    name="vehicle4"
                /*   checked={false} */
                /*  onChange={ } */
                />
                <span>My Tackle 2</span>
            </li>
        </ul>
    );
};

export default CustomTackleList;