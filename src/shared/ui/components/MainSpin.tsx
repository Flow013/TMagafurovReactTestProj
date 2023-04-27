import { Spin } from 'antd'
import { ComponentProps, FC } from 'react'

export const MainSpin: FC = ({
  style,
  ...otherProps
}: ComponentProps<typeof Spin>) => (
  <Spin
    style={{ width: '100%', height: '100%', ...(style || {}) }}
    {...otherProps}
  ></Spin>
)
