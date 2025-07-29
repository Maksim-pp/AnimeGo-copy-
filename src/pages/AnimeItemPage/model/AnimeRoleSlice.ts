import { createSlice } from "@reduxjs/toolkit";
import { IMangaRoles } from "shared/types/mangaRolesType";
import { fetchAnimeRole } from "./AnimeRoleThunk";


interface IState {
    animeRole: IMangaRoles[],
    isLoading: boolean,
    error: string,
}

const initialState: IState = {
    animeRole: [
        {
            roles: [],
            roles_russian: [],
            character: {
                id: 0,
                name: "",
                russian: "",
                image: {
                    original: "",
                    preview: "",
                    x96: "",
                    x48: ""
                },
                url: ""
            },
            person: {
                id: 0,
                name: "",
                russian: "",
                image: {
                    original: "",
                    preview: "",
                    x96: "",
                    x48: ""
                },
                url: ""
            },
            url: ""
        }
    ],
    isLoading: false,
    error: '',
}

const AnimeRoleSlice = createSlice({
    name: 'MangaRole',
    initialState,
    reducers: {},
    extraReducers: (builer) => {
        builer
        .addCase(fetchAnimeRole.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchAnimeRole.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.animeRole = payload;
        })
        .addCase(fetchAnimeRole.rejected, (state, {payload}) => {
            state.isLoading = false;
            if(payload) state.error = payload;
        })
    }
})

export default AnimeRoleSlice.actions
export const AnimeRoleReducer = AnimeRoleSlice.reducer