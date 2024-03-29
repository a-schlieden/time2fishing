import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import style from './BackLink.module.css';

const BackLink = () => {
  const location = useLocation().state?.from ?? '/';
  return (
    <NavLink className={style.backLink} to={location}>
      Назад
    </NavLink>
  );
};

export default BackLink;
