import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { navListUser, user } from '../constants'

import styles from './NavMenuUser.module.scss'

export const NavMenuUser: FC = () => {
    return (
        <div className={styles.block}>
            <ul className={styles.nav}>
                <li className={styles.nav__item}>
                    <NavLink to={user.path}>
                        {user.link}
                    </NavLink>
                </li>
                {
                    navListUser.map(el => (
                        <li className={styles.nav__item} key={el.link}>
                            <NavLink to={el.path}>
                                <img src={el.link} alt="" />
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <div>Выйти</div>{/* Button */}
        </div>
    )
}
