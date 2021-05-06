import { Author } from "./Author";

export interface Book {
    id: string
    info: BookInfo
    topics: string[]
}

export interface BookInfo {
    url: string
    image: string
    title: string
    description: string
    publishedAt: string
    authors: Author[]
    buyLinks: BookBuyLink[]
}

export interface BookBuyLink {
    url: string
}


"buyLinks": [{"url": ""}],