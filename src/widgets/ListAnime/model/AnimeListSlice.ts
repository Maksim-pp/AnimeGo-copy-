import { createSlice,  } from "@reduxjs/toolkit";
import { IAnime } from "shared/types/animeType";
import { fetchAnimeList } from "./AnimeListThunk";

export interface IState {
    page: number;
    animes: IAnime[] ;
    isLoading: boolean;
    error: string ;
}

const initialState: IState = {
    page:  1,
    animes: [],
    isLoading: false,
    error: '',
};

const AnimeListSlice = createSlice({
    name: 'AnimeList',
    initialState,
    reducers: {
        next(state) {
            state.page += 1;
        },
        prev(state) {
            state.page -= 1;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAnimeList.pending, (state, {payload})=> {
            state.isLoading = true;
        })
        .addCase(fetchAnimeList.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            state.animes = payload;
        })
        .addCase(fetchAnimeList.rejected, (state, {payload}) => {
            state.isLoading = false;
            if (payload) state.error = payload;
        })
        
    }
})

export default AnimeListSlice.actions

export const AnimeListReducer = AnimeListSlice.reducer

