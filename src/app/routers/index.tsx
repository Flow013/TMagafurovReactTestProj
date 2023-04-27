import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainPage, NotFoundPage } from '../../pages'
import { Spin } from 'antd'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    element: <NotFoundPage />
  }
])

export function AppRouterProvider() {
  return <RouterProvider router={router} fallbackElement={<Spin />} />
}
