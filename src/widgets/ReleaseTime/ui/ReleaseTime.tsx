import { FC } from 'react'

import styles from './ReleaseTime.module.scss'
import { Unwraper } from 'features/Unwraper'
import { cartReleaseSeries } from 'entities/Cart/constants/cartSeries'

export const ReleaseTime:FC = () => {
  return (
    <div className={styles.release}>
        <h2 className={styles.release__title}>
            Расписание аниме<br />
            <span>
            Внимание! В графике указаны даты выхода эпизодов на телеэкранах Японии. На сайте появится в течение дня либо на следующий день.
            </span>
        </h2>
        <Unwraper title='Понедельник' data={cartReleaseSeries}/>
        <Unwraper title='Вторник' data={cartReleaseSeries}/>
        <Unwraper title='Среда' data={cartReleaseSeries}/>
        <Unwraper title='Четверг' data={cartReleaseSeries}/>
        <Unwraper title='Пятница' data={cartReleaseSeries}/>
        <Unwraper title='Суббота' data={cartReleaseSeries}/>
        <Unwraper title='Воскресенье' data={cartReleaseSeries}/>
    </div>
  )
}
