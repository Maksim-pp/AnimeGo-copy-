import { axiosRequest } from 'shared/api';
import { IAnime } from 'shared/types/animeType';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAnimeList = createAsyncThunk<IAnime[], undefined, { rejectValue: string }>(
    'animeList/fetchAnimeList', async ( _, {rejectWithValue} ) => {
        try{
            const response = await axiosRequest.get('animes/?limit=50');
            const data = await response.data;
            return data
        } catch(error) {
            return rejectWithValue('Ошибка при попытке получить список Аниме')
        }
    }
)