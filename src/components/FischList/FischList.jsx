import { Link, useLocation } from 'react-router-dom';

const FischList = ({ fischArray, sublink }) => {
    const location = useLocation();

    return (
        <div>
            {fischArray.length > 0 && (
                <ul>
                    {fischArray.map(fish => (
                        <li key={fish.id}>
                            <Link
                                to={`${sublink ? sublink + fish.id : fish.id}`}
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