import { FC } from 'react'

import styles from './Similar.module.scss'
import { IMangaSimilar } from 'shared/types/mangaSimilarTypes'

// добавить типы  с оператором или '|'

interface IProps {
    similar: IMangaSimilar[]
}

export const Similar: FC<IProps> = ({ similar }) => {
    return (
        <div className={styles.similar}>
            <h2 className={styles.similar__title}>Схожее</h2>
            <div className={styles.similar__list}>
                {
                    similar.map((el) => (
                        <div key={el.id}>
                            <img src={`https://shikimori.one/${el.image.preview}`} alt="" />
                            <div>
                                <div className={styles.item__title}>{el.russian}</div>
                                <div className={styles.item__subtitle}>{el.kind} / {el.released_on}</div>
                                <div className={styles.item__subtitle}>{el.status}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
