export interface IAnime {
    id: string,
    malId:string, 
    name: string,
    russian: string,
    licenseNameRu: string,
    english: string,
    japanese: string,
    kind: string,
    rating: string,
    score: number,
    status: string,
    episodes: number,
    episodesAired: number,
    duration: number,
    airedOn: IAiredOn,
    releasedOn: IReleasedOn,
    url: string,
    season: string,
    image: IPoster,
    genres: IGenres[],
    studios: IStudios[],
    personRoles: IPersonRoles[],
    characterRoles: ICharacterRoles[],
    related: IRelated[],
    video: IVideo[],
    screenshots: IScreenshots[],
    description: string,
    path?: string | undefined,
}

interface IAiredOn {
    year: number,
    month: number,
    day: number,
    date: string
}
interface IReleasedOn {
    year: number,
    month: number,
    day: number,
    date: string
}
interface IPoster {
    original: string,
    preview: string,
    x96: string,
    x48: string,
}

interface IGenres {
    id: string,
    name: string, 
    russian: string,
    kind: string,
}
interface IStudios {
    id: string,
    name: string,
    imageUrl: string,
}

//  ------- IPersonRoles-------
interface IPersonRoles{
    id: string,
    rolesRu: [],
    rolesEn: [],
    person: IPerson,
}

interface IPerson {
    id:string,
    name: string,
    poster: IPersonPoster,
}
interface IPersonPoster {
    id: string
}

// ------ IPersonRoles ------
interface ICharacterRoles{
    id: string,
    rolesRu: [],
    rolesEn: [],
    person: ICharacter,
}

interface ICharacter {
    id:string,
    name: string,
    poster: ICharacterPoster,
}
interface ICharacterPoster {
    id: string
}

// -----IRelated -----
interface IRelated {
    id: string,
    anime: IRelatedAnime,
    manga: IRelatedManga,
    relationKind: string,
    relationText: string,
}
interface IRelatedAnime {
    id: string,
    name: string,
}
interface IRelatedManga {
    id: string,
    name: string,
}
// ----

interface IVideo{
    id: string,
    url: string,
    name: string,
    kind: string,
    playerUrl: string,
    imageUrl: string,
}
interface IScreenshots {
    id: string,
    originalUrl: string,
    x166Url: string,
    x332Url: string,
}