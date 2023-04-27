import { FC } from 'react'
import { AppLayout } from '../shared/ui/widgets/AppLayout'
import { BeersFeature } from '../features'

export const BeersTablePage: FC = () => {
  return (
    <AppLayout>
      <BeersFeature />
    </AppLayout>
  )
}
