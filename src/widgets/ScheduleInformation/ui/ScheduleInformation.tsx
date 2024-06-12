import { FC } from 'react'

import styles from './ScheduleInformation.module.scss'
import { Update } from 'widgets/Update'
import { ReleaseTime } from 'widgets/ReleaseTime'
import { ListReleased } from 'widgets/ListReleased'

export const ScheduleInformation: FC = () => {
  return (
    <div className={`${styles.block} container`}>
      <Update />
      <ReleaseTime />
      <ListReleased />
    </div>
  )
}
