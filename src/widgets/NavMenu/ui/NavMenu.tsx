import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { navListMenu } from '../constants'

import styles from './NavMenu.module.scss'

export const NavMenu:FC = () => {
  return (
    <ul className={styles.nav}>
        {
            navListMenu.map(el =>(
                <li className={styles.nav__item}>
                    <NavLink to={el.path}>
                        {el.link}
                    </NavLink>
                </li>
            ))
        }
    </ul>
  )
}
