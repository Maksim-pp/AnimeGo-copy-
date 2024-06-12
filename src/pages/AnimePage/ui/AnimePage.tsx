import { FC } from 'react'

import styles from './AnimePage.module.scss'
import { ListAnime } from 'widgets/ListAnime'

export const AnimePage:FC = () => {
  return (
    <div className={styles.anime}>
      <ListAnime />
    </div>
  )
}
