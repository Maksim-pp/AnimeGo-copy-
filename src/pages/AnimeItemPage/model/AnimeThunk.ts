import { axiosRequest } from "shared/api";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAnime } from "shared/types/animeType";


export const fetchAnime = createAsyncThunk<IAnime, number, { rejectValue:string }>(
    'anime/fetchAnime', async (id, { rejectWithValue }) => {
        try{
            const response = await axiosRequest.get(`animes/${id}`)
            const data = response.data
            return data
        } catch {
            return rejectWithValue('Извините, произошла ошибка, аниме не нашлось')
        }
    }
)