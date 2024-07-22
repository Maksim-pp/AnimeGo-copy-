import { AppDispatch } from "app/store/AppStore";
import CharacterSlice from "./CharacterSlice";
import { axiosRequest } from "shared/api";
import { ICharacter } from "shared/types/characterType";


export const fetchCharacter = async (dispatch: AppDispatch) => {
    try{
        dispatch(CharacterSlice.fetchCharacter());
        const response = await axiosRequest.get<ICharacter>(`characters/${7}`)
        dispatch(CharacterSlice.fetchCharacterSuccess(response.data))
    }catch{
        dispatch(CharacterSlice.fetchCharacterError('ошибка'))
    }
}