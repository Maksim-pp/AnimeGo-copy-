import { AppDispatch } from 'app/store/AppStore';
import AnimeListSlice from './AnimeListSlice';
import { axiosRequest } from 'shared/api';
import { IAnimes } from 'shared/types/animesType';

export const fetchAnimeList = async (dispatch: AppDispatch) =>{
    try {
        dispatch(AnimeListSlice.AnimeFetching())
        const response = await axiosRequest.get<IAnimes[]>('animes/?limit=50');
        dispatch(AnimeListSlice.AnimeFetchingSuccess(response.data));
    } catch {
        dispatch(AnimeListSlice.AnimeFetchingError('ошибка'))
    }
}