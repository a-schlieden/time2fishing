
import { NavLink } from "react-router-dom";
import style from './Header.module.css';

const Items = [
    { to: '/', title: 'Home' },
]

const Languages = [
    { to: '/ru', title: 'RU' },
    { to: '/', title: 'UA' },
]


const Header = () => {
    return (
        <header>
            <div >
                <nav className={style.nav}>
                    <ul>
                        {Items.map(item =>
                            <li key={item.title}>
                                <NavLink
                                    className={({ isActive }) => isActive ? style.navActive : undefined}
                                    to={item.to}>
                                    {item.title}
                                </NavLink>
                            </li>)}
                    </ul>

                    <ul>
                        {Languages.map(item =>
                            <li key={item.title}>
                                <NavLink
                                    /* className={({ isActive }) => isActive ? style.navActive : undefined} */
                                    className={style.languageLink}
                                    to={item.to}>
                                    {item.title}
                                </NavLink>
                            </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header