// mocks/handlers.ts
import { rest } from 'msw'
import { faker } from '@faker-js/faker'
import { Post } from '@interfaces/ApiResponse'
import { AuthResponse } from '@interfaces/ApiResponse'

const mockUserState: AuthResponse = {
  authenticated: true,
  token: 'some-mock-token',
  message: 'Logged in',
  name: faker.person.fullName(),
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/51.jpg',
}
const generatePosts = (count: number): Post[] => {
  const posts: Post[] = []

  for (let i = 0; i < count; i++) {
    posts.push({
      id: faker.string.uuid(),
      title: faker.lorem.words(3),
      author: faker.person.fullName(),
      date: faker.date.past(),
      summary: faker.lorem.words(20),
      mainContent: faker.lorem.words(60),
      image: faker.image.url(),
      jobTitle: faker.person.jobType(),
    })
  }
  // Sort the posts by date
  posts.sort((a, b) => (a.date > b.date ? -1 : 1))
  return posts
}

const allPosts = generatePosts(80)

export const handlers = [
  rest.get('http://localhost:3000/api/posts', (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page')!) || 1
    const perPage = 8

    const start = (page - 1) * perPage
    const end = start + perPage

    const response = {
      totalPage: Math.ceil(allPosts.length / perPage),
      currentPage: page,
      content: allPosts.slice(start, end),
    }

    return res(ctx.json(response))
  }),

  rest.post('http://localhost:3000/api/login', (req, res, ctx) => {
    const { username, password } = req.body as {
      username: string
      password: string
    }
    if (username === 'admin' && password === 'admin') {
      return res(
        ctx.status(200),
        ctx.json({
          authenticated: true,
          token: 'some-mock-token',
          message: 'Logged in',
          name: faker.person.fullName(),
          avatar: mockUserState.avatar,
        }),
      )
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          authenticated: false,
          message: 'Invalid username or password',
        }),
      )
    }
  }),

  rest.get('http://localhost:3000/api/user', (req, res, ctx) => {
    const token = req.headers.get('Authorization')
    if (token === mockUserState.token) {
      return res(ctx.status(200), ctx.json(mockUserState))
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          message: 'Invalid token',
        }),
      )
    }
  }),
]
