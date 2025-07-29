import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "shared/api";
import { IAnimeRoles } from "shared/types/animeRolesType";

export const fetchAnimeRole = createAsyncThunk<IAnimeRoles[], number, {rejectValue: string}>(
    'animeRole/fetchAnimeRole', async (id, {rejectWithValue}) => {
        try {
            const response = await axiosRequest.get(`animes/${id}/roles`);
            const data = response.data
            return data
        } catch {
            rejectWithValue('Извините, произошла ошибка, информация не нашлась')
        }
    }
)