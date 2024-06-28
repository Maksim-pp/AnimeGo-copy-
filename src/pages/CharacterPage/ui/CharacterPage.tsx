import { FC } from 'react'
import { Character } from 'widgets/Character'

import styles from './CharacterPage.module.scss'
import { CharacterInSeries } from 'widgets/CharacterInSeries'

export const CharacterPage: FC = () => {

  return (
    <div className={styles.character}>
      <Character />
      <CharacterInSeries />
    </div>
  )
}
