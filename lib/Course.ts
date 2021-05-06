import { Author } from './Author'

export interface Course {
  id: string
  info: CourseInfo
}

export interface CourseInfo {
  name: string
  publishedAt?: string
  price: string
  url: string
  image: string
  description: string
  authors: Author[]
  platform: CoursePlatform
  interactive: boolean
  free: boolean
}

export enum CoursePlatform {
  EGGHEAD = "EGGHEAD",
  UDEMY = "UDEMY",
  OTHER = "OTHER"
}
