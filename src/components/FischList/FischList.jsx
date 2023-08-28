import { Link, useLocation } from 'react-router-dom';
import style from './FischList.module.css';

const FischList = ({ sublink, tackleArr }) => {
    const location = useLocation();
    return (
        <div className={style.flWrap}>
            {tackleArr.length > 0 && (
                <ul>
                    {tackleArr.map(fish => (
                        <li key={fish.id}>
                            <Link
                                to={`${sublink ? sublink + fish.loc : fish.loc}`}
                                state={{ from: location }}
                            >
                                {fish.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FischList;