import { axiosRequest } from "shared/api";
import { IManga } from 'shared/types/mangaType';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchMangasList = createAsyncThunk<IManga[], undefined, { rejectValue: string }>(
    'mangaList/fetchMangasList', async (_, { rejectWithValue }) => {
        try{
            const response = await axiosRequest.get(`mangas/?limit=50/`);
            const data = response.data
            return data
        } catch {
            return rejectWithValue('Ошибка при попытке получить список Манги')
        }

    }
)