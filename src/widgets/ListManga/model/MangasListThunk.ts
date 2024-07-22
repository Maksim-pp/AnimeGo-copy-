import { AppDispatch } from 'app/store/AppStore';
import { axiosRequest } from "shared/api";
import { IMangas } from "shared/types/mangasType";
import MangasListSlice from './MangasListSlice';

export const fetchMangasList = async (dispatch: AppDispatch) => {
    try {
        dispatch(MangasListSlice.MangasFetching())
        const response = await axiosRequest.get<IMangas[]>('mangas/?limit=50')
        dispatch(MangasListSlice.MangasFetchingSuccess(response.data))
    } catch (error) {
        dispatch(MangasListSlice.MangasFetchingError('ошибка'))
    }
}