import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      {/* <ReactQueryDevtools /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
