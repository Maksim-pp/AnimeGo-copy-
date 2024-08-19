import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMangas } from "shared/types/mangasType";
import { IManga } from "shared/types/mangaType";
import { fetchMangasList } from "./MangasListThunk";

export interface IState {
    mangas: IManga[] ;
    isLoading: boolean;
    error: string ;
}

const initialState: IState = {
    mangas: [],
    isLoading: false,
    error: '',
};

const MangasSlice = createSlice({
    name: 'Mangas',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchMangasList.pending,   (state)=>{
            state.isLoading = true
        })
        .addCase(fetchMangasList.fulfilled, (state, {payload})=> {
            state.isLoading = false,
            state.mangas = payload
        })
        .addCase(fetchMangasList.rejected, (state, {payload}) => {
            state.isLoading = false
            if (payload) state.error = payload
        })
    },
});

export default MangasSlice.actions

export const MangasReducer = MangasSlice.reducer