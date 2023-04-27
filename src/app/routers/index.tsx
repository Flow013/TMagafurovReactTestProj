import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainPage, BeersTablePage } from '../../pages'
import { Spin } from 'antd'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/Beers/Table',
    element: <BeersTablePage />
  }
])

export function AppRouterProvider() {
  return <RouterProvider router={router} fallbackElement={<Spin />} />
}
