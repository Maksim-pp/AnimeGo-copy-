import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "shared/api";
import { IMangaRoles } from "shared/types/mangaRolesType";

export const fetchMangaRole = createAsyncThunk<IMangaRoles[], number, {rejectValue: string}>(
    'MangaRole/fetchMangaRole', async (id, {rejectWithValue}) => {
        try {
            const response = await axiosRequest.get(`mangas/${id}/roles`);
            const data = response.data
            return data
        } catch {
            rejectWithValue('Извините, произошла ошибка, информация не нашлась')
        }
    }
)