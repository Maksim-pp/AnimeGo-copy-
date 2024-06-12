import  { FC } from 'react'
import { ListCharacters } from 'widgets/ListCharacters'

import styles from './CharactersPage.module.scss'

export const CharactersPage:FC = () => {
  return (
    <div className={styles.characters}>
      <ListCharacters />
    </div>
  )
}
