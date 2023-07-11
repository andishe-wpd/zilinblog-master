// store.ts
import { create } from 'zustand'
import { Post } from '@interfaces/ApiResponse'
type Store = {
  posts: Post[]
  setPosts: (data: Post[]) => void
  searchValue: string
  setSearchValue: (value: string) => void
}

const useStore = create<Store>(set => ({
  posts: [],
  setPosts: (data: Post[]) => set({ posts: data }),
  searchValue: '',
  setSearchValue: (value: string) => set({ searchValue: value }),
}))

export default useStore
