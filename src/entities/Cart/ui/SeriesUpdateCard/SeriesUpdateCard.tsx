import { FC } from 'react'

import styles from './SeriesUpdateCard.module.scss'

interface IProps {
  img: string,
  title: string,
  series: string,
  text: string,
}

export const SeriesUpdateCard: FC<IProps> = ({ img, series, title, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardName}>
        <div>
          <img src={img} alt="" className={styles.cardName__img} />
        </div>
        <div className={styles.cardName__title}>{title}</div>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardInfo__number}>{series}</div>
        <div className={styles.cardInfo__text}>{text}</div>
      </div>
    </div>
  )
}
