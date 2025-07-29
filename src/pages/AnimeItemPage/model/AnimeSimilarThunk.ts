import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "shared/api";
import { IAnimeSimilar } from "shared/types/animeSimilarType";

export const fecthAnimeSimilar = createAsyncThunk<IAnimeSimilar[], number, {rejectValue: string}>(
    'animesSimilar/fecthAnimesSimilar', async (id, {rejectWithValue}) => {
        try {
            const response = await axiosRequest.get(`animes/${id}/similar`)
            const data = response.data
            console.log(data);
            
            return data
        } catch {
            return rejectWithValue('Произошла ошибка')
        }
    }
)