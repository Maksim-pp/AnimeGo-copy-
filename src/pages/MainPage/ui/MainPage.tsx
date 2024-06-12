import { FC } from 'react'
import { LinkMainPage } from 'widgets/LinkMainPage'
import { Slider } from 'widgets/Slider'
import { ScheduleInformation } from 'widgets/ScheduleInformation'
import { ListNewAnime } from 'widgets/ListNewAnime'

import styles from './MainPage.module.scss'

export const MainPage:FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main} >
        <LinkMainPage />
        <Slider />
        <ScheduleInformation />
        <ListNewAnime />
      </div>
    </div>
  )
}
