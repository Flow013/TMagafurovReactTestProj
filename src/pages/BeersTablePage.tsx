import { FC } from 'react'
import { AppLayout } from '../shared/ui/widgets/AppLayout'
import { BeersTableFeature } from '../features'

export const BeersTablePage: FC = () => {
  return (
    <AppLayout>
      <BeersTableFeature />
    </AppLayout>
  )
}
