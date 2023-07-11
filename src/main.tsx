import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import 'typeface-inter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { worker } from './mocks/browser.ts'

worker.start({ onUnhandledRequest: 'bypass' })
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
