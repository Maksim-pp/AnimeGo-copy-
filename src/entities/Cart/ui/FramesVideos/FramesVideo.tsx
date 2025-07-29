import { FC } from 'react'

import styles from './FramesVideo.module.scss'
import { IScreenshots, IVideos } from 'shared/types/animeType'

interface IProps {
    screen: IScreenshots[],
    video: IVideos[],
}

export const FramesVideo: FC<IProps> = ({screen, video}) => {
    return (
        <div className={styles.framesVideo}>
            <h2 className={styles.framesVideo__title}>Кадры и Трейлер</h2>
            <div className={styles.framesVideo__list}>
                {
                    screen.map((el)=> (
                        <div>
                            <img src={`https://shikimori.one/${el.original}`} alt='screen'  className={styles.screen}/>
                        </div>
                    ))
                }
                {
                    video.map((el)=>(
                        <div>
                            <iframe width={300} height={200} src={el.player_url} allowFullScreen/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
