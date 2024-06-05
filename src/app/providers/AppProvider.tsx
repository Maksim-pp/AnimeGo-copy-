import { FC } from 'react'
import { Provider } from 'react-redux';
import { AppRouter } from '../router';
import store from '../store/AppStore';



export const AppProvider: FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
