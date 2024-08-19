import { createSlice } from "@reduxjs/toolkit";
import { ICharacter } from "shared/types/characterType";
import { fetchCharacter } from "./CharacterThunk";

interface IState {
    Character: ICharacter,
    isLoading: boolean,
    error: string,
}

const initialState: IState = {
    Character: {
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
        altname: "",
        japanese: "",
        description: "",
        description_html: "",
        description_source: "",
        favoured: false,
        thread_id: 0,
        topic_id: 0,
        updated_at: "",
        seyu: [],
        animes: [],
        mangas: []
    },
    isLoading: false,
    error: '',
}

const CharacterSlice = createSlice({
    name: 'Character',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCharacter.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(fetchCharacter.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.Character = payload
        })
        .addCase(fetchCharacter.rejected, (state, {payload}) => {
            state.isLoading = false
            if(payload) state.error = payload
        })
    }
})

export default CharacterSlice.actions

export const CharacterReducer = CharacterSlice.reducer