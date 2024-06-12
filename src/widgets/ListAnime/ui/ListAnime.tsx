import { FC } from 'react'

import styles from './ListAnime.module.scss'
import { cartAnime } from 'entities/Cart/constants'
import { Preview } from 'entities/Cart'

export const ListAnime:FC = () => {
  return (
    <div className={`${styles.list} container`}>
        <div className={styles.list__title}>
            Список аниме
        </div>
        <div className={styles.listPreview}>
            {
                cartAnime.map(el => (
                    <Preview description={el.description} img={el.img} name={el.name} rate={el.rate} tag={el.tag} title={el.title} key={Date.now()}/>
                ))
            }
        </div>
    </div>
  )
}
