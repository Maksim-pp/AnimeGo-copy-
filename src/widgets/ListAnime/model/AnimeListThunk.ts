import { axiosRequest } from 'shared/api';
import { IAnime } from 'shared/types/animeType';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAnimeList = createAsyncThunk<IAnime[], number, { rejectValue: string }>(
    'animeList/fetchAnimeList', async ( page, {rejectWithValue} ) => {
        try{
            const response = await axiosRequest.get(`animes/?limit=50&page=${page}/`);
            const data = await response.data;
            // console.log(response);
            
            return data
            
        } catch(error) {
            return rejectWithValue('Ошибка при попытке получить список Аниме')
        }
    }
)