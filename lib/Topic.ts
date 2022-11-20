import { BlogInfo } from "./Blog"
import { CommunityInfo } from "./Community"
import { NewsletterInfo } from "./Newsletter"
import { PodcastInfo } from "./Podcast"
import { SocialLink } from "./SocialLink"

export interface Topic {
    id: string
    info: TopicInfo
    developers: DeveloperInfo[]
    blogs: BlogInfo[]
    newsletters: NewsletterInfo[]
    releases: ReleaseInfo[]
    communities: CommunityInfo[]
    podcasts: PodcastInfo[]
    latestrelease: ReleaseInfo
    book_ids: string[]
    course_ids: string[]
}

export interface TopicInfo {
    color: string
    name: string
    description: string
    shortDescription: string
    logo: string,
    tags: string[]
    scm: Scm
    changelog?: string
    latestVersion: string
    website: string
    documentation: string
    playground?: string
    issueTracker: string
    social: SocialLink[]
    license: License
    badges: Badge[]
}

export interface Badge {
    type: string
    url: string
}

export interface Developer {
    id: string
    info: DeveloperInfo
}

export interface DeveloperInfo {
    name: string
    website: string
    logoUrl: string
}

export interface Release {
    id: number
    info: ReleaseInfo
}

export interface ReleaseWithTopic extends Release {
    topic_info: TopicInfo
    topic: string;
}

export interface ReleaseInfo {
    version: string
    releaseNotesUrl: string | undefined
    publishedAt: string
}

export interface Scm {
    url: string
    displayName: string
    type: string
    meta: Object
}

export interface License {
    name: string
    url: string
}

export interface TopicFollow {
    topic_id: string
}