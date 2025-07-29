import { FC } from 'react'

import styles from './AnimeInfo.module.scss'
import { AnimePreview, FramesVideo, Role, Similar } from 'entities/Cart'
import { Related } from 'widgets/Related'
import { IAnime } from 'shared/types/animeType'
import { IAnimeRoles } from 'shared/types/animeRolesType'
import { IAnimeRelated } from 'shared/types/animeRelatedType'
import { IAnimeSimilar } from 'shared/types/animeSimilarType'

interface IProps {
    anime: IAnime,
    AnimeRole: IAnimeRoles[]
    AnimeRelated: IAnimeRelated[]
    AnimeSimilar: IAnimeSimilar[]
}

export const AnimeInfo: FC<IProps> = ({anime, AnimeRole, AnimeRelated, AnimeSimilar}) => {
    return (
        <div className={`${styles.anime} container`}>
            <AnimePreview anime={anime}/>
            <FramesVideo screen={anime.screenshots} video={anime.videos} />
            <Role Role={AnimeRole}/>
            <Related Related={AnimeRelated}/>
            <Similar similar={AnimeSimilar}/>
        </div>
    )
}
