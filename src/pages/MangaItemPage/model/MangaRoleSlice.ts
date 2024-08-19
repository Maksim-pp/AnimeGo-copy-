import { createSlice } from "@reduxjs/toolkit";
import { IMangaRoles } from "shared/types/mangaRolesType";
import { fetchMangaRole } from "./MangaRoleThunk";


interface IState {
    mangaRole: IMangaRoles[],
    isLoading: boolean,
    error: string,
}

const initialState: IState = {
    mangaRole: [
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

const MangaRoleSlice = createSlice({
    name: 'MangaRole',
    initialState,
    reducers: {},
    extraReducers: (builer) => {
        builer
        .addCase(fetchMangaRole.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchMangaRole.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.mangaRole = payload;
        })
        .addCase(fetchMangaRole.rejected, (state, {payload}) => {
            state.isLoading = false;
            if(payload) state.error = payload;
        })
    }
})

export default MangaRoleSlice.actions
export const MangaRoleReducer = MangaRoleSlice.reducer