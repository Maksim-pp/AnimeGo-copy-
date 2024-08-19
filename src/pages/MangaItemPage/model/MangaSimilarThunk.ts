import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "shared/api";
import { IMangaSimilar } from "shared/types/mangaSimilarTypes";

export const fecthMangaSimilar = createAsyncThunk<IMangaSimilar[], number, {rejectValue: string}>(
    'mangaSimilar/fecthMangaSimilar', async (id, {rejectWithValue}) => {
        try {
            const response = await axiosRequest.get(`mangas/${id}/similar`)
            const data = response.data
            return data
        } catch {
            return rejectWithValue('Произошла ошибка')
        }
    }
)