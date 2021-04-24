import { Author } from "./Author";

export interface Book {
    url: string
    image: string
    title: string
    description: string
    publishedAt: string
    authors: Author[]
}
