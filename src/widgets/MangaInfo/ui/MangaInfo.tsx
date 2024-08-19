import { FC } from 'react'
import {IManga } from 'shared/types/mangaType'
import { IMangaRoles } from 'shared/types/mangaRolesType'
import { MangaPreview, Role, Similar } from 'entities/Cart'
import { Related } from 'widgets/Related'

import styles from './MangaInfo.module.scss'
import { IMangaRelated } from 'shared/types/mangaRelatedType'
import { IMangaSimilar } from 'shared/types/mangaSimilarTypes'

interface IProps {
    manga: IManga
    mangaRole: IMangaRoles[]
    mangaRelated: IMangaRelated[]
    mangaSimilar: IMangaSimilar[]
}

export const MangaInfo: FC<IProps> = ({manga, mangaRole, mangaRelated, mangaSimilar}) => {

    return (
        <div className={`${styles.manga} container`}>
            <MangaPreview manga={manga}/>
            <Role Role={mangaRole}/>
            <Related Related={mangaRelated}/>
            <Similar similar={mangaSimilar} />
        </div>
    )
}
