import { FC } from 'react'
import { Preview } from 'entities/Cart'
import { cartManga } from 'entities/Cart/constants'

import styles from './ListManga.module.scss'

export const ListManga:FC = () => {
  return (
    <div className={`${styles.list} container`}>
        <div className={styles.list__title}>
            Манга
        </div>
        <div className={styles.listPreview}>
            {
                cartManga.map(el => (
                    <Preview 
                        key={Date.now()} 
                        description={el.description} 
                        img={el.img} 
                        name={el.name} 
                        rate={el.rate} 
                        tag={el.tag} 
                        title={el.title} 
                        path={el.path} 
                    />
                ))
            }
        </div>
    </div>
  )
}
