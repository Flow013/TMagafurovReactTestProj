import { Layout } from 'antd'
import { FC, PropsWithChildren } from 'react'
import { AppHeader } from './AppHeader'

const { Content } = Layout

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <AppHeader />
      <Content>{children}</Content>
    </Layout>
  )
}
