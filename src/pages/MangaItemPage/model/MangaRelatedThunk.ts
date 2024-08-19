import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "shared/api";
import { IMangaRelated } from "shared/types/mangaRelatedType";

export const fetchMangaRelated = createAsyncThunk<IMangaRelated[], number, {rejectValue: string}>(
    'mangaRelated/fetchMangaRelated', async (id, {rejectWithValue}) => {
        try {
            const response = await axiosRequest.get(`mangas/${id}/related`);
            const data = response.data
            return data
        } catch {
            return rejectWithValue('Произошла ошибка')
        }
    }
)