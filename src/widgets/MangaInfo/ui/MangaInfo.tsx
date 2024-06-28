import { FC } from 'react'
import { MangaPreview } from 'entities/Cart'
import { Related } from 'widgets/Related'

import styles from './MangaInfo.module.scss'

interface IProps {
    img: string,
    rate: string,
    title: string,
    name: string,
    tag: string[],
    description: string,
}

export const MangaInfo: FC<IProps> = ({img, name, rate, tag, title, description}) => {

    return (
        <div className={`${styles.manga} container`}>
            <MangaPreview
                img={img}
                name={name}
                rate={rate}
                tag={tag}
                title={title}
                description={description}
            />
            <Related />
        </div>
    )
}
