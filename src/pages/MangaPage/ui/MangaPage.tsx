import  { FC } from 'react'
import { ListManga } from 'widgets/ListManga'

import style from './MangaPage.module.scss'

export const MangaPage:FC = () => {
  return (
    <div className={style.manga}>
      <ListManga />
    </div>
  )
}
