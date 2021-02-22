export interface Blog {
    name: string
    url: string
    latestPosts: BlogPost[]
    official: boolean
}

export interface BlogPost {
    title: string
    link: string
    image: string
    publishedAt: string
}