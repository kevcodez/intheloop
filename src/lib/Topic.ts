import { Blog } from "./Blog"
import { Book } from "./Book"
import { Community } from "./Community"
import { Course } from "./Course"
import { Newsletter } from "./Newsletter"
import { Podcast } from "./Podcast"
import { SocialLink } from "./SocialLink"

export interface Topic {
    color: string
    name: string
    description: string
    logo: string,
    tags: string[]
    scm: Scm
    latestRelease: Release
    website: string
    documentation: string
    playground: string
    issueTracker: string
    developers: Developer[]
    social: SocialLink[]
    license: License
    books: Book[]
    blogs: Blog[]
    newsletters: Newsletter[]
    releases: Release[]
    communities: Community[]
    podcasts: Podcast[]
    courses: Course[]
}

export interface Developer {
    name: string
    website: string
    logoUrl: string
}

export interface Release {
    version: string
    releaseNotesUrl: string
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