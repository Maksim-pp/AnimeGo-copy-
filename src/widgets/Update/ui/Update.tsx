import { FC } from 'react'
import { Unwraper } from 'features/Unwraper'

import styles from './Update.module.scss'
import { cartSeries } from 'entities/Cart/constants/cartSeries'

export const Update: FC = () => {
  return (
    <div className={styles.update}>
      <h2 className={styles.update__title}>
        Обновление аниме
      </h2>
      <Unwraper title='Сегодня' data={cartSeries}/>
      <Unwraper title='Вчера' data={cartSeries}/>
    </div>
  )
}
