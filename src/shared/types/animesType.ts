export interface IAnimes{
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
}

interface IImage {
    original: string,
    preview: string,
    x96: string,
    x48: string,
}