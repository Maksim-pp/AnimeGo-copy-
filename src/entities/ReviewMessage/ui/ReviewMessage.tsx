import { FC } from 'react'

import styles from './ReviewMessage.module.scss'
import { MyButton } from 'shared/index'

interface IProps {
  title: string
}

export const ReviewMessage:FC<IProps> = ({title}) => {
  return (
    <div className={styles.message}>
        <h2 className={styles.message__title}>Здесь пока нет рецензий и отзывов к "{title}", хотите написать?</h2>
        <MyButton className={styles.button}>Написать отзыв</MyButton>
    </div>
  )
}
