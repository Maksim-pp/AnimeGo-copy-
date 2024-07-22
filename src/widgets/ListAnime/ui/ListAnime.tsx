import { FC } from 'react'
import { Preloader } from 'shared/index'
import { cartAnime } from 'entities/Cart/constants'
import { Preview } from 'entities/Cart'
import { useAppSelector } from 'app/store/AppStore'

import styles from './ListAnime.module.scss'
import { Routes } from 'shared/constants'

export const ListAnime: FC = () => {
  const { Animes, Error, isLoading } = useAppSelector(state => state.Animes)

  if (isLoading) {
    return (
      <section className='preloader'>
        <Preloader />
      </section>
    )
  }
  if (Error) { return <section className='error'>Ивините! Произошла ошибка</section> }

  return (
    <div className={`${styles.list} container`}>
      <div className={styles.list__title}>
        Список аниме
      </div>
      <div className={styles.listPreview}>
        {
          Animes.map(el => (
            <Preview 
              key={el.id}
              id={el.id} 
              image={el.image.original} 
              kind={el.kind} 
              name={el.name} 
              aired_on={el.aired_on} 
              score={el.score} 
              path={Routes.ANIME}
              released_on={el.released_on}
              russian={el.russian}
              status={el.status}
              url={el.url}
            />
          ))
        }
      </div>
    </div>
  )
}
