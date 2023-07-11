// store.ts
import { create } from 'zustand'
type UserState = {
  authenticated: boolean
  token: string
  message: string
  name: string
  avatar: string
}
type Store = {
  authenticated: boolean
  token: string
  message: string
  name: string
  avatar: string
  setUser: (user: UserState) => void
  clearUser: () => void
}

const profileStore = create<Store>(set => ({
  authenticated: false,
  token: '',
  message: '',
  name: '',
  avatar: '',
  setUser: user => set(user),
  clearUser: () =>
    set({ authenticated: false, token: '', message: '', name: '', avatar: '' }),
}))

export default profileStore
