import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DarkmodeProvider from './context/DarkmodeContext'
import Root from './page/Root'
import ErrorElement from './page/ErrorElement'
import Home from './page/Home'
import Search from './page/Search'
import VideoDetails from './page/VideoDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />,
    children:[
      { index:true, element: <Home />},
      { path: '/search/:query', element: <Search />},
      { path: '/video/:videoId', element: <VideoDetails />}
    ]
  }
])
export default function App() {
  return (
    <DarkmodeProvider>
      <RouterProvider router={router} />
    </DarkmodeProvider>
  )
}
