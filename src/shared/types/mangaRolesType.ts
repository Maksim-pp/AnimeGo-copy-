export interface IMangaRoles {
    roles: [],
    roles_russian: [],
    character : ICharacter | null,
    person: IPerson | null,
    url: string
}

interface ICharacter {
    id: number,
    name: string,
    russian: string,
    image: IImage,
    url: string
}

interface IPerson {
    id: number,
    name: string,
    russian: string,
    image: IImage,
    url: string
}

interface IImage {
    original: string,
    preview: string,
    x96: string,
    x48: string,
}