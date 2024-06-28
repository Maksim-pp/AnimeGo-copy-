import { FC } from 'react'

import styles from './Related.module.scss'
import { cartManga } from 'entities/Cart/constants'

// изменить пропсы и т.д

export const Related: FC = () => {
  return (
    <div className={styles.related}>
      <h2 className={styles.related__title}>Связаное</h2>
      <div className={styles.related__list}>
        {
          cartManga.map(el => (
            <div className={styles.item}>
              <div className={styles.item__title}>{el.title}</div>
              <div className={styles.itemInfo}>
                <img src={el.img} alt="" className={styles.itemInfo__img}/>
                <div className={styles.itemInfo__tag}>
                  {
                  el.tag.map(item => (
                    <div >{item}</div>
                  ))
                }
                </div>
                
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
