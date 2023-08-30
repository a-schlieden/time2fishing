
import { useState } from "react";

import style from './CustomTackleForm.module.css';

const CustomTackleForm = ({ onSubmitForm }) => {

    const [formInfo, setFormInfo] = useState('');

    const onDataChange = (event) => {
        setFormInfo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitForm({ formInfo })
        setFormInfo('');
    };

    return (
        <form onSubmit={handleSubmit} className={style.ctForm}>
            <input
                className={style.ctFormInput}
                type="text"
                name="text"
                value={formInfo}
                placeholder="Enter task text..."
                onChange={onDataChange}
            />
            <button className={style.ctFormBtn} type="submit">Add task</button>
        </form>
    );
};

export default CustomTackleForm;