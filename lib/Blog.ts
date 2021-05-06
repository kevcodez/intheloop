export interface Blog {
    id: number
    info: BlogInfo
}

export interface BlogInfo {
    name: string
    url: string
    official: boolean
}

export interface BlogPost {
    id: number
    info: BlogPostInfo
}

export interface BlogPostInfo {
    title: string
    link: string
    image: string
    publishedAt: string
}