import { ConfigProvider } from 'antd'

import 'antd/dist/reset.css'

export function withAntDesign<
  TProps extends Record<string, unknown> = Record<string, unknown>
>(Child: React.ComponentType<TProps>) {
  return (props: TProps) => (
    <ConfigProvider>
      <Child {...props} />
    </ConfigProvider>
  )
}
