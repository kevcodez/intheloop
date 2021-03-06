import { Blog } from "./Blog"
import { Book } from "./Book"
import { Community } from "./Community"
import { Course } from "./Course"
import { Newsletter } from "./Newsletter"
import { Podcast } from "./Podcast"
import { SocialLink } from "./SocialLink"

export interface Topic {
    id: string
    info: TopicInfo
    developers: Developer[]
    books: Book[]
    blogs: Blog[]
    newsletters: Newsletter[]
    releases: Release[]
    communities: Community[]
    podcasts: Podcast[]
    courses: Course[]
    latestrelease: Release
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
    name: string
    website: string
    logoUrl: string
}

export interface Release {
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