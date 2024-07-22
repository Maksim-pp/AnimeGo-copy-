import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnimes } from "shared/types/animesType";

const AnimeListSlice = createSlice({
    name: 'AnimeList',
    initialState: {
        Animes: <IAnimes[]>[],
        isLoading: false,
        Error: '',
    },
    reducers: {
        AnimeFetching(state)  {
            state.isLoading = true;
        },
        AnimeFetchingSuccess(state, {payload}:PayloadAction<IAnimes[]>){
            state.isLoading = false;
            state.Animes = payload;
            state.Error = '';
        },
        AnimeFetchingError(state, {payload}:PayloadAction<string>) {
            state.isLoading = false;
            state.Error = payload;
        }
    }
})

export default AnimeListSlice.actions

export const AnimeListReducer = AnimeListSlice.reducer