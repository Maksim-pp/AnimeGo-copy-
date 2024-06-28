import { FC } from 'react'
import { ReviewMessage } from 'entities/ReviewMessage'

import styles from './Review.module.scss'

// доделать вариант со списком review

interface IProps {
    title: string,
}

export const Review:FC<IProps> = ({title}) => {

return (
    <div className={`${styles.review} container`}>
        <ReviewMessage title={title}/>
    </div>
  )
}
