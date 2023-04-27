import { FC } from 'react'
import { AppLayout } from '../shared/ui/widgets/AppLayout'
import { BeersListFeature } from '../features'

export const BeersListPage: FC = () => {
  return (
    <AppLayout>
      <BeersListFeature />
    </AppLayout>
  )
}
