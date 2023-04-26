import { Col, Layout, Menu, MenuProps, Row } from 'antd'
import { LngSelector } from '../LngSelector'

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`
}))

export const AppHeader = () => (
  <Layout.Header>
    <Row justify="space-between">
      <Col>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
        />
      </Col>
      <Col>
        <LngSelector />
      </Col>
    </Row>
  </Layout.Header>
)
