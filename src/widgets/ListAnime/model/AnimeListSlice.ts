import { createSlice,  } from "@reduxjs/toolkit";
import { IAnime } from "shared/types/animeType";
import { fetchAnimeList } from "./AnimeListThunk";

export interface IState {
    animes: IAnime[] ;
    isLoading: boolean;
    error: string ;
}

const initialState: IState = {
    animes: [],
    isLoading: false,
    error: '',
};

const AnimeListSlice = createSlice({
    name: 'AnimeList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAnimeList.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(fetchAnimeList.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            state.animes = payload
        })
        .addCase(fetchAnimeList.rejected, (state, {payload}) => {
            state.isLoading = false;
            if (payload) state.error = payload;
        })
    }
})

export default AnimeListSlice.actions

export const AnimeListReducer = AnimeListSlice.reducer