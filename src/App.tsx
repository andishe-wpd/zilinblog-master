import React, { useEffect } from 'react'
import './App.css'
import useTokenValidator from './hooks/useTokenValidator'
import AppRouter from './router/AppRouter'
import profileStore from './store/profileStore'

function App() {
  const token = localStorage.getItem('token') || ''
  const { isLoading, isError, data } = useTokenValidator({ token })
  const setUser = profileStore(state => state.setUser)
  const clearUser = profileStore(state => state.clearUser)

  useEffect(() => {
    if (isLoading || isError) {
      return
    }

    if (data && data.authenticated) {
      setUser(data)
    } else {
      clearUser()
    }
  }, [isLoading, isError, data, setUser, clearUser])

  return <AppRouter />
}

export default App
