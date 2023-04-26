import { FC } from 'react'
import { useBeersGet } from '../api/useBeersGet'
import { Spin } from 'antd'

export const View: FC = () => {
  const { data, isLoading } = useBeersGet({ page: 1, per_page: 80 })
  if (isLoading) {
    return <Spin />
  }
  return <>{JSON.stringify(data, null, '  ')}</>
}
