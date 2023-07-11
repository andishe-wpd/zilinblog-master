import { useMutation } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import {AuthResponse} from '@interfaces/ApiResponse'
const apiClient = new APIClient<AuthResponse>('/login')

const useLogin = () => {
  return useMutation(
    (data: { username: string; password: string }) => apiClient.post(data),
    {
      onSuccess: data => {
        if (data.authenticated) {
          // Save the token to localstorage
          localStorage.setItem('token', data.token)
        }
      },
    },
  )
}

export default useLogin

