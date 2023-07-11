export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

export interface Post {
  id?: string
  order?: number
  title: string
  summary: string
  mainContent: string
  image: string
  author: string
  date: Date
  jobTitle: string
}

export interface PostResponse {
  totalPage: number
  currentPage: number
  content: Post[]
}

export interface AuthResponse {
  authenticated: boolean
  token: string
  message: string
  name: string
  avatar: string
}
