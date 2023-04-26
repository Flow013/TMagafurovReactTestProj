import { Button, Layout, Menu, MenuProps } from 'antd'
import { FC, PropsWithChildren } from 'react'

const { Header, Content } = Layout

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`
}))

export const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <Layout style={{ height: '100vh' }}>
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
    <Content>{children}</Content>
  </Layout>
)
