import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMangas } from "shared/types/mangasType";

const MangasSlice = createSlice({
    name: 'Mangas',
    initialState: {
        mangas: <IMangas[]>[],
        isLoading: false,
        Error: '',
    },
    reducers: {
        MangasFetching (state) {
            state.isLoading = true;
        },
        MangasFetchingSuccess (state, {payload}:PayloadAction<IMangas[]>) {
            state.isLoading = false;
            state.Error = '';
            state.mangas = payload;
        },
        MangasFetchingError (state, {payload}:PayloadAction<string>) {
            state.isLoading = false;
            state.Error = payload
        }
    }
});

export default MangasSlice.actions

export const MangasReducer = MangasSlice.reducer