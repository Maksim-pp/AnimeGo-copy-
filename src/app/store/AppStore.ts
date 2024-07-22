import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { CharacterReducer } from "widgets/Character/model/CharacterSlice";
import { AnimeListReducer } from "widgets/ListAnime/model/AnimeListSlice";
import { MangasReducer } from "widgets/ListManga/model/MangasListSlice";
import { AnimeSeasonReducer } from "widgets/Slider/model/AnimeSeasonSlice";

const rootReducer = combineReducers({
    AnimeSeason: AnimeSeasonReducer,
    Mangas: MangasReducer,
    Animes: AnimeListReducer,
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