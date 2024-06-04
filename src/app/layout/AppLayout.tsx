import { FC } from 'react'
import { TheFooter } from 'widgets/TheFooter'
import { TheHeader } from 'widgets/TheHeader'

export const AppLayout:FC = () => {
  return (
    <div>
      <TheHeader />
      <TheFooter />
    </div>
  )
}
