import { createSlice } from "@reduxjs/toolkit";
import { IMangaRelated } from "shared/types/mangaRelatedType";
import { fetchMangaRelated } from "./MangaRelatedThunk";

interface IState {
    mangaRelated: IMangaRelated[],
    isLoading: boolean,
    error: string,
}

const initialState:IState = {
    mangaRelated: [
        {
            relation: "",
            relation_russian: "",
            anime: null,
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

const mangaRelatedSlice = createSlice({
    name: 'RealatedSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMangaRelated.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchMangaRelated.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            state.mangaRelated = payload
        })
        .addCase(fetchMangaRelated.rejected, (state, {payload})=> {
            state.isLoading = false;
            if(payload) state.error = payload
        })
    }
})

export default mangaRelatedSlice.actions
export const mangaRelatedReducer = mangaRelatedSlice.reducer