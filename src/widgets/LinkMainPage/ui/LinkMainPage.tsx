import { FC } from 'react'

import styles from './LinkMainPage.module.scss'
import { NavLink } from 'react-router-dom'

export const LinkMainPage: FC = () => {
    return (
        <ul className={`${styles.menu} container`}>
            <li className={styles.menu__item}>
                <NavLink to={''} className={styles.link}>
                    Онгоинги
                </NavLink>
            </li>
            <li className={styles.menu__item}>
                <NavLink to={''} className={styles.link}>
                    2024 год
                </NavLink>
            </li>
            <li className={styles.menu__item}>
                <NavLink to={''} className={styles.link}>
                    2023 год
                </NavLink>
            </li>
        </ul>
    )
}
