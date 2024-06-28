import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { MangaInfo } from 'widgets/MangaInfo'
import { Review } from 'widgets/Review'

import styles from './MangaItemPage.module.scss'

export const MangaItemPage: FC = () => {
    const location = useLocation()
    const { img, name, tag, title, rate, description } = location.state
    return (
        <div className={styles.manga}>
            <MangaInfo 
                img={img}
                name={name}
                rate={rate}
                tag={tag}
                title={title}
                description={description}
            />
            <Review title={title}/>
        </div>
    )
}
