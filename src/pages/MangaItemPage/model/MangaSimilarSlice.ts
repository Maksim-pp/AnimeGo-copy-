import { createSlice } from "@reduxjs/toolkit";
import { IMangaSimilar } from "shared/types/mangaSimilarTypes";
import { fecthMangaSimilar } from "./MangaSimilarThunk";

interface IState {
    mangaSimilar: IMangaSimilar[],
    isLoading: boolean,
    error: string,
}

const initialState: IState = {
    mangaSimilar: [
        {
            id: 0,
            russian: "",
            name: "",
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
    ],
    isLoading: false,
    error: '',
} 

const MangaSimilarSlice = createSlice({
    name: 'mangaSimilar',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fecthMangaSimilar.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(fecthMangaSimilar.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            state.mangaSimilar = payload
        })
        .addCase(fecthMangaSimilar.rejected, (state, {payload}) => {
            state.isLoading = false;
            if(payload) state.error = payload
        })
    },
})

export default MangaSimilarSlice.actions
export const MangaSimilarReducer = MangaSimilarSlice.reducer 