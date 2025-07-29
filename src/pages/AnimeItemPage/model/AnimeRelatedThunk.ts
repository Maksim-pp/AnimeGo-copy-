import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "shared/api";
import { IAnimeRelated } from "shared/types/animeRelatedType";

export const fetchAnimeRelated = createAsyncThunk<IAnimeRelated[], number, {rejectValue: string}>(
    'animeRelated/fetchAnimeRelated', async (id, {rejectWithValue}) => {
        try {
            const response = await axiosRequest.get(`animes/${id}/related`);
            const data = response.data
            return data
        } catch {
            return rejectWithValue('Произошла ошибка')
        }
    }
)