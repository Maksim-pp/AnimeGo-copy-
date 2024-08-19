import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Preloader } from 'shared/index'
import { CharacterInManga } from 'widgets/CharacterInManga'
import { Characters } from 'widgets/Character'
import { CharacterInSeries } from 'widgets/CharacterInSeries'
import { fetchCharacter } from 'widgets/Character/model/CharacterThunk'
import { useAppDispatch, useAppSelector } from 'app/store/AppStore'

import styles from './CharacterPage.module.scss'

export const CharacterPage: FC = () => {
  const location = useLocation()
  const { id } =location.state

  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(fetchCharacter(id))
  },[])

  const {Character, error, isLoading} = useAppSelector(state => state.Character)
  
  if (isLoading) {
    return (
        <section className='preloader'>
            <Preloader />
        </section>
    )
}
if (error) { return <section className='error'>Ивините! Произошла ошибка</section> }

  return (
    <div className={styles.character}>
      <Characters  Character={Character} />
      <CharacterInSeries   Character={Character}  />
      <CharacterInManga Character={Character} />
    </div>
  )
}
