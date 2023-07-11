import axios, { AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
})

interface Credentials {
  username: string
  password: string
}

type UserState = {
  authenticated: boolean
  token: string
  message: string
  name: string
  avatar: string
}

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
  }

  post = (data: Credentials) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data)
  }

  getToken = (token: string): Promise<UserState> => {
    return axiosInstance
      .get(`${this.endpoint}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(response => response.data)
      .catch(error => {
        console.error(error)
        throw error
      })
  }
}

export default APIClient
