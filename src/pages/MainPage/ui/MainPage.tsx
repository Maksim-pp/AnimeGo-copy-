import { FC } from 'react'

import styles from './MainPage.module.scss'
import { LinkMainPage } from 'widgets/LinkMainPage'

export const MainPage:FC = () => {
  return (
    <div className={styles.page}>
      <div className={`${styles.main} container`}>
        <LinkMainPage />
      </div>
    </div>
  )
}
