import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import { PostResponse } from '@interfaces/ApiResponse'

const apiClient = new APIClient<PostResponse>('/posts')

const usePosts = (slug: string) =>
  useQuery({
    queryKey: ['posts', slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 1000 * 60 * 60,
  })

export default usePosts
