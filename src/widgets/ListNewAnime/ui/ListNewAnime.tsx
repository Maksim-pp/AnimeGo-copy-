import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { MyButton } from 'shared/index'
import { Routes } from 'shared/constants'
import { cartAnime } from 'entities/Cart/constants'
import { Preview } from 'entities/Cart'

import styles from './ListNewAnime.module.scss'

export const ListNewAnime: FC = () => {
    return (
        <div className='container'>
            <div className={styles.list}>
                <div className={styles.list__title}>
                    Расписание аниме
                </div>
                <div className={styles.listPreview}>
                    {
                        cartAnime.map(el => (
                            <Preview description={el.description} img={el.img} name={el.name} rate={el.rate} tag={el.tag} title={el.title} key={Date.now()}/>
                        ))
                    }
                </div>
            </div>
            <div className={styles.block}>
                <NavLink to={Routes.ANIME}>
                    <MyButton className={styles.block__button}>
                        Весь список аниме
                    </MyButton>
                </NavLink>
            </div>

        </div>
    )
}
