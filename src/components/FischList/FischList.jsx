import { Link, useLocation } from 'react-router-dom';

const FischList = ({ sublink, tackleArr }) => {
    const location = useLocation();
    return (
        <div>
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