import { Link, useLocation } from 'react-router-dom';
import style from './FischList.module.css';

const FischList = ({ sublink, allFishesArray }) => {
    const location = useLocation();
    return (
        <div className={style.flWrap}>
            {allFishesArray.length > 0 && (
                <ul>
                    {allFishesArray.map(fish => (
                        <li key={fish.id}>
                            <Link
                                to={`${sublink ? sublink + fish.fish_name_en : fish.fish_name_en}`}
                                state={{ from: location }}
                            >
                                {fish.fish_name_ua}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FischList;