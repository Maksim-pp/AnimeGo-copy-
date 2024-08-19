import { createSlice } from "@reduxjs/toolkit";
import { IManga } from "shared/types/mangaType";
import { fetchManga } from "./MangaThunk";

interface IState {
    manga: IManga,
    isLoading: boolean,
    error: string
}

const initialState: IState = {
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
        released_on: "",
        english: [],
        japanese: [],
        synonyms: [],
        license_name_ru: "",
        description: "",
        description_html: "",
        description_source: "",
        franchise: "",
        favoured: false,
        anons: false,
        ongoing: false,
        thread_id: 0,
        topic_id: 0,
        myanimelist_id: 0,
        rates_scores_stats: [
            {
                name: 0,
                value: 0
            },
        ],
        rates_statuses_stats: [
            {
                name: '',
                value: 0
            },
        ],
        licensors: [],
        genres: [
            {
                id: 0,
                name: '',
                russia: '',
                kind: '',
                entry_type: ''
            },
        ],
        publishers: [
            {
                id: 0,
                name: '',
            },
        ]
    },
    isLoading: false,
    error: '',
}


const MangaSlice = createSlice({
    name: 'Mangas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchManga.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(fetchManga.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.manga = payload
        })
        .addCase(fetchManga.rejected, (state, {payload}) => {
            state.isLoading =  false;
            if (payload) state.error = payload
        })
    }
});

export default MangaSlice.actions

export const MangaReducer = MangaSlice.reducer