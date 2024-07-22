export interface IMangas{
    id: number,
    name: string,
    russian: string,
    image: IImage
    url: string,
    kind: string,
    score: string,
    status: string,
    volumes: number,
    chapters: number,
    aired_on: string,
    released_on: string,
}

interface IImage {
    original: string,
    preview: string,
    x96: string,
    x48: string,
}