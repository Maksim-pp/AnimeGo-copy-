import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { TheFooter } from 'widgets/TheFooter'
import { TheHeader } from 'widgets/TheHeader'

export const AppLayout: FC = () => {
  return (
    <div>
      <TheHeader />
      <main>
        <Outlet />
      </main>
      <TheFooter />
    </div>
  )
}
