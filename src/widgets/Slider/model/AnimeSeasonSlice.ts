import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAnimes } from "shared/types/animesType";

const AnimeSeasonSlice = createSlice({
    name: 'animeSeason',
    initialState: {
        animeSeason: <IAnimes[]>[],
        isLoading: false,
        Error: ''
    },
    reducers: {
        animeSeasonFetching (state){
            state.isLoading = true
        },
        animeSeasonFetchingSuccess(state, {payload}:PayloadAction<IAnimes[]>){
            state.isLoading = false
            state.Error = ''
            state.animeSeason = payload
        },
        animeSeasonFetchingError(state, {payload}:PayloadAction<string>){
            state.isLoading = false
            state.Error = payload
        }
    }
})

export default AnimeSeasonSlice.actions

export const AnimeSeasonReducer = AnimeSeasonSlice.reducer