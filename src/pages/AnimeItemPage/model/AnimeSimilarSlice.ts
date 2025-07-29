import { createSlice } from "@reduxjs/toolkit";
import { IAnimeSimilar } from "shared/types/animeSimilarType";
import { fecthAnimeSimilar } from "./AnimeSimilarThunk";

interface IState {
    animeSimilar: IAnimeSimilar[],
    isLoading: boolean,
    error: string,
}

const initialState: IState = {
    animeSimilar: [
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
        episodes: 0,
        episodes_aired: 0,
        aired_on: "",
        released_on: ""
        }
    ],
    isLoading: false,
    error: '',
} 

const AnimeSimilarSlice = createSlice({
    name: 'mangaSimilar',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fecthAnimeSimilar.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(fecthAnimeSimilar.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            state.animeSimilar = payload
        })
        .addCase(fecthAnimeSimilar.rejected, (state, {payload}) => {
            state.isLoading = false;
            if(payload) state.error = payload
        })
    },
})

export default AnimeSimilarSlice.actions
export const AnimeSimilarReducer = AnimeSimilarSlice.reducer 