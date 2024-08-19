export interface IManga{
    id: number,
    name: string,
    russian: string,
    image: IImage,
    url: string,
    kind: string,
    score: string,
    status: string,
    volumes: number,
    chapters: number,
    aired_on: string,
    released_on: string,
    english: [],
    japanese: [],
    synonyms: [],
    license_name_ru: string,
    description: string,
    description_html:string,
    description_source: string,
    franchise: string,
    favoured: boolean,
    anons: boolean,
    ongoing: boolean,
    thread_id: number,
    topic_id: number,
    myanimelist_id: number,
    rates_scores_stats: IRatesScoresStats[],
    rates_statuses_stats: IRatesStatusesStats[],
    licensors: [],
    genres: IGenres[],
    publishers: IPublishers[]
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

export interface IPublishers {
    id: number,
    name: string,
}