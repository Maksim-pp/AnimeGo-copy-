import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Routes } from 'shared/constants'
import { Logo } from 'shared/index'
import { NavMenu, NavMenuUser } from 'widgets/NavMenu'

import styles from './TheHeader.module.scss'



export const TheHeader: FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <div className={`${styles.headerNav} container`}>
          <NavLink to={Routes.MAIN_PAGE}>
            <Logo/>
          </NavLink>
          <div className={styles.nav}>
            <NavMenu />
            <NavMenuUser />
          </div>
        </div>
      </div>
      <div className={styles.headerLine}></div>
    </div>

  )
}
