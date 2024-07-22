import { useAppDispatch } from 'app/store/AppStore'
import { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { fetchAnimeSeasonList } from 'widgets/Slider/api/fetchAnimeSeasonList'
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
