
import style from './ClearButton.module.css';

const ClearButton = ({ reset }) => {

    return (
        <>
            <button className={style.clearBtn} onClick={reset}>Clear</button>
        </>
    );
};

export default ClearButton;