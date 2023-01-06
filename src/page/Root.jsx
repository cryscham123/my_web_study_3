import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function Root() {
      const queryClient = new QueryClient();

      return (
            <>
                  <Header />
                  <QueryClientProvider client={queryClient}>
                        <Outlet />
                        <ReactQueryDevtools initialIsOpen={true} />
                  </QueryClientProvider>
            </>
      )
}
