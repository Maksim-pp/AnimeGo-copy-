import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { cartAnimeMini } from 'entities/Cart/constants'
import { CardAnimeMini } from 'entities/Cart'

import styles from './ListReleased.module.scss'

export const ListReleased: FC = () => {
    return (
        <div className={styles.list}>
            <div className={styles.listTitle}>
                <h2 className={styles.listTitle__text}>Недавно вышедшие аниме</h2>
                <div className={styles.listTitle__link}>
                    <NavLink to={''} >
                        Все
                    </NavLink>
                </div>
            </div>
            {
                cartAnimeMini.map(el => (
                    <CardAnimeMini series={el.series} img={el.img} text={el.text} title={el.title} key={Date.now()} />
                ))
            }
        </div>
    )
}
