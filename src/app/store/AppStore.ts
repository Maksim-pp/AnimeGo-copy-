import { configureStore } from "@reduxjs/toolkit";
import { animeRelatedReducer } from "pages/AnimeItemPage/model/AnimeRelatedSlice";
import { AnimeRoleReducer } from "pages/AnimeItemPage/model/AnimeRoleSlice";
import { AnimeSimilarReducer } from "pages/AnimeItemPage/model/AnimeSimilarSlice";
import { AnimeReducer } from "pages/AnimeItemPage/model/AnimeSlice";
import { mangaRelatedReducer } from "pages/MangaItemPage/model/MangaRelatedSlice";
import { MangaRoleReducer } from "pages/MangaItemPage/model/MangaRoleSlice";
import { MangaSimilarReducer } from "pages/MangaItemPage/model/MangaSimilarSlice";
import { MangaReducer } from "pages/MangaItemPage/model/MangaSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { CharacterReducer } from "widgets/Character/model/CharacterSlice";
import { AnimeListReducer } from "widgets/ListAnime/model/AnimeListSlice";
import { MangasReducer } from "widgets/ListManga/model/MangasListSlice";
import { AnimeSeasonReducer } from "widgets/Slider/model/AnimeSeasonSlice";

const rootReducer = combineReducers({
    AnimeSeason: AnimeSeasonReducer,
    Animes: AnimeListReducer,
    anime: AnimeReducer,
    animeRole: AnimeRoleReducer,
    animeRelated: animeRelatedReducer,
    animeSimilar: AnimeSimilarReducer,
    Mangas: MangasReducer,
    manga: MangaReducer,
    mangaRole: MangaRoleReducer,
    mangaRelated: mangaRelatedReducer,
    mangaSimilar: MangaSimilarReducer,
    Character: CharacterReducer,
})

const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;

export default store