import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Routes } from 'shared/constants'

import styles from './NavMenu.module.scss'



export const NavMenu: FC = () => {

    return (
        <ul className={styles.nav}>
            <li>
                <NavLink to={Routes.ANIME}>
                    Аниме
                </NavLink>
            </li>
            <li>
                <NavLink to={Routes.MANGA }>
                    Манга
                </NavLink>
            </li>
        </ul>
    )
}
