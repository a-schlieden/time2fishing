
import style from './CustomTackleForm.module.css';

const CustomTackleForm = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={style.formInput}
                type="text"
                name="text"
                placeholder="Enter task text..."
            />
            <button className={style.formBtn} type="submit">Add task</button>
        </form>
    );
};

export default CustomTackleForm;