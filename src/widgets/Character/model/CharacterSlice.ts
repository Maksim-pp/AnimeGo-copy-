import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "shared/types/characterType";

const CharacterSlice = createSlice({
    name: 'Character',
    initialState: {
        Character: <ICharacter>{}, 
        isLoading: false,
        Error: '',
        Id: 0, 
    },
    reducers: {
        fetchCharacter (state) {
            state.isLoading = true;
        },
        fetchCharacterSuccess(state, {payload}:PayloadAction<ICharacter>) {
            state.isLoading = false;
            state.Character = payload;
        },
        fetchCharacterError(state, {payload}:PayloadAction<string>){
            state.isLoading = false;
            state.Error = payload;
        },
        randomId(state) {
            state.Id
        }
    }
})

export default CharacterSlice.actions

export const CharacterReducer = CharacterSlice.reducer