import { FC } from 'react'
import { AppLayout } from '../shared/ui/widgets/AppLayout'
import { BeersFeature } from '../features'

export const MainPage: FC = () => {
  return (
    <AppLayout>
      <BeersFeature />
    </AppLayout>
  )
}
