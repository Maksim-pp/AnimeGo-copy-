import { FC } from 'react'

import styles from './Related.module.scss'
import { IMangaRelated } from 'shared/types/mangaRelatedType'

// изменить тип на оператор или "|"

interface IProps {
  Related: IMangaRelated[] ,
}

export const Related: FC<IProps> = ({Related}) => {
  return (
    <div className={styles.related}>
      <h2 className={styles.related__title}>Связаное</h2>
      <div className={styles.related__list}>
        {
          Related.map(el => (
            <div className={styles.item}>
              <div className={styles.itemInfo}>
                {
                  el.manga == null ?  <div></div> : <div className={styles.itemInfo__block}>
                    <img src={`https://shikimori.one/${el.manga.image.x48}`} alt="" />
                    <div>
                      <div className={styles.item__title}>{el.manga.russian}</div>
                      <div className={styles.item__subtitle}>{el.manga.kind} / {el.manga.released_on}</div>
                      <div className={styles.item__subtitle}>{el.relation_russian}</div>
                    </div>
                  </div>
                }
                {
                  el.anime == null ? <div></div> : <div>
                    
                  </div>
                }
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
