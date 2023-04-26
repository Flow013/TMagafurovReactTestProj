import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage'
import { Spin } from 'antd'
import { NotFoundPage } from '../../pages/NotFoundPage'

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
