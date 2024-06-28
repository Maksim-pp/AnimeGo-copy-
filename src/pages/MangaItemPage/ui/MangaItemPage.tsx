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

const arr1 = [166.5, 947, 557, 130, 222.5, 223.9];
const arr2 = [0, 90, 0, 90, 180, 270];
1
const p2 = 223.9;
const deg = 270; 

const corX = Math.round(Math.cos(deg) * p2);
const corY = Math.round(Math.sin(deg) * p2);

console.log( corX, corY)