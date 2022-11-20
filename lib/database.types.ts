export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog: {
        Row: {
          id: string
          info: Json | null
          topics: string[] | null
        }
        Insert: {
          id: string
          info?: Json | null
          topics?: string[] | null
        }
        Update: {
          id?: string
          info?: Json | null
          topics?: string[] | null
        }
      }
      blog_posts: {
        Row: {
          id: number
          blog_id: string | null
          info: Json
          topics: string[]
          language: string | null
          published_at: string | null
        }
        Insert: {
          id?: number
          blog_id?: string | null
          info: Json
          topics?: string[]
          language?: string | null
          published_at?: string | null
        }
        Update: {
          id?: number
          blog_id?: string | null
          info?: Json
          topics?: string[]
          language?: string | null
          published_at?: string | null
        }
      }
      book: {
        Row: {
          id: string
          info: Json | null
          authors: string[] | null
          topics: string[]
        }
        Insert: {
          id: string
          info?: Json | null
          authors?: string[] | null
          topics?: string[]
        }
        Update: {
          id?: string
          info?: Json | null
          authors?: string[] | null
          topics?: string[]
        }
      }
      community: {
        Row: {
          id: string
          info: Json | null
        }
        Insert: {
          id: string
          info?: Json | null
        }
        Update: {
          id?: string
          info?: Json | null
        }
      }
      contact: {
        Row: {
          id: number
          email: string | null
          message: string | null
        }
        Insert: {
          id?: number
          email?: string | null
          message?: string | null
        }
        Update: {
          id?: number
          email?: string | null
          message?: string | null
        }
      }
      course: {
        Row: {
          id: string
          info: Json | null
          topics: string[]
        }
        Insert: {
          id: string
          info?: Json | null
          topics?: string[]
        }
        Update: {
          id?: string
          info?: Json | null
          topics?: string[]
        }
      }
      developer: {
        Row: {
          id: string
          info: Json | null
        }
        Insert: {
          id: string
          info?: Json | null
        }
        Update: {
          id?: string
          info?: Json | null
        }
      }
      newsletter: {
        Row: {
          id: string
          info: Json | null
        }
        Insert: {
          id: string
          info?: Json | null
        }
        Update: {
          id?: string
          info?: Json | null
        }
      }
      podcast: {
        Row: {
          id: string
          info: Json | null
        }
        Insert: {
          id: string
          info?: Json | null
        }
        Update: {
          id?: string
          info?: Json | null
        }
      }
      release: {
        Row: {
          id: number
          topic: string | null
          info: Json | null
          published_at: string | null
        }
        Insert: {
          id?: number
          topic?: string | null
          info?: Json | null
          published_at?: string | null
        }
        Update: {
          id?: number
          topic?: string | null
          info?: Json | null
          published_at?: string | null
        }
      }
      topic: {
        Row: {
          info: Json | null
          id: string
          developers: string[] | null
          books: string[] | null
          blogs: string[] | null
          newsletters: string[] | null
          communities: string[] | null
          podcasts: string[] | null
          courses: string[] | null
        }
        Insert: {
          info?: Json | null
          id?: string
          developers?: string[] | null
          books?: string[] | null
          blogs?: string[] | null
          newsletters?: string[] | null
          communities?: string[] | null
          podcasts?: string[] | null
          courses?: string[] | null
        }
        Update: {
          info?: Json | null
          id?: string
          developers?: string[] | null
          books?: string[] | null
          blogs?: string[] | null
          newsletters?: string[] | null
          communities?: string[] | null
          podcasts?: string[] | null
          courses?: string[] | null
        }
      }
      topic_follow: {
        Row: {
          user_id: string
          topic_id: string
        }
        Insert: {
          user_id: string
          topic_id: string
        }
        Update: {
          user_id?: string
          topic_id?: string
        }
      }
      tweets: {
        Row: {
          topics: string[]
          info: Json
          id: string
          created_at: string
          created_at: string
        }
        Insert: {
          topics: string[]
          info?: Json
          id: string
          created_at: string
        }
        Update: {
          topics?: string[]
          info?: Json
          id?: string
          created_at?: string
        }
      }
      twitter_search: {
        Row: {
          topic: string
          info: Json
          last_updated_at: string | null
          id: number
        }
        Insert: {
          topic: string
          info?: Json
          last_updated_at?: string | null
          id?: number
        }
        Update: {
          topic?: string
          info?: Json
          last_updated_at?: string | null
          id?: number
        }
      }
    }
    Views: {
      vw_releases: {
        Row: {
          id: number | null
          topic: string | null
          info: Json | null
          published_at: string | null
          topic_info: Json | null
        }
      }
      vw_topic_blog_posts: {
        Row: {
          blog_post_info: Json | null
          published_at: string | null
          language: string | null
          blog_info: Json | null
          official: string | null
          topic_id: string | null
        }
      }
      vw_topic_overview: {
        Row: {
          id: string | null
          info: Json | null
          developers: Json[] | null
          podcasts: Json[] | null
          newsletters: Json[] | null
          book_ids: string[] | null
          course_ids: string[] | null
          releases: Json | null
          communities: Json | null
          latestrelease: Json | null
          blogs: Json | null
        }
      }
    }
    Functions: {
      created_at: {
        Args: { "": unknown }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
