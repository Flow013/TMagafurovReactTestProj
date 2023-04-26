import { FC } from 'react'
import { AppLayout } from '../shared/ui/widgets/AppLayout'
import { Button, Result } from 'antd'

export const NotFoundPage: FC = () => (
  <AppLayout>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  </AppLayout>
)
