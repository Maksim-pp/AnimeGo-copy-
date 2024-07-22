
import { AppDispatch } from "app/store/AppStore";
import { axiosRequest } from "shared/api";
import AnimeSeasonSlice from "./AnimeSeasonSlice";
import { IAnimes } from "shared/types/animesType";

export const fetchAnimeSeasonList = () => async (dispatch: AppDispatch)=>{
    try{
        dispatch(AnimeSeasonSlice.animeSeasonFetching())
        const response = await axiosRequest.get<IAnimes[]>('animes/?season=summer_2024&limit=50')
        dispatch(AnimeSeasonSlice.animeSeasonFetchingSuccess(response.data))
    }catch {
        dispatch(AnimeSeasonSlice.animeSeasonFetchingError('ошибка'))
    }
}