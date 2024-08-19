import { axiosRequest } from "shared/api";
import { IManga } from 'shared/types/mangaType';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchManga = createAsyncThunk<IManga, number, { rejectValue:string }>(
    'manga/fetchManga', async (id, { rejectWithValue }) => {
        try{
            const response = await axiosRequest.get(`mangas/${id}`)
            const data = response.data
            return data
        } catch {
            return rejectWithValue('Извините, произошла ошибка, манга не нашлась')
        }
    }
)