import { createSlice } from "@reduxjs/toolkit";
import { IMangaRelated } from "shared/types/mangaRelatedType";
import { fetchAnimeRelated } from "./AnimeRelatedThunk";

interface IState {
    animeRelated: IMangaRelated[],
    isLoading: boolean,
    error: string,
}

const initialState:IState = {
    animeRelated: [
        {
            relation: "",
            relation_russian: "",
            anime: {
                id: 0,
                name: "",
                russian: "",
                image: {
                    original: "",
                    preview: "",
                    x96: "",
                    x48: ""
                },
                url: "",
                kind: "",
                score: "",
                status: "",
                episodes: 0,
                episodes_aired: 0,
                aired_on: "",
                released_on: ""
            } ,
            manga: {
                id: 0,
                name: "",
                russian: "",
                image: {
                    original: "",
                    preview: "",
                    x96: "",
                    x48: ""
                },
                url: "",
                kind: "",
                score: "",
                status: "",
                volumes: 0,
                chapters: 0,
                aired_on: "",
                released_on: ""
            } 
        }
    ],
    isLoading: false,
    error: '',
}

const animeRelatedSlice = createSlice({
    name: 'RealatedSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAnimeRelated.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchAnimeRelated.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            state.animeRelated = payload
        })
        .addCase(fetchAnimeRelated.rejected, (state, {payload})=> {
            state.isLoading = false;
            if(payload) state.error = payload
        })
    }
})

export default animeRelatedSlice.actions
export const animeRelatedReducer = animeRelatedSlice.reducer