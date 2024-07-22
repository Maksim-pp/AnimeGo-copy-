import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { MangaInfo } from 'widgets/MangaInfo'
import { Review } from 'widgets/Review'

import styles from './MangaItemPage.module.scss'

export const MangaItemPage: FC = () => {
    const location = useLocation()
    const { id,
        name,
        russian,
        image,
        url,
        kind,
        score,
        status,
        volumes,
        released_on,
        chapters, } = location.state
    return (
        <div className={styles.manga}>
            <MangaInfo 
                img={image}
                name={name}
                rate={score}
                title={name}
            />
            <Review title={russian}/>
        </div>
    )
}
