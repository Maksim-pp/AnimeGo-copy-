export interface IAnime {
    id: number,
    name: string,
    russian: string,
    image: IImage
    url: string,
    kind: string,
    score: string,
    status: string,
    episodes: number,
    episodes_aired: number,
    aired_on: string,
    released_on: string,
    rating: string,
    english: [],
    japanese: [],
    synonyms: [],
    license_name_ru: string,
    duration: number,
    description: string,
    description_html:string,
    description_source:string,
    franchise: string,
    favoured: boolean,
    anons: boolean,
    ongoing: boolean,
    thread_id: number,
    topic_id: number,
    myanimelist_id: number,
    rates_scores_stats: IRatesScoresStats[],
    rates_statuses_stats: IRatesStatusesStats[],
    updated_at: string,
    next_episode_at: string,
    fansubbers: [],
    fandubbers: [],
    licensors: [],
    genres: IGenres[],
    studios: IStudios[],
    videos: IVideos[],
    screenshots: IScreenshots[],
}
export interface IImage {
    original: string,
    preview: string,
    x96: string,
    x48: string,
}

export interface IRatesScoresStats {
    name: number,
    value: number
}

export interface IRatesStatusesStats {
    name: string,
    value: number
}

export interface IGenres {
    id: number,
    name: string,
    russia: string,
    kind: string,
    entry_type: string
}

export interface IStudios {
    id: number,
    name: string,
    filtered_name: string,
    real: boolean,
    image: string
}

export interface IVideos {
    id: number,
    url: string,
    image_url: string,
    player_url: string,
    name: string,
    kind: string,
    hosting: string,
}

export interface IScreenshots{
    original: string,
    preview: string,
}