import { axiosRequest } from "shared/api";
import { ICharacter } from "shared/types/characterType";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCharacter = createAsyncThunk<ICharacter, number, {rejectValue: string}>(
    'character/fetchCharacter', async (id, {rejectWithValue}) => {
        try {
            const response = await axiosRequest.get(`characters/${id}`)
            const data = response.data
            
            return data
        } catch {
            return rejectWithValue('Ошибка при попытке получить Персонажа')
        }
    }
)