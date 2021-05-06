export interface Community {
    id: string
    info: CommunityInfo
}

export interface CommunityInfo {
    official?: boolean
    type: string
    url: string
    name: string
}