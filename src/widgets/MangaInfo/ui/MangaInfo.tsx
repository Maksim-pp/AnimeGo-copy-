import { FC } from 'react'
import { MangaPreview } from 'entities/Cart'
import { Related } from 'widgets/Related'

import styles from './MangaInfo.module.scss'

interface IProps {
    img: string,
    rate: string,
    title: string,
    name: string,
}

export const MangaInfo: FC<IProps> = ({img, name, rate,  title}) => {

    return (
        <div className={`${styles.manga} container`}>
            <MangaPreview
                img={img}
                name={name}
                rate={rate}
                title={title}
            />
            <Related />
        </div>
    )
}
