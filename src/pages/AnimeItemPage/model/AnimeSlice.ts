import { createSlice } from "@reduxjs/toolkit";
import { IAnime } from "shared/types/animeType";
import { fetchAnime } from "./AnimeThunk";

interface IState {
    anime: IAnime,
    isLoading: boolean,
    error: string
}

const initialState:IState = {
    anime: {
        id: 0,
    name: '',
    russian: '',
    image: {
        original: '',
        preview: '',
        x96: '',
        x48: '',
    },
    url: '',
    kind: '',
    score: '',
    status: '',
    episodes: 0,
    episodes_aired: 0,
    aired_on: '',
    released_on: '',
    rating: '',
    english: [],
    japanese: [],
    synonyms: [],
    license_name_ru: '',
    duration: 0,
    description: '',
    description_html: '',
    description_source: '',
    franchise: '',
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
        }
    ],
    rates_statuses_stats: [
        {
            name: '',
            value: 0
        }
    ],
    updated_at: '',
    next_episode_at: '',
    fansubbers: [],
    fandubbers: [],
    licensors: [],
    genres: [
        {
            id: 0,
            name: '',
            russia: '',
            kind: '',
            entry_type: ''
        }
    ],
    studios: [
        {
            id: 0,
            name: '',
            filtered_name: '',
            real: false,
            image: ''
        }
    ],
    videos: [
        {
            id: 0,
            url: '',
            image_url: '',
            player_url: '',
            name: '',
            kind: '',
            hosting: '',
        }
        
    ],
    screenshots: [
        {
            original: '',
            preview: '',
        }
    ],
    },
    error: '',
    isLoading: false,
}

const AnimeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAnime.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(fetchAnime.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.anime = payload;
        })
        .addCase(fetchAnime.rejected,  (state, {payload}) => {
            state.isLoading = false;
            if(payload) state.error = payload;
        })
    }
})

export default AnimeSlice.actions
export const AnimeReducer = AnimeSlice.reducer